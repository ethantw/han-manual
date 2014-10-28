
// Modules
var $ = require( './lib/yjm' )

// Constants
var TITLE = document.title,
    URL   = location,
    ENCODED_URL = encodeURIComponent( URL ),

    LANG = {
      via: '',
      desc: ''
    },

    PATH = {
      share2twr:  'https://twitter.com/intent/tweet?original_referer=%url&text=%desc&url=%url&via=%via',
      share2fb:   'https://www.facebook.com/sharer/sharer.php?u=%url',
      share2goog: 'https://plus.google.com/share?url=%url',
      share2wbo:  'http://service.weibo.com/share/share.php?url=%url&title=%desc'
    }

function assignSharingMission( target, lang ) {
  var lang = $.extend( LANG, lang )

  document.querySelector( target )
  .addEventListener( 'click', function( e ) {
    var name = e.target.nodeName,
        id = e.target.getAttribute( 'id' ),
        url

    if ( name === 'BUTTON' && PATH[ id ] ) {
      url = PATH[ id ]
            .replace( /\%url/g, ENCODED_URL )
            .replace( '%via', lang.via )
            .replace( '%desc', TITLE )

      window.open(
        url,
        'win-share-dialog',
        'width=626,height=436,left=120,top=120'
      )
    }
  })
}

module.exports = assignSharingMission
