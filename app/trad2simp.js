
module.exports = function() {

// Modules
var $ = require( './lib/yjm' )

var FILTER_OUT = 'style, script, *:not(:lang(zh)), h1, div.example, pre, code, textarea'

// Variables
var win = window,
    doc = win.document,
    root = doc.documentElement,
    body = doc.body,

    // Do not use `Han.init` here, for trad2simp
    // converting could be controversial.
    hinst = Han.find( body )

hinst.filterElem = function( currentElem ) {
  if ( $.matches( currentElem, FILTER_OUT )) {
    return false
  }
  return true
}

win
.addEventListener( 'DOMContentLoaded', function() {
  // Get the trad2simp data asynchronously
  $.xhr( '/data/trad2simp.csv', function( data ) {
    var trad2simp = {},
        tradblob = '',
        rTrad

    data.split( '\n' )
    .forEach(function( row ){
      row.replace(
        /(.),(.+)/g,
        function( match, trad, simp ) {
          trad2simp[ trad ] = simp.split('')[0]
          tradblob += trad
        }
      )
    })

    rTrad = new RegExp( '[' + tradblob + ']', 'g' )

    // Assign button click event
    $.id( 'trad2simp' )
    .addEventListener( 'click', function() {
      var state = root.getAttribute( 'lang' )

      switch ( state ) {
        case 'zh-Hant':
          hinst
          .replace(
            rTrad,
            function( portion, match ) {
              try {
                return trad2simp[ match[0] ]
              } catch (e) {
                return match[0]
              }
            }
          )
          root.setAttribute( 'lang', 'zh-Hans' )
          break
        case 'zh-Hans':
          hinst.revert()
          root.setAttribute( 'lang', 'zh-Hant' )
          break
      }
    })
  })
})
}
