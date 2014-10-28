DOC_SASS = overview.md module.md zitijixing_extend.md sectional.md inline.md variable.md
DOC_JS   = overview.md rendering.md normalize.md inline.md support.md find.md unicode.md

doc-and-appjs ::
	make doc
	make app.js

run ::
	npm start | sass --watch --sourcemap=none sass:asset --style compressed

build ::
	make han
	make vendor
	make doc
	make www
	make jade

www ::
	cp -r latest _public
	cp -r asset/font _public
	cp -r asset/img _public
	cp -r asset/vendor/font/* _public/font
	cp asset/app.js _public
	cp asset/style.css _public

jade ::
	./node_modules/.bin/jade template --out _public

doc ::
	cd doc/sass && cat $(DOC_SASS) > ../sass.md
	cd doc/js && cat $(DOC_JS) > ../js.md

app.js ::
	browserify script/main.js -o asset/app.js
	uglifyjs asset/app.js -mo asset/app.js

han ::
	rm -rf latest
	mkdir latest latest/font
	cp node_modules/han-css/han.min.css latest
	cp node_modules/han-css/han.min.js latest
	cp node_modules/han-css/han.css latest
	cp node_modules/han-css/han.js latest
	cp node_modules/han-css/font/* latest/font

han-dev ::
	rm -rf latest
	mkdir latest latest/font
	cp ../han/han.min.css latest
	cp ../han/han.min.js latest
	cp ../han/font/* latest/font

vendor ::
	rm -rf asset/vendor
	mkdir asset/vendor asset/vendor/css asset/vendor/font
	make hljs
	make fa

hljs ::
	cp node_modules/highlight.js/styles/tomorrow.css asset/vendor/css
	cd asset/vendor/css && cat * > hljs.tomorrow.scss

fa ::
	cp node_modules/font-awesome/fonts/* asset/vendor/font
	cd asset/vendor/font && rm *.eot && rm *.ttf
