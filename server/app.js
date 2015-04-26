
// Modules
var fs = require( 'fs' )
var http = require( 'http' )
var path = require( 'path' )
var url = require( 'url' )
var EventEmitter = require( 'events' ).EventEmitter
var exec = require( 'child_process' ).exec
var spawn = require( 'child_process' ).spawn
var mime = require( 'mime-types' )

var zlib = require( 'zlib')
var ETag = require( 'ETag' )

// Constants
const HEROKU_APP_PATH = '//han-css.herokuapp.com/'
const HOST = process.env.IP || '0.0.0.0'
const PORT = Number( process.env.PORT || 7788 )
const ROOT = process.cwd()
const WWW = ROOT + '/_public/'

const ROOT_PATH_FOR_ASSET = PORT === 7788 ? '/' : HEROKU_APP_PATH

const HTML_CNTT = mime.contentType( 'html' )

const LANG = {
  'han-version': '3.2.0',
  error: {
    '404': '找不到所請求的頁面',
    '500': '伺服器出現錯誤'
  }
}

const REDIR_MAIN = require( './redir.js' ).MAIN
const REDIR_MANUAL = require( './redir.js' ).MANUAL

// Start the sever
http.createServer( function ( req, res ) {
  var uri = url.parse( req.url ).pathname
  var slashless = uri.replace( /^\/(.*)\/?$/ig, '$1' )
  var acceptGzip = /\bgzip\b/i.test( req.headers[ 'accept-encoding' ]) ? true : false
  var filename
  var manualId
  var etag

  function resWrite( data, binary ) {
    if ( binary ) {
      res.write( data, 'binary' )
      res.end()
      return
    }
    res.end( data )
  }

  function httpRespond( code, data, headers, binary ) {
    var headers = headers || {}
    var data = data || ''

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

    if ( acceptGzip ) {
      headers[ 'Content-Encoding' ] = 'gzip'
      zlib.gzip( new Buffer( data, binary ? 'binary' : 'utf-8' ), function( err, data ) {
        if ( err ) {
          responseWithError( 500 )
          return
        } 
        res.writeHead( code, headers )
        resWrite( data, binary )
      })
      return
    }
    res.writeHead( code, headers )
    resWrite( data, binary )
  }

  function responseWithError( code ) {
    var code = code || 500

    fs.readFile(
      ROOT + '/template/html/error.html',
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

    // redir
    } else if ( REDIR_MAIN[ slashless ] ) {
      httpRespond( 302, 'This is an old path, redirecting…', {
        'Location': REDIR_MAIN[ slashless ]
      })
      return
    // check for manual files
    } else if ( /^\/manual/.test( uri )) {
      isJianjie = !!/^\/manual\/?$/.test( uri )
      manualId = uri.replace( /^\/manual\/?/, '' ).replace( /\/$/, '' ).replace( /\.html?$/, '' )

      if ( !/\.html?$/.test( uri )) {
        filename += isJianjie ? '/jianjie.html' : '.html'
      }

      // redirect old manual URLs from Han.css v2.x.x
      if ( REDIR_MANUAL[ manualId ] ) {
        httpRespond( 302, 'This is an old path, redirecting…', {
          'Location': '/manual' + REDIR_MANUAL[ manualId ]
        })
        return
      }

      if ( !fs.existsSync( filename )) {
        fs.readFile( WWW + '/manual/404.html', function ( err, html ) {
          httpRespond( 404, html, {
            'Content-Type': HTML_CNTT
          })
        })
        return
      }

    // check for file existence
    } else if ( !exists && !/^\/manual(\/.*)?$/.test( uri )) {
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

    fs.readFile( filename, 'binary', function( err, file ) {
      var ext
      if ( err ) {
        responseWithError( 500 )
        return
      }
      etag = getETag( filename )
      ext = path.extname( filename ).slice( 1 )
      httpRespond( 200, file, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': mime.contentType( ext ),
        'ETag': etag
      }, true )
    })
  })
}).listen( PORT, HOST )

console.log(
  'Serving files from %s at http://%s:%s/',
  WWW,
  HOST,
  PORT
)
