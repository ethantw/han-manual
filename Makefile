run ::
	node ./s.js 9999 | jade -Pw *.jade | sass --watch sass:. --style compressed

han ::
	rm -r -f src/lib/han
	mkdir src/lib/han src/lib/han/font
	cp ../han/han.min.css src/lib/han/
	cp ../han/han.min.js src/lib/han/
	cp ../han/font/* src/lib/han/font

lib.js ::
	cd src/lib && cat highlight.js/highlight.min.js > ../lib.js

main.js ::
	grunt uglify

app.js ::
	make lib.js
	make main.js
	cat src/lib.js src/main.js > app.js
