
<section class='self-contained'>

 渲染機制 <!-- #rendering -->
---------
Han提供下列多種渲染方法，可依需求選用。

### Han.fn.render() <!-- #render -->
在未更動「常規渲染途徑」（`Han.fn.routine`）的情況下，渲染途徑的簡寫方法`render()`將依下列清單之順序，依序執行各渲染方法。

- 初始化`initCond()`
- 字級語意元素樣式標準化`renderElem()`
  * 渲染行間注元素`renderRuby()`
  * 渲染文字裝飾線元素`renderDecoLine()`
  * 渲染強調元素`renderEm()`
- 渲染行尾點號懸掛`renderHanging()`
- 渲染標點擠壓`renderJiya()`
- 渲染漢字西文混排間隙`renderHWS()`
- 修正基本標點符號`correctBasicBD()`<small>（瀏覽器不支援時啓用）</small>
- 以PUA字元取代合字符`substCombLigaWithPUA()`<small>（瀏覽器不支援時啓用）</small>

```javascript
Han( document.querySelector( '.entry' )).render()
```

上述簡寫同等於，

```javascript
Han( document.querySelector( '.entry' ))
.initCond()
.renderElem()
.renderHanging()
.renderJiya()
.renderHWS()
.correctBasicBD()
.substCombLigaWithPUA()
```

### 全頁渲染簡寫Han.init() <!-- #rendering-shortcut -->

全頁渲染簡寫方法`Han.init()`，網頁完成DOM載入後可使用乙次，為網頁載入Han渲染機制，並回傳該實例。

```javascript
var hinst = Han.init()
```

等同於，

```javascript
var hinst = Han( document.body ).render()
```

### 使用類別啓用全頁渲染 <!-- #rendering-shortcut-w-class -->
在根元素套用類別`.han-init`，或在指定單一元素上套用類別`.han-init-context`即可在DOM完成載入後渲染頁面。

```html
<html lang="zh-Hant" class="han-init">
```
或

```html
<article class="han-init-context">
  …
</article>
```

### Han.init作為實例 <!-- #Han-init-as-an-instance -->
原作為方法的命名空間`Han.init`在完成上述二種DOM ready渲染後，即替換為該Han實例，以利後續處理及調用。

```javascript
Han.init()

// …

// After the DOM-ready rendering
var hinst = Han.init

hinst.replace( /IE\s?[6-8]/gi, 'IE11' )
```

上述代碼大致同等於，

```javascript
Han.init().replace( /IE\s?[6-8]/gi, 'IE11' )
```

<!--
### 設定渲染途徑

方法`Han.fn.setRoutine( routine )`可為實例定義渲染途徑。

#### 變量說明
<dl class='parameter'>
<dt><code>routine</code></dt>
<dd>

數列，渲染方法名稱組成的渲染順序。
</dd>
</dl>
-->

</section>
