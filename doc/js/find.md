
 字元査替器 <!-- #find -->
-----------
字元査替器是基於[findAndReplaceDOMText庫][fardt]的字元査替方法集合，用以替換或使用元素來包裹DOM結構中的文字。

[fardt]: https://github.com/padolsey/findAndReplaceDOMText

與原生`String.prototype.replace()`等方法不同，字元査替器*支援跨元素邊界的字元査找。*

### Han.fn.replace()
`Han.fn.replace()`方法會將Han指定範圍中符合`pattern`表達式的文字替換為`newSubStr`。

```javascript
Han( context ).replace( pattern, newSubStr )
```

#### 參數說明
<dl class='parameter'>
<dt><code>pattern</code></dt>  
<dd>正則表達式或字串。査找指定範圍內相應的文字。

<dt><code>newSubStr</code></dt>  
<dd>字串，目標文字的替換內容。
</dl>

### Han.fn.wrap()
`Han.fn.wrap()`方法會以`newSubElem`返回的元素包裹Han指定範圍內、符合`pattern`表達式的文字。

```javascript
Han( context ).wrap( pattern, newSubElem )
```

#### 參數說明
<dl class='parameter'>
<dt><code>pattern</code></dt>
<dd>正則表達式或字串。

<dt><code>newSubElem</code></dt>
<dd>一個DOM對象或元素名稱字串。
</dl>

### Han.fn.revert()
`Han.fn.revert()`方法以參數`level`來決定所回退的finder層級，`level`為可選參數，預設回退一級。

```javascript
Han( context )
// .replace()
// .wrap()
// …
.revert( [level] )
```

#### 參數說明
<dl class='parameter'>
<dt><code>level</code>
<dd>

數字、可轉換為數字的字串或`'all'`，使用`'all'`將回退該Han對象上的所有finder。
</dl>

範例，

```javascript
var hinst = Han( document.body )

hinst
.replace( /[紅綠藍]/g, '三原色' )
.wrap( /三原色/g, 'em' )
// …

hinst.revert( 'all' )
```
網頁中，原本的「紅」「綠」「藍」等字仍顯示為「紅」「綠」或「藍」，而非「三原色」，亦未受強調`em`元素包裹。


### Han.fn.jinzify() 
`Han.fn.jinzify()`方法可對Han對象上的指定範圍加入標點禁則處理。

<div class='info note'>

一般情況下，瀏覽器可以正常套用標點禁則，毋須使用此方法。
</div>

### Han.fn.charify()
`Han.fn.charify()`方法可依選項或預設設定為Han對象上的指定範圍進行字元包裹，實現「字級選擇器」。

