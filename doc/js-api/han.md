
 Han構造函數 <!-- #han -->
------------
構造函數`Han`的使用方式類似jQuery，支援快捷的鏈式書寫，實例的生成亦*毋須*使用`new`運算符。

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
