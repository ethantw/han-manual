
<section class='self-contained'>

 字元査替器 <!-- #find -->
-----------
字元査替器是基於[findAndReplaceDOMText庫][fardt]的字元査替方法集合，用以替換或使用元素來包裹DOM結構中的文字。

[fardt]: https://github.com/padolsey/findAndReplaceDOMText

與原生`String.prototype.replace()`等方法不同，字元査替器*支援跨元素邊界的字元査找。*

### Han.fn.replace()
將Han指定範圍中符合`pattern`表達式的文字替換為`newSubStr`。

```javascript
Han( context ).replace( pattern, newSubStr )
```
<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>pattern</code></dt>  
<dd>正則表達式或字串。査找指定範圍內相應的文字。

<dt><code>newSubStr</code></dt>  
<dd>字串，目標文字的替換內容。
</dl>
</div>

### Han.fn.wrap()
以`newSubElem`返回的元素包裹Han指定範圍內、符合`pattern`表達式的文字。

```javascript
Han( context ).wrap( pattern, newSubElem )
```
<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>pattern</code></dt>
<dd>正則表達式或字串。

<dt><code>newSubElem</code></dt>
<dd>一個DOM對象或元素名稱字串。
</dl>
</div>

### Han.fn.revert()
回退至finder査替前的DOM狀態，回退層級以參數`level`決定，預設回退一級。

```javascript
Han( context )
// .replace()
// .wrap()
// …
.revert( [level] )
```

<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>level</code>
<dd>

數字、可轉換為數字的字串或`'all'`，使用`'all'`將回退該Han對象上的所有finder。
</dl>
</div>

#### 範例

```javascript
var hinst = Han( document.body )

hinst
.replace( /詞[匯會惠]/g, '辭彙' )
.wrap( /辭彙/g, 'em' )
// …

window.addEventListener( 'DOMContentLoaded', function() {
  setTimeout(function() {
    hinst.revert( 'all' )
  }, 5000 )
})
```
網頁中的「詞匯」「詞會」「詞惠」等字樣將替換成「辭彙」，並為強調`em`元素所包裹。網頁在DOM載入完成事件觸發後5秒，受替換的文字將自動回退至先前的「詞匯」「詞會」或「詞惠」等，包裹的強調元素亦會移除。

</section>
