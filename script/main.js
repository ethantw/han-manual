void (function( win, doc, undefined ) {

/*  Main manual
   ------------- */
require( './manual' )

/*  Highlight.js
   -------------- */
require( './hljs' ).initHighlightingOnLoad()

/*  Share buttons
   --------------- */

require( './share' )(
  'footer ul.share',
  {
    via: 'ethantw',
    desc: '〔分享〕漢字標準格式：印刷品般的漢字排版框架'
  })

})( this, this.document )
