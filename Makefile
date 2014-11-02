DOC_SASS = overview.md module.md zitijixing_extend.md sectional.md inline.md variable.md
DOC_JS   = overview.md rendering.md normalize.md inline.md support.md find.md unicode.md

a ::
	make www

run ::
	npm start | sass --watch --sourcemap=none sass:asset --style compressed

build ::
		make han
		make vendor
		make doc
		make www

www ::
	rm -rf _public
	mkdir _public _public/font _public/img _public/data
	node server/compile.js
	cp -rf latest _public
	cp -rf asset/vendor/font/* _public/font
	#cp -rf asset/font/* _public/font
	cp -rf asset/img/* _public/img
	cp -rf asset/data/* _public/data
	cp asset/style.css _public

doc ::
	cd doc/sass && cat $(DOC_SASS) > ../sass.md
	cd doc/js && cat $(DOC_JS) > ../js.md

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
