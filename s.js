
// Modules
var fs = require( 'fs' ),
    http = require( 'http' ),
    path = require( 'path' ),
    url = require( 'url' ),
    EventEmitter = require( 'events' ).EventEmitter,
    exec = require( 'child_process' ).exec,
    spawn = require( 'child_process' ).spawn,
    mime = require( 'mime-types' ),

    ETag = require( 'ETag' ),
    stmd = require( 'stmd' ),
    parser = new stmd.DocParser(),
    renderer = new stmd.HtmlRenderer()

// Constants
const HEROKU_APP_PATH = '//han-css.herokuapp.com/',
      HOST = process.env.IP || '0.0.0.0',
      PORT = Number( process.env.PORT || 7788 ),
      ROOT = process.cwd(),

      ROOT_PATH_FOR_ASSET = (function() {
        return HOST === '0.0.0.0' ?
          '/' : HEROKU_APP_PATH
      })(),

      HTML_CNTT = mime.contentType( 'html' )

var httpCb = function ( req, res ) {
  var uri = url.parse( req.url ).pathname,
      mdfilename = false,
      filename,
      etag

  function httpRespond( code, data, headers, binary ) {
    var headers = headers || {},
        data = data || ''

    if ( !headers[ 'Content-Type' ] ) {
      headers[ 'Content-Type' ] = 'text/plain; charset=utf-8'
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
          'Content-Type': HTML_CNTT
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
          etag = getETag( mdfilename )

          fs.readFile( mdfilename, 'utf8', function( err, mdcode ) {
            var  md2html

            if ( err ) {
              httpRespond( 500, err + '\n' )
              return
            }

            md2html = renderer.render( parser.parse( mdcode ))

            html = html
                  .replace( '{{parsed-article-html}}', md2html )

            httpRespond( 200, html, {
              'Content-Type': HTML_CNTT,
              'ETag': etag
            })
          })
          return
        }

        httpRespond( 200, html, {
          'Content-Type': HTML_CNTT,
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
          'Content-Type': mime.contentType( ext ),
          'ETag': etag
        }, true )
      })
    }
  })
}

http.createServer( httpCb ).listen( PORT, HOST )
console.log(
  'Serving files from %s at http://%s:%s/',
  ROOT,
  HOST,
  PORT
)
