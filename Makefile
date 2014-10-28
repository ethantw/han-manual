DOC_SASS = overview.md module.md zitijixing_extend.md sectional.md inline.md variable.md
DOC_JS   = overview.md rendering.md normalize.md inline.md support.md find.md unicode.md

doc-and-appjs ::
	make doc
	make app.js

run ::
	npm start | jade -Pw *.jade | sass --watch --sourcemap=none sass:. --style compressed

build ::
	# This is supposed to be `post-npm-install`
	#npm install
	make han
	make hljs
	make fa
	#sass sass/style.sass:style.css --style compressed
	#make app.js
	make doc

doc ::
	cd doc/sass && cat $(DOC_SASS) > ../sass.md
	cd doc/js && cat $(DOC_JS) > ../js.md

app.js ::
	browserify src/manual.js -o app.js
	uglifyjs app.js -m -o app.js

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

hljs ::
	cd node_modules/highlight.js/styles && mkdir temp && cp tomorrow.css temp && mv temp/tomorrow.css tomorrow.scss && rm -r -f temp
	cp src/hljs.js node_modules/highlight.js/lib
	cd node_modules/highlight.js/lib && mv hljs.js index.js

fa ::
	rm -r -f src/lib/fa
	mkdir src/lib/fa
	cp node_modules/font-awesome/fonts/* src/lib/fa
	rm src/lib/fa/*.eot && rm src/lib/fa/*.ttf
