
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

    ETag = require( 'ETag' ),

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
var mime = require( 'mime' )

mime.define({
  'text/x-markdown': [ 'x-md' ]
})

var httpCb = function ( req, res ) {
  const ROOT_PATH_FOR_ASSET = (function() {
    return /^localhost/i.test( req.headers.host ) ?
      '/' : HEROKU_APP_PATH
  })()

  var uri = url.parse( req.url ).pathname,
      mdfilename = false,
      filename,
      etag

  function httpRespond( code, data, headers, binary ) {
    var headers = headers || {},
        data = data || ''

    if ( !headers[ 'Content-Type' ] ) {
      headers[ 'Content-Type' ] = 'text/plain'
    }

    if (
      headers[ 'ETag' ] &&
      req.headers[ 'if-none-match' ] &&
      headers[ 'ETag' ] === req.headers[ 'if-none-match' ]
    ) {
      res.writeHead( 304 )
      res.end()
      return
    }

    res.writeHead( code, headers )

    if ( binary ) {
      res.write( data, 'binary' )
      res.end()
      return
    }
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

  function getETag( filename ) {
    return ETag.Calcul({
      resource: filename
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
      etag = getETag( mdfilename )

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

    etag = getETag( filename )

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

            httpRespond( 200, html, {
              'Content-Type': 'text/html; charset=utf-8',
              'ETag': etag
            })
          })
          return
        }

        httpRespond( 200, html, {
          'Content-Type': 'text/html; charset=utf-8',
          'ETag': etag
        })
      })
    } else {
      fs.readFile( filename, 'binary', function( err, file ) {
        var ext

        if ( err ) {
          httpRespond( 500, err + '\n' )
          return
        }

        ext = path.extname( filename ).slice( 1 )

        httpRespond( 200, file, {
          'Content-Type': mime.lookup( ext ),
          'ETag': etag
        }, true )
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
