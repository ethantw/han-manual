
// Modules
var $ = require( './lib/yijun.js' )

// Constants
var TITLE = document.title,
    URL   = location,

    LANG = {
      via: 'ethantw',
      desc: '〔分享〕漢字標準格式：印刷品般的漢字排版框架'
    },

    PATH = {
      share2twr:  'https://twitter.com/intent/tweet?original_referer=%url&text=%desc&url=%url&via=%via',
      share2fb:   'https://www.facebook.com/sharer/sharer.php?u=%url',
      share2goog: 'https://plus.google.com/share?url=%url',
      share2wbo:  'http://service.weibo.com/share/share.php?url=%url&title=%desc'
    }

// Variables

document
  .querySelector( 'footer ul.share' )
  .addEventListener( 'click', function( e ) {
    var name = e.target.nodeName,
        id = e.target.getAttribute( 'id' ),
        url

    if ( name === 'BUTTON' && PATH[ id ] ) {
      url = PATH[ id ]
            .replace( /\%url/g, URL )
            .replace( '%via', LANG.via )
            .replace( '%desc', TITLE )

      window.open(
      	url,
      	'win-share-dialog',
      	'width=626,height=436,left=120,top=120'
      )
    }
  })

module.exports = function( lang ) {

}
