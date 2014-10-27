
// Constants
const HEROKU_APP_PATH = '//han-css.herokuapp.com/',
      ROOT = process.cwd()

// Modules
var fs = require( 'fs' ),
    http = require( 'http' ),
    path = require( 'path' ),
    url = require( 'url' ),
    EventEmitter = require( 'events' ).EventEmitter,
    exec = require( 'child_process' ).exec,
    spawn = require( 'child_process' ).spawn,

    stmd = require( 'stmd' )

// Variables
var args = {},
    argv = process.argv.slice( 2 )

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

// Assign defaults and define the start server action.
args.port = Number( process.env.PORT || 7788 )
args.host = process.env.IP || '0.0.0.0'

// Emulate mime if it didn't exist.
var mime

try {
  mime = require( 'mime' )
} catch ( e ) {
  mime = (function () {
    const CONTENT_TYPE = {
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
          'woff': 'application/font-woff'
        }

    return {
      lookup: function ( ext ) {
        ext = ext.trim()

        if ( ext[ 0 ] === '.' ) {
          ext = ext.slice( 1 )
        }
        return CONTENT_TYPE[ ext ] || 'application/octet-stream'
      }
    }
  })()
}

var httpCb = function ( req, res ) {
  const ROOT_PATH_FOR_ASSET = (function() {
    return /^localhost/i.test( req.headers.host ) ?
      '/' : HEROKU_APP_PATH
  })()

  var uri = url.parse( req.url ).pathname,
      mdfilename = false,
      filename

  function httpRespond( code, data, header ) {
    var header = header || {}

    if ( !header[ 'Content-Type' ] ) {
      header[ 'Content-Type' ] = 'text/plain'
    }

    data = data || ''

    res.writeHead( code, header )
    res.end( data )
  }

  function responseWith404() {
    fs.readFile(
      ROOT + '/404.html',
      function( err, data ) {
        httpRespond( 404, data, {
          'Content-Type': 'text/html'
        }
      )
    })
  }

  try {
    filename = decodeURIComponent( path.join( ROOT, uri ))
  } catch ( e ) {
    filename = path.join( ROOT, uri )
  }

  fs.exists( filename, function( exists ) {
    if (
      ( !exists || /manifest.appcache/.test( filename )) &&
      ( !exists && !/^\/manual(\/.*)?$/.test( uri ))
    ) {
      responseWith404()
      return
    }

    if ( /^\/manual/.test( uri )) {
      filename = ROOT + '/manual.html'
      mdfilename = ROOT + '/doc' + (/^\/manual\/?$/.test( uri ) ? '/jianjie.md' : uri.replace( /^\/manual/, '' ).replace( /\/$/, '' ) + '.md')

      fs.exists( mdfilename, function ( mdexists ) {
        if ( !mdexists ) {
          mdfilename = ROOT + '/doc/404.md'
        }
      })
    }

    if ( fs.statSync( filename ).isDirectory()) {
      if ( filename.slice(-1) !== '/' ) {
        // Directory with out a trailing slash.
        // redirect http://host/directory to http://host/directory/
        httpRespond( 302, 'Location is a folder, redirecting..', {
          'Location': uri + '/'
        })
        return
      } else {
        filename = path.join( filename, 'index.html' )

        if ( !fs.existsSync( filename )) {
          responseWith404()
          return
        }
      }
    }

    if ( /\.(html|htm)$/i.test( filename )) {
      fs.readFile( filename, 'utf8', function( err, html ) {
        var ext

        if ( err ) {
          httpRespond( 500, err + '\n' )
          return
        }

        html = html
              .replace( /\{\{asset\-path\}\}/gi, ROOT_PATH_FOR_ASSET )

        if ( mdfilename ) {
          fs.readFile( mdfilename, 'utf8', function( err, mdcode ) {
            var parser, renderer, md2html

            if ( err ) {
              httpRespond( 500, err + '\n' )
              return
            }

            parser = new stmd.DocParser()
            renderer = new stmd.HtmlRenderer()
            md2html = renderer.render( parser.parse( mdcode ))

            html = html
                  .replace( '{{parsed-article-html}}', md2html )

            httpRespond( 200, html, { 'Content-Type': 'text/html; charset=utf-8' })
          })
          return
        }

        httpRespond( 200, html, { 'Content-Type': 'text/html; charset=utf-8' })
      })
    } else {
      fs.readFile( filename, 'binary', function( err, file ) {
        var ext

        if ( err ) {
          httpRespond( 500, err + '\n' )
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

function startServer() {
  http.createServer( httpCb ).listen( args.port, args.host )
    console.log(
      'Serving files from %s at http://%s:%s/',
      ROOT,
      args.host,
      args.port
    )
}

// Watch an array of coffee files.
function startWatching( files ) {
  if ( !files.length ) {
    startServer()
    return
  }
}

// The coffee feature will take care of starting the server.
if ( !args.coffee ) {
  startServer()
}
