
require! {
  \./package.json : pkg
  fs
  jsdom
  #\cheerio : $
  browserify
  \vinyl-transform
  \vinyl-source-stream : source
  \vinyl-paths
  del
  gulp
  \gulp-cssmin
  \gulp-uglifyjs
  \gulp-symlink
  \gulp-livescript
  \gulp-remarkable
  \gulp-watch
  #\gulp-sass : sass
  \gulp-ruby-sass
  \gulp-jade : jade
  \gulp-concat-util : concat
}

const doc-sass = <[ overview.md module.md zitijixing_extend.md sectional.md inline.md variable.md ]>
const doc-js = <[ overview.md han.md rendering.md normalize.md inline.md support.md find.md selector.md unicode.md ]>

config =
  han-version: pkg.dependencies['han-css'].replace( /^[\^\~]/, '' )
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

gulp.task \md2html <[ jade doc ]> ->
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
  gulp-ruby-sass \./sass/style.scss
    .pipe gulp-cssmin { keepSpecialComments: 0 }
    .pipe dest \./_public

gulp.task \sass:deploy ->
  src \./_public/style.css
    .pipe dest \./asset

gulp.task \app <[ app:main ]> ->
  gulp.start \app:clean

gulp.task \app:lsc <[ app:clean ]> ->
  src \./app/**/*.ls
    .pipe gulp-livescript!
    .pipe dest \./tmp
  src \./app/**/*.js
    .pipe dest \./tmp

gulp.task \app:bundle -> #<[ app:lsc ]> ->
  browserify {
    entries: \./app/main.js
    debug: no
  }
    .bundle!
    .pipe source \app.js
    .pipe dest \./_public

gulp.task \app:main <[ app:bundle ]> ->
  src \./_public/app.js
    .pipe gulp-uglifyjs {
      output: { +ascii_only }
    }
    .pipe dest \./_public

/*
  browserified = vinyl-transform ( file ) ->
    b = browserify file
    b.bundle!
  src \./tmp/main.js
    .pipe browserified
    .pipe gulp-uglifyjs \app.js {
      output: { +ascii_only }
    }
    .pipe dest \./_public
*/

gulp.task \app:clean ->
  src \./tmp .pipe vinyl-paths del

gulp.task \asset ->
  src <[ \./LICENSE.md \./asset/** \./asset/style.css ]>
    .pipe dest \./_public

gulp.task \www <[ vendor md2html static app asset ]>

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
  gulp.watch \./doc/*.md <[ md2html ]>
  gulp.watch \./template/**/*.jade <[ static ]>
  gulp.watch './sass/**/*.{sass,scss}' <[ sass ]>
  gulp.watch './app/**/*.{ls,js}' <[ app:main ]>

gulp.task \default <[ clean ]> ->
  gulp.start \www

