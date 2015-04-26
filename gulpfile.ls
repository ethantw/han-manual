
require! {
  fs
  jsdom
  browserify
  \vinyl-transform
  \vinyl-paths
  del
  gulp
  \gulp-cssmin
  \gulp-uglifyjs
  \gulp-symlink
  \gulp-livescript
  \gulp-remarkable
  \gulp-watch
  \gulp-sass : sass
  \gulp-jade : jade
  \gulp-concat-util : concat
}

const doc-sass = <[ overview.md module.md zitijixing_extend.md sectional.md inline.md variable.md ]>
const doc-js = <[ overview.md han.md rendering.md normalize.md inline.md support.md find.md unicode.md ]>

config =
  han-version: \3.2.0
  production: yes
  heroku-path: \//han-css.herokuapp.com/

config.asset-path = config.heroku-path

src  = gulp.src
dest = gulp.dest

make-array = ( obj ) -> Array.prototype.slice.call obj
jsdom.defaultDocumentFeatures = ProcessExternalResources: no
jsdom = jsdom.jsdom


gulp.task \han ->
  src \./node_modules/han-css/dist/**/*
    .pipe dest \./_public/latest

gulp.task \vendor <[ han vendor:hljs vendor:fa ]>

gulp.task \vendor:hljs ->
  src \node_modules/highlight.js/styles/tomorrow.css
    .pipe concat \_hljs.tomorrow.scss
    .pipe dest \./sass/vendor
    #.pipe gulp-symlink \./sass/vendor/_hljs.tomorrow.scss { +force }

gulp.task \vendor:fa ->
  src 'node_modules/font-awesome/fonts/*.{woff2,woff,otf,svg}'
    .pipe dest \./asset/font

gulp.task \jade ->
  src './template/*.jade'
    .pipe jade!
    .pipe dest \./template/html

gulp.task \static <[ jade ]> ->
  <[ index itff ]>.for-each ( page ) !->
    src "./template/html/#{page}.html"
      .pipe concat "#{page}.html", {
        process: ( src ) ->
          src
            .replace /\{\{asset\-path\}\}/gi, config.asset-path
            .replace /\{\{han\-version\}\}/gi, config.han-version
      }
      .pipe dest \./_public

gulp.task \md2html <[ doc jade ]> ->
  try
    manual-html = fs.readFileSync \./template/html/manual.html, encoding: \utf-8
    manual-html .= split '{{parsed-article-html}}'
    all-doc = fs.readdirSync \./doc/ .filter ( file ) -> /\.md$/i.test file
  catch e
    manaual-html = new Array 2
    all-doc = []
    return

  all-doc.for-each ( file ) !->
    page-id = file - /\.md$/
    dot-html = page-id + \.html

    src \./doc/ + file
      .pipe gulp-remarkable preset: \commonmark
      .pipe concat.header manual-html.0
      .pipe concat.footer manual-html.1
      .pipe concat dot-html, {
        process: ( src ) ->
            doc = jsdom src
            title = doc.query-selector 'article h1' .text-content + ' — '

            try
              make-array( doc.query-selector-all 'h2, h3, h4, h5, h6' )
              .for-each ( elem, i ) !->
                anchor = elem.last-child
                anchor-id = anchor.node-value

                elem.set-attribute \id, "sec-#{i}"

                if anchor and anchor.node-type == 8 and /\s?\#[\w\_\-]+\s?/.test anchor-id
                  elem.set-attribute \id, anchor-id.replace( /\s?\#([\w\_\-]+)\s?/i, \$1 )
                  elem.remove-child anchor
              make-array( doc.query-selector-all 'div.info, .example, pre, table' )
              .for-each ( elem, i ) !->
                unless elem.get-attribute \id
                  elem.set-attribute \id, "info-#{i}"
              src = doc.document-element.outerHTML

            src
              .replace /\{\{asset\-path\}\}/gi, config.asset-path
              .replace /\{\{han\-version\}\}/gi, config.han-version
              .replace /\{\{manual\-page\-id\}\}/gi, page-id
              .replace /\{\{manual\-page\-title\}\}/gi, title
        }
        .pipe dest \_public/manual

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
  browserified = vinyl-transform ( file ) ->
    b = browserify file
    b.bundle!
  src \./tmp/main.js
    .pipe browserified
    .pipe gulp-uglifyjs \app.js {
      output: { +ascii_only }
    }
    .pipe dest \./_public

gulp.task \app:clean ->
  src \./tmp .pipe vinyl-paths del

gulp.task \www <[ vendor md2html static sass app ]> ->
  src <[ \./LICENSE.md \./asset/** ]>
    .pipe dest \./_public

gulp.task \clean ->
  src \./_public .pipe vinyl-paths del

gulp.task \doc ->
  add-path = ( path, array ) -> array.map ( elem ) -> path + \/ + elem
  src add-path \./doc/sass-api doc-sass
    .pipe concat \sass-api.md
    .pipe dest \./doc
  src add-path \./doc/js-api doc-js
    .pipe concat \js-api.md
    .pipe dest \./doc

gulp.task \set-dev ->
  config.production = no
  config.asset-path = \/

gulp.task \dev <[ set-dev default ]> ->
  gulp.watch './doc/{sass,js}-api/*.md' <[ doc ]>
  gulp.watch \./doc/**/*.md <[ md2html ]>
  gulp.watch \./template/**/*.jade <[ static ]>
  gulp.watch './sass/**/*.{sass,scss}' <[ sass ]>
  gulp.watch './app/**/*.{ls,js}' <[ app:main ]>

gulp.task \default <[ clean ]> ->
  gulp.start \www
