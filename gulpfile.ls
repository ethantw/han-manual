
require! {
  browserify
  \vinyl-transform
  \vinyl-paths
  del
  gulp
  \gulp-cssmin
  \gulp-browserify
  \gulp-uglifyjs
  \gulp-symlink
  \gulp-livescript
  \gulp-watch
  \gulp-sass : sass
  \gulp-jade : jade
  \gulp-concat-util : concat
}

const doc-sass = <[ overview.md module.md zitijixing_extend.md sectional.md inline.md variable.md ]>
const doc-js = <[ overview.md han.md rendering.md normalize.md inline.md support.md find.md unicode.md ]>

src  = gulp.src
dest = gulp.dest
browserified = vinyl-transform ( file ) ->
  b = browserify file
  b.bundle!

gulp.task \han ->
  src \./node_modules/han-css/dist/**/*
    .pipe dest \./_public/latest

gulp.task \vendor <[ vendor:hljs vendor:fa ]>

gulp.task \vendor:hljs ->
  src \node_modules/highlight.js/styles/tomorrow.css
    .pipe gulp-symlink \./sass/vendor/_hljs.tomorrow.scss { +force }

gulp.task \vendor:fa ->
  src 'node_modules/font-awesome/fonts/*.{woff2,woff,otf,svg}'
    .pipe dest \./asset/font/

gulp.task \jade ->
  src \./template/**/*.jade
    .pipe jade!
    .pipe dest \./_public

gulp.task \sass ->
  src \./sass/style.scss
    .pipe sass!
    .pipe gulp-cssmin { keepSpecialComments: 0 }
    .pipe dest \./_public

gulp.task \app <[ app:main ]> ->
  gulp.start \app:clean

gulp.task \app:lsc <[ app:clean ]> ->
  src \./app/**/*.ls
    .pipe gulp-livescript!
    .pipe dest \./tmp
  src \./app/**/*.js
    .pipe dest \./tmp

gulp.task \app:main <[ app:lsc ]> ->
  src \./tmp/main.js
    #.pipe browserified
    .pipe gulp-browserify!
    .pipe gulp-uglifyjs \app.js {
      output: { +ascii_only }
    }
    .pipe dest \./_public

gulp.task \app:clean ->
  src \./tmp
    .pipe vinyl-paths del

gulp.task \www <[ han vendor jade sass app ]> ->
  src <[ \./LICENSE.md \./asset/** ]>
    .pipe dest \./_public

gulp.task \doc ->
  add-path = ( path, array ) ->
    array.map ( elem ) -> path  + \/ + elem

  src add-path \./doc/sass-api doc-sass
    .pipe concat \sass-api.md
    .pipe dest \./doc
  src add-path \./doc/js-api doc-js
    .pipe concat \js-api.md
    .pipe dest \./doc

gulp.task \dev <[ www ]> ->
  gulp.watch \./template/**/*.jade <[ jade ]>
  gulp.watch './sass/**/*.{sass,scss}' <[ sass ]>
  gulp.watch './app/**/*.{ls,js}' <[ app:main ]>

