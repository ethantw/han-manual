
module.exports = function() {

// Modules
var $ = require( './lib/yjm' ),
    CSVParser = require( 'csv-parse' )

// Variables
var win = window,
    doc = win.document,
    root = doc.documentElement,
    body = doc.body,
    rHanzi = Han.TYPESET.char.cjk.individual

// AJAX
win
.addEventListener( 'DOMContentLoaded', function() {
  // Get the trad2simp data asynchronously
  $.xhr( '/data/trad2simp.csv', function( data ) {
    var trad2simp = {}


    CSVParser( data, function( err, output ) {
      output.forEach(function( zi ) {
        var tradzi = zi[1].split('')

        if ( tradzi.length === 1 ) {
          trad2simp[ zi[1] ] = zi[0]
        } else {
          tradzi.forEach(function( i ) {
            trad2simp[i] = zi[0]
          })
        }
      })

      // Assign button click event
      $.id( 'trad2simp' )
      .addEventListener( 'click', function() {
        var state = root.getAttribute( 'lang' ),
            hinst = Han.init

        switch ( state ) {
          case 'zh-Hant':
            hinst
            .replace( rHanzi, function( portion, match ) {
              if ( trad2simp[ match[0] ] ) {
                return trad2simp[ match[0] ]
              }

              return match[0]
            })

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
})
}
