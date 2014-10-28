
module.exports = function() {
// Constants
var REM = Number( 16 )

// Variables
var win = window,
    doc = win.document,
    root = doc.documentElement,
    body = doc.body

// Modules
var $ = require( './lib/yjm' )

/*  Automated IDs for headings and info-boxes
   ------------------------------------------- */

var manual = doc.querySelector( 'article.main-content' )

$.qsa( 'h2, h3, h4, h5, h6', manual )
.forEach(function( elem ) {
  var anchorId = elem.getAttribute( 'id' ),
      getter = $.create( 'a', 'heading-anchor' )


  getter.innerHTML = '點此獲取本節網址'
  getter.addEventListener( 'click', function( e ) {
    e.preventDefault()
    location.hash = anchorId
  })
  $.setAttr( getter, {
    'hidden': 'hidden',
    'title': '點此獲取本節網址',
    'href': '#' + anchorId
  })
  elem.appendChild( getter )
})

/*  Proper positioning for hash anchors
   ------------------------------------- */

var navBookmark = $.qsa( 'nav.layout ol ol' ),
    duration = 1000,
    isIndex = new RegExp( '\/manual\/?$', 'i' ).test( location.href.replace( location.hash, '' )),

    scroller = (function() {
      var ret
      body.scrollTop = 1
      ret = ( body.scrollTop == 1 ) ? body : root
      ret.scrollTop = 0
      return ret
    })()

function isSamePage( href ) {
  return new RegExp( '^' + location.href.replace( location.hash, '' ).replace( /\/$/, '' ), 'i' ).test( href )
}

function position( hash, executeCb ) {
  var target = hash ? doc.querySelector( hash ) || null : null,
      callback = executeCb !== false ?
        function() {
          location.hash = hash
        } : null

  if ( !target ) {
    return
  }

  scrollTo(
    target.offsetTop + 1.5*REM,
    100,
    callback
  )
}

function scrollTo( to, duration, callback ) {
  if ( duration <= 0 ) {
    if ( callback ) {
      callback()
    }
    return
  }

  var current = scroller.scrollTop,
      difference = to - current,
      perTick = difference / duration * 10

  setTimeout( function() {
    scroller.scrollTop = current + perTick
    scrollTo( to, duration - 10, callback || null )
  }, 10 )
}

navBookmark.forEach(function( elem ) {
  elem.addEventListener( 'click', function( e ) {
    var anchor = (
          e.target && e.target.nodeName === 'A'
        ) ? e.target : null

    if (
      !e.metaKey &&
      anchor &&
      !isIndex &&
      isSamePage( anchor.href )
    ) {
      e.preventDefault()

      if ( anchor.hash ) {
        position( anchor.hash )
      } else {
        scrollTo( 0, 70, function() {
          location.hash = ''
        })
      }
    }
  }, true )
})


void [
  'hashchange',
  'DOMContentLoaded'
].forEach(function( event ) {
  win.addEventListener( event, function() {
    setTimeout( function() {
      position( location.hash, false )
    }, 100 )
  })
})

/*  Navi fixation
   --------------- */

var nav = doc.querySelector( 'nav.layout' ),
    fixedY = 4.5*REM

win.addEventListener( 'scroll', function() {
  if (
    scroller.scrollTop >= fixedY &&
    body.getAttribute( 'data-js-fixed-nav' ) !== true
  ) {
    body.setAttribute( 'data-js-fixed-nav', true )
  } else {
    body.removeAttribute( 'data-js-fixed-nav' )
  }
})

// Prevent the navi scrolling conflict
void [
  'mousewheel',
  'DOMMouseScroll'
].forEach(function( event ) {
  doc.addEventListener( event, function( e ) {
    nav.addEventListener( 'mouseover', function() {
      e.preventDefault()
    })
  })
})

// Prevent weird scrolling issue while articles
// are too short
win.addEventListener( 'DOMContentLoaded', function() {
  var minHeightForArticle = nav.offsetHeight + 2*REM
  manual.style.minHeight = minHeightForArticle + 'px'
})

/*  Interference-free example boxes
   --------------------------------- */

var itff = $.qsa( '.itff', manual )

itff.forEach(function( elem, i ) {
  var html = elem.innerHTML,
      iframe = $.create( 'iframe' ),
      ifwin, ifdoc, ifbody, wrapper

  elem.style.height = elem.offsetHeight + 'px'
  elem.innerHTML = ''

  iframe.setAttribute( 'src', '/itff.html' )
  elem.appendChild( iframe )

  ifwin = iframe.contentWindow
  ifwin.addEventListener( 'DOMContentLoaded', function() {
    ifdoc = iframe.contentDocument
    ifroot = ifdoc.documentElement
    ifbody = ifdoc.body

    wrapper = $.create( 'div', 'wrapper' )
    wrapper.innerHTML = html
    ifbody.replaceChild( wrapper, $.id( 'replacee', ifdoc ))
    ifwin.Han.init()

    // ifroot.setAttribute( 'lang', 'zh-Hant' )
  })
})
}
