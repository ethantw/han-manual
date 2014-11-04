
// Modules
var $ = require( './lib/yjm' )

// Constants
var TITLE = document.title
var URL   = location
var ENCODED_URL = encodeURIComponent( URL )
var LANG = {
  via: '',
  desc: ''
}
var PATH = {
  share2twr:  'https://twitter.com/intent/tweet?original_referer=%url&text=%desc&url=%url&via=%via',
  share2fb:   'https://www.facebook.com/sharer/sharer.php?u=%url',
  share2goog: 'https://plus.google.com/share?url=%url',
  share2wbo:  'http://service.weibo.com/share/share.php?url=%url&title=%desc'
}
var DIALOG_HEIGHT = 436
var DIALOG_WIDTH  = 626

// Variables
var aHeight = screen.availHeight
var aWidth  = screen.availWidth
var aTop    = (aHeight - DIALOG_HEIGHT)/2
var aLeft   = (aWidth - DIALOG_WIDTH)/2

function assignSharingMission( target, lang ) {
  var lang = $.extend( LANG, lang )

  document.querySelector( target )
  .addEventListener( 'click', function( e ) {
    var name = e.target.nodeName
    var id = e.target.getAttribute( 'id' )
    var url

    if ( name === 'BUTTON' && PATH[ id ] ) {
      url = PATH[ id ]
            .replace( /\%url/g, ENCODED_URL )
            .replace( '%via', lang.via )
            .replace( '%desc', TITLE )

      window.open(
        url,
        'win-share-dialog',
        'width=' + DIALOG_WIDTH + ',height=' + DIALOG_HEIGHT + ',left=' + aLeft + ',top='+ aTop
      )
    }
  })
}

module.exports = assignSharingMission
