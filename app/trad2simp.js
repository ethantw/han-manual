
module.exports = function() {

// Modules
var $ = require( './lib/yjm' )

var AVOID = 'style, script, *:not(:lang(zh)), h1, [lang^="zh"]'

// Variables
var win = window,
    doc = win.document,
    root = doc.documentElement,
    body = doc.body,

    // Do not use `Han.init` here, for trad2simp
    // converting could be controversial.
    hinst = Han.find( body ),

    userPref

function getState() {
  return root.getAttribute( 'lang' )
}

try {
  userPref = localStorage.getItem( 'hanst' )
} catch(e) {
  userPref = null
}

hinst.avoid( AVOID )

win
.addEventListener( 'DOMContentLoaded', function() {
  // Get the trad2simp data asynchronously
  $.xhr( '/data/trad2simp.csv', function( data ) {
    var trad2simp = {},
        tradblob = ''

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

    // Assign button click event
    $.id( 'trad2simp' )
    .addEventListener( 'click', function() {
      var state = getState()

      switch ( state ) {
        case 'zh-Hant':
          hinst
          .replace(
            new RegExp( '[' + tradblob + ']', 'g' ),
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
      try {
        localStorage.setItem( 'hanst', getState())
      } catch(e) {}
    })

    // Trigger the converting if the preference
    // is stored
    if ( userPref && userPref !== getState()) {
      $.id( 'trad2simp' ).click()
    }
  })
})
}
