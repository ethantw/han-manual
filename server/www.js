
// Modules
var fs = require('fs'),
    browserify = require('browserify')(),
    uglify = require( 'uglify-js' ),
    sass =  require( 'node-sass' ),
    jade = require( 'jade' )

// Constants
const APP_JS = './script/main.js',
      SASS = './sass/style.sass',
      TEMPLATE = [
        '404',
        'index',
        'itff',
        'manual'
      ]

// Compile Sass to CSS
sass.render({
  file: SASS,
  success: function( src ) {
    fs.writeFile(
      '_public/style.css',
      src,
      function( err ) {
        if ( err ) {
          console.log( err )
        }
      })
  },
  outputStyle: 'compressed'
})

// Browerify and Uglify the main.js
browserify.add( APP_JS ).bundle( function( err, buf ) {
  var src = uglify.minify( buf.toString( 'utf-8' ), { fromString: true }).code

  fs.writeFile(
    '_public/app.js',
    src,
    function( err ) {
      if ( err ) {
        console.log( err )
      }
    })
})

// Compile Jade to HTML
TEMPLATE.forEach(function( filename ) {
  var html = jade.renderFile( 'template/' + filename +  '.jade' )

  fs.writeFile(
    '_public/' + filename + '.html',
    html,
    function( err ) {
      if ( err ) {
        console.log( err )
      }
    })
})
