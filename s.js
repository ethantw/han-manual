var
  fs = require( 'fs' ),
  http = require( 'http' ),
  path = require( 'path' ),
  url = require( 'url' ),
  EventEmitter = require( 'events' ).EventEmitter,
  exec = require( 'child_process' ).exec,
  spawn = require( 'child_process' ).spawn,

  stmd = require('./js/stmd'),

  args = {},
  argv = process.argv.slice( 2 )
;

// Guess arguments.
for ( var i = 0; i < argv.length; i++ ) {
  arg = argv[i]
  if ( arg.match( /^\d+$/ )){
    args.port = arg
  } else if ( arg === 'coffee' ){
    args.coffee = true
  } else if ( arg === 'fix' ){
    args.fix = true
  } else {
    args.host = arg
  }
}

// Emulate mime if it didn't exist.
var
  mime
;
try {
  mime = require( 'mime' )
} catch ( e ) {
  mime = (function () {
    var
      CONTENT_TYPES = {
        'js':   'application/javascript; charset=utf-8',
        'css':  'text/css; charset=utf-8',
        'sass': 'text/css; charset=utf-8',
        'scss': 'text/css; charset=utf-8',
        'json': 'application/json; charset=utf-8',
        'html': 'text/html; charset=utf-8',
        'htm':  'text/html; charset=utf-8',
        'jpg':  'image/jpeg',
        'jpeg': 'image/jpeg',
        'png':  'image/png',
        'ico':  'image/x-icon',
        'gif':  'image/gif',
        'md':   'text/plain; charset=utf-8',
        'txt':  'text/plain; charset=utf-8',
        'svg':  'image/svg+xml',
        'ttf':  'application/x-font-ttf',
        'woff': 'application/font-woff',
        'apk':  'application/vnd.android.package-archive'
      }
    ;
    return {
      lookup: function ( ext ) {
        ext = ext.trim()

        if ( ext[ 0 ] === '.' ) {
          ext = ext.slice( 1 )
        }
        return CONTENT_TYPES[ ext ] || 'application/octet-stream'
      }
    }
  })()
}

// Simple http response.
function httpRespond( res, code, data, headers ) {
  headers = headers || {}

  if ( !headers[ 'Content-Type' ] ) {
    headers[ 'Content-Type' ] = 'text/plain'
  }

  data = data || ''
  res.writeHead( code, headers )
  res.end( data )
}

var httpCb = function ( req, res ) {
  var
    uri = url.parse( req.url ).pathname,
    mdfilename = false,
    root,
    filename
  ;

  try {
      filename = decodeURIComponent( path.join( process.cwd(), uri ))
  } catch ( e ) {
      filename = path.join( process.cwd(), uri )
  }

  root = filename.replace( new RegExp( uri + '$', 'i'), '' )

  fs.exists( filename, function ( exists ) {
    if (
      ( !exists || /manifest.appcache/.test( filename )) &&
      ( !exists && !/^\/manual(\/.*)?$/.test( uri ))
    ) {
      filename = root + '/404.html'
      fs.readFile( filename, function( err, data ) {
        httpRespond( res, 404, data, {
          'Content-Type': 'text/html'
        })
      })
      return
    }

    if ( /^\/manual/.test( uri )) {
      filename = root + '/manual.html'
      mdfilename = root + '/doc' + (/^\/manual\/?$/.test( uri ) ? '/conghe_kaishi.md' : uri.replace( /^\/manual/, '' ) + '.md')

      fs.exists( mdfilename, function ( mdexists ) {
        if ( !mdexists ) {
          mdfilename = root + '/doc/404.md'
        }
      })
    } else if ( fs.statSync( filename ).isDirectory()) {
      if ( filename.slice(-1) !== '/' ) {
        // Directory with out a trailing slash.
        // redirect http://host/directory to http://host/directory/
        httpRespond( res, 302, 'Location is a folder, redirecting..', {
          'Location': uri + '/'
        })
        return
      } else {
        filename = path.join( filename, 'index.html' )
      }
    }

    if ( mdfilename ) {
      fs.readFile( filename, 'utf8', function( err, html ) {
        var ext

        if ( err ) {
          httpRespond(res, 500, err + '\n')
          return
        }

        fs.readFile( mdfilename, 'utf8', function( err, mdcode ) {
          var parser, renderer, md2html

          if ( err ) {
            httpRespond(res, 500, err + '\n')
            return
          }

          parser = new stmd.DocParser()
          renderer = new stmd.HtmlRenderer()
          md2html = renderer.render( parser.parse( mdcode ))
          html = html.replace( '<!--!!!MARKDOWN!!!-->', md2html )

          res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8' })
          res.end( html )
        })
      })
    } else {
      fs.readFile( filename, 'binary', function( err, file ) {
        var ext

        if ( err ) {
          httpRespond(res, 500, err + '\n')
          return
        }

        ext = path.extname( filename ).slice( 1 )
        res.writeHead( 200, { 'Content-Type': mime.lookup( ext ) })
        res.write( file, 'binary' )
        res.end()
      })
    }
  })
}

// Assign defaults and define the start server action.
args.port = args.port || 9999
args.host = args.host || '0.0.0.0'
var
  startServer = function () {
    http.createServer( httpCb ).listen( args.port, args.host )
      console.log(
        'Serving files from %s at http://%s:%s/',
        process.cwd(),
        args.host,
        args.port
      )
  }
;

// Watch an array of coffee files.
var
  startWatching = function ( files ) {
    if ( !files.length ) {
      startServer()
      return
    }
  }
;

// The coffee feature will take care of starting the server.
if ( !args.coffee ) {
  startServer()
}
