run ::
	node ./s.js 9999 | jade -Pw *.jade | sass --watch sass:. --style compressed

build :: 
	bower install
	make fa
	make app.js
	sass sass/style.sass:style.css --style compressed

lib.js ::
	cd src/lib && cat yijun.js hljs.js > ../lib.js

main.js ::
	cd src/app && cat manual.js > ../main.js

app.js ::
	make lib.js
	make main.js
	cat src/lib.js src/main.js > app.js
	uglifyjs app.js -m -o app.js

han ::
	rm -r -f src/lib/han
	mkdir src/lib/han src/lib/han/font
	cp ../han/han.min.css src/lib/han/
	cp ../han/han.min.js src/lib/han/
	cp ../han/font/* src/lib/han/font

fa ::
	rm -r -f src/font
	mkdir src/font
	cp bower_components/font-awesome/fonts/* src/font
