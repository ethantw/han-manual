
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
    renderer = new stmd.HtmlRenderer(),
    jsdom = require( 'jsdom' )

// Constants
const HEROKU_APP_PATH = '//han-css.herokuapp.com/',
      HOST = process.env.IP || '0.0.0.0',
      PORT = Number( process.env.PORT || 7788 ),
      ROOT = process.cwd(),
      WWW = ROOT + '/_public/',

      ROOT_PATH_FOR_ASSET = process.env.IP,

      HTML_CNTT = mime.contentType( 'html' ),

      LANG = {
        error: {
          '404': '找不到所請求的頁面',
          '500': '伺服器出現錯誤'
        }
      },

      REDIR = JSON.parse( fs.readFileSync( ROOT + '/server/redir.json' ))

// Functions
function makeArray( obj ) {
  return [].slice.call( obj )
}

function getManualTitleAndSetAnchor( win ) {
  var doc = win.document,
      manualTitle = doc.querySelector( 'h1' ).textContent || ''

  manualTitle = manualTitle ? manualTitle + ' — ' : ''

  makeArray(doc.querySelectorAll( 'h2, h3, h4, h5, h6' ))
  .forEach(function( elem, i ) {
    var anchor = elem.lastChild,
        anchorId = anchor.nodeValue

    elem.setAttribute( 'id', 'sec-' + i )

    if (
      anchor &&
      anchor.nodeType === 8 &&
      /\s?\#[\w\_\-]+\s?/.test( anchorId )
    ) {
      elem.setAttribute( 'id', anchorId.replace( /\s?\#([\w\_\-]+)\s?/i, '$1' ))
      elem.removeChild( anchor )
    }
  })

  makeArray(doc.querySelectorAll( 'div.info, .example, pre, table' ))
  .forEach(function( elem, i ) {
    if ( !elem.getAttribute( 'id' )) {
      elem.setAttribute( 'id', 'info-' + i )
    }
  })

  return [ manualTitle, doc.body.innerHTML ]
}

// Start the sever
http.createServer( function ( req, res ) {
  var uri = url.parse( req.url ).pathname,
      manualId = false,
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
      headers[ 'ETag' ] && req.headers[ 'if-none-match' ] &&
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

  function responseWithError( code ) {
    fs.readFile(
      WWW + '/error.html',
      'utf8',
      function( err, html ) {
        html = html
               .replace( /\{\{error\-code\}\}/gi, code )
               .replace( /\{\{error\-msg\}\}/gi, LANG.error[ code ] )

        httpRespond( code, html, {
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
    filename = decodeURIComponent( path.join( WWW, uri ))
  } catch ( e ) {
    filename = path.join( WWW, uri )
  }

  fs.exists( filename, function( exists ) {
    // rewrite favicon
    if ( /\/favicon.ico$/.test( filename )) {
      filename = WWW + '/img/favicon.png'

    // check for manual files
    } else if ( /^\/manual/.test( uri )) {
      filename = WWW + '/manual.html'
      manualId = /^\/manual\/?$/.test( uri ) ? 'jianjie' : uri.replace( /^\/manual\/?/, '' ).replace( /\/$/, '' )
      mdfilename = ROOT + '/doc/' + manualId + '.md'

      // redirect old manual URLs from Han.css v2.x.x
      if ( REDIR[ manualId ] ) {
        httpRespond( 302, 'This is an old path, redirecting…', {
          'Location': '/manual/' + REDIR[ manualId ]
        })
        return
      }

      fs.exists( mdfilename, function ( mdexists ) {
        if ( !mdexists ) {
          mdfilename = ROOT + '/doc/404.md'
        }
      })

    // check for file existence
    } else if (
      ( !exists || /manifest.appcache/.test( filename )) &&
      ( !exists && !/^\/manual(\/.*)?$/.test( uri ))
    ) {
      responseWithError( 404 )
      return

    // redirect directories (without a trailing slash)
    } else if ( fs.statSync( filename ).isDirectory()) {
      if ( filename.slice(-1) !== '/' ) {
        httpRespond( 302, 'This is a folder, redirecting…', {
          'Location': uri + '/'
        })
        return

      // rewrite directories to their indices
      } else {
        filename = path.join( filename, 'index.html' )

        if ( !fs.existsSync( filename )) {
          responseWithError( 404 )
          return
        }
      }
    }

    etag = getETag( filename )

    if ( /\.(html|htm)$/i.test( filename )) {
      fs.readFile( filename, 'utf8', function( err, html ) {
        if ( err ) {
          responseWithError( 500 )
          return
        }

        html = html
              .replace( /\{\{asset\-path\}\}/gi, ROOT_PATH_FOR_ASSET )

        if ( mdfilename ) {
          etag = getETag( mdfilename )

          fs.readFile( mdfilename, 'utf8', function( err, mdcode ) {
            var  md2html

            if ( err ) {
              responseWithError( 500 )
              return
            }

            md2html = renderer.render( parser.parse( mdcode ))

            jsdom.env(
              md2html,
              function ( err, win ) {
                var ret

                if ( err ) {
                  responseWithError( 500 )
                  return
                }

                ret = getManualTitleAndSetAnchor( win )
                html = html
                      .replace( /\{\{manual\-page\-id\}\}/gi, manualId )
                      .replace( /\{\{manual\-page\-title\}\}/gi, ret[0] )
                      .replace( '{{parsed-article-html}}', ret[1] )

                httpRespond( 200, html, {
                  'Content-Type': HTML_CNTT,
                  'ETag': etag
                })
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
          responseWithError( 500 )
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
}).listen( PORT, HOST )

console.log(
  'Serving files from %s at http://%s:%s/',
  WWW,
  HOST,
  PORT
)
