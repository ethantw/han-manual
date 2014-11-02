
require( './manual' )()
require( './hljs' ).initHighlightingOnLoad()
require( './trad2simp' )()

require( './share' )(
  'footer ul.share',
  {
    via: 'ethantw',
    desc: '〔分享〕漢字標準格式：印刷品般的漢字排版框架'
  })
