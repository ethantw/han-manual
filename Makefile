DOC_SASS = overview.md module.md zitijixing_extend.md sectional.md inline.md variable.md
DOC_JS   = overview.md han.md rendering.md normalize.md inline.md support.md find.md unicode.md

all ::
	make doc
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
	mkdir _public _public/font
	node server/compile.js
	cp -rf latest _public
	cp -rf asset/** _public
	cp asset/vendor/font/* _public/font
	cp LICENSE.md _public

doc ::
	cd doc/sass-api && cat $(DOC_SASS) > ../sass-api.md
	cd doc/js-api && cat $(DOC_JS) > ../js-api.md

han ::
	rm -rf latest
	mkdir latest
	cp -r node_modules/han-css/font latest
	ln node_modules/han-css/han.min.css latest/han.min.css
	ln node_modules/han-css/han.min.js latest/han.min.js
	ln node_modules/han-css/han.css latest/han.css
	ln node_modules/han-css/han.js latest/han.js

vendor ::
	rm -rf asset/vendor
	mkdir asset/vendor asset/vendor/font
	make hljs
	make fa

hljs ::
	rm -f sass/vendor/_hljs.tomorrow.scss
	ln node_modules/highlight.js/styles/tomorrow.css sass/vendor/_hljs.tomorrow.scss

fa ::
	cp node_modules/font-awesome/fonts/* asset/vendor/font
	cd asset/vendor/font && rm *.eot && rm *.ttf
