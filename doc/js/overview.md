
 <span lang='en'>JavaScript API</span>
========================================


 概述 <!-- #gaishu -->
------
「漢字標準格式」的腳本文件`han.js`提供多種接口以方便功能的調用，其所有開放的變量、常量、函數及方法皆收錄於`Han`構造函數中，亦支援異步模塊載入器（AMD或CommonJS）。

Han的使用方式類似於jQuery，支援快捷的鏈式書寫，

```javascript
Han( context, condition )
.method()
.method2()
…
```
<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>context</code></dt>
<dd>

選用。單一的指定渲染範圍DOM元件，預設為`document.body`。
</dd>
<dt><code>condition</code></dt>
<dd>

選用。附加信息——如功能、字體支援偵測類別等——的加載環境，預設為根元素`document.documentElement`。
</dd>
</dl>
</div>

### AMD <!-- #amd -->
```javascript
require( [ './han.min' ], function( Han ) {
  Han.init()
})
```

### CommonJS（NPM） <!-- #commonjs -->
```javascript
var Han = require( ‘han-css’ )
Han.init()
```
