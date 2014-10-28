
// Modules
var fs = require('fs'),
    jade = require( 'jade' ),
    browserify = require('browserify')(),
    uglify = require( 'uglify-js' )

// Constants
const TEMPLATE = [
        '404',
        'index',
        'itff',
        'manual'
      ],

      APP_JS = './script/main.js'

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
