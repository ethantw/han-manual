
 <span lang='en'>JavaScript API</span>
========================================
 概述 <!-- #gaishu -->
------
「漢字標準格式」的腳本文件`han.js`提供多種接口以方便功能的調用，其所有開放的變量、常量、函數及方法皆收錄於`Han`構造函數中，亦支援異步模塊載入器（AMD或CommonJS）。

### AMD <!-- #amd -->
```javascript
require( [ './han.min' ], function( Han ) {
  Han.init()
})
```

### CommonJS（NPM） <!-- #commonjs -->
```javascript
var Han = require( 'han-css' )
Han.init()
```
