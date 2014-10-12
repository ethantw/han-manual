run ::
	node ./s.js 9999 | jade -Pw *.jade | sass --watch sass:. --style compressed

build :: 
	bower install
	sass sass/style.sass:style.css --style compressed
	make app.js
	make fa

han ::
	rm -r -f src/lib/han
	mkdir src/lib/han src/lib/han/font
	cp ../han/han.min.css src/lib/han/
	cp ../han/han.min.js src/lib/han/
	cp ../han/font/* src/lib/han/font

lib.js ::
	cd src/lib && cat yijun.js highlight.js/highlight.min.js > ../lib.js

main.js ::
	cd src/app && cat manual.js > ../main.js

app.js ::
	make lib.js
	make main.js
	cat src/lib.js src/main.js > app.js
	uglifyjs app.js -o app.js

fa ::
	rm -r -f src/font
	mkdir src/font
	cp bower_components/font-awesome/fonts/* src/font
