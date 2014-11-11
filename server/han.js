
var jsdom = require( 'jsdom' )

jsdom.env(
  '<html lang="zh-Hant"><body><em>你是誰？</em></body></html>',
  [ '../latest/han.js' ],
  function ( error, window ) {
    if ( error ) return
    var document = window.document
    var root = document.documentElement
    var body = document.body

    window.Han( body, root ).render()
    console.log( root.outerHTML )
  }
)
