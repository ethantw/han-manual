
void (function( win, doc, undefined ) {

var root = doc.documentElement,
    body = doc.body

var $ = {
    // Simplified query selectors which return the node list
    // in an array
    id: function( selector, context ) {
      return ( context || document ).getElementById( selector )
    },

    tag: function( selector, context ) {
      return this.makeArray(
        ( context || document ).getElementsByTagName( selector )
      )
    },

    qsa: function( selector, context ) {
      return this.makeArray(
        ( context || document ).querySelectorAll( selector )
      )
    },

    // Create a document fragment, a text node with text
    // or an element with/without classes
    create: function( elem, clazz ) {
      var elem = '!' === elem ?
            document.createDocumentFragment() :
            '' === elem ?
              document.createTextNode( clazz || '' ) :
              document.createElement( elem )

      try {
        if ( clazz ) {
          elem.className = clazz
        }
      } catch ( e ) {}

      return elem
    },

    // Clone a node (text, element or fragment) deeply or
    // childlessly
    clone: function( node, deep ) {
      return node.cloneNode( deep || true )
    },

    // Remove a node (text, element or fragment)
    remove: function( node, parent ) {
      return ( parent || node.parentNode ).removeChild( node )
    },

    // Set attributes all in once with an object
    setAttr: function( target, attr ) {
      var len = attr.length

      if ( typeof attr !== 'object' ) {
        return
      }

      // Native NamedNodeMap
      if (
        typeof attr[ 0 ] === 'object' &&
        'name' in attr[ 0 ]
      ) {
        for ( var i = 0; i < len; i++ ) {
          if ( attr[ i ].value !== undefined ) {
            target.setAttribute( attr[ i ].name, attr[ i ].value )
          }
        }

      // Plain object
      } else {
        for ( var name in attr ) {
          if (
            attr.hasOwnProperty( name ) &&
            attr[ name ] !== undefined
          ) {
            target.setAttribute( name, attr[ name ] )
          }
        }
      }
      return target
    },

    // Return if the current node should be ignored,
    // `<wbr>` or comments
    isIgnorable: function( node ) {
      return node.nodeName === 'WBR' ||
        node.nodeType === Node.COMMENT_NODE
    },

    // Convert array-like objects into real arrays
    // for the native prototype methods
    makeArray: function( obj ) {
      return Array.prototype.slice.call( obj )
    },

    // Extend target with an object
    extend: function( target, object ) {
      var isExtensible = typeof target === 'object' ||
            typeof target === 'function' ||
            typeof object === 'object'

      if ( !isExtensible ) {
        return
      }

      for ( var name in object ) {
        if ( object.hasOwnProperty( name )) {
          target[ name ] = object[ name ]
        }
      }
      return target
    }
  }

/*  Automated ID for headings and info-box
   ---------------------------------------- */

var manual = doc.querySelector( 'body.manual article.main-content' ),
    heading = $.qsa( 'h2, h3, h4, h5, h6', manual ),
    infobox = $.qsa( 'div.info, .example, pre' )

heading.forEach(function( elem, i ) {
  var anchor = elem.lastChild,
      anchorId = anchor.nodeValue

  elem.setAttribute( 'id', 'sec-' + i )

  if (
    anchor &&
    anchor.nodeType === Node.COMMENT_NODE &&
    /\s?\#[\w\_\-]+\s?/.test( anchorId )
  ) {
    elem.setAttribute( 'id', anchorId.replace( /\s?\#([\w\_\-]+)\s?/i, '$1' ))
  }
})

infobox.forEach(function( elem, i ) {
  elem.setAttribute( 'id', 'info-' + i )
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
    target.offsetTop + 1.5*16,
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

win.addEventListener( 'DOMContentLoaded', function() {
  setTimeout( function() {
    position( location.hash, false )
  }, 100 )
})

/*  Navi fixation
   --------------- */

var nav = doc.querySelector( 'nav.layout' ),
    fixedY = 3.5*16

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
void [ 'mousewheel', 'DOMMouseScroll' ]
.forEach(function( event ) {
  doc.addEventListener( event, function( e ) {
    nav.addEventListener( 'mouseover', function() {
      e.preventDefault()
    })
  })
})

// Prevent weird scrolling issue while articles
// are too short
win.addEventListener( 'DOMContentLoaded', function() {
  var minHeightForArticle = nav.offsetHeight + 2*16
  manual.style.minHeight = minHeightForArticle + 'px'
})

/*  Interference-free example boxes
   --------------------------------- */

var itff = $.qsa( '.interference-free', manual )

itff.forEach( elem, function() {
  
})

/*  Highlight.js for codes
   ------------------------ */

if ( typeof hljs !== undefined ) {
  hljs.initHighlightingOnLoad()
}

})( window, window.document )
