APIs
====

Han.Farr()
----------
`Han.Farr()`是基於`findAndReplaceDOMText`函式庫的構造函數，用以替換或包裹DOM結構中的文字。將回傳一個`Farr`實例，方便鏈式書寫。

### 語法
```javascript
Han.Farr( selector, [filter, method, pattern, sub] )
```

<div class='info desc'>

##### 變數類型

<dl>
<dt>`selector`
	<dd>DOM選擇器（見[selector](#)）</dd>
<dt>`filter`</dt>

<dd>

可選，類型可為：

1. 包含需要過濾的元素名稱的字串，以空格相隔；或，
2. 自訂過濾規則的函數。每次替換或包裹文字時呼叫。包含一個變數`currentElem`，為當前作用文字節點的父元素節點。

</dd>

<dt>`method`
	<dd>可選，表示將採用的Far方法，値為`replace`（替換）或`wrap`（包裹）的字串。
<dt>`pattern`
	<dd>可選，將被替換或包裹的文字表達式。
<dt>`sub`
	<dd>可選，回傳一個被替換的文字或包裹元素的字串或函數。
</dl>
</div>

## Han.fn.replace()方法
`replace()`是基於`Han.Far`的Han方法，它會將選擇器上符合`pattern`表達式的文字替換為`newSubStr`返回値。

```javascript
Han( selector ).replace( pattern, newSubStr )
```

第一次呼叫Far方法時，會以當前選擇器新建`Han.Far`對象於`Han`實例中；爾後使用任何Far方法時，將直接査找該對象。

<div class='info desc'>

##### 變數類型

<dl>
	<dt>`pattern`  
		<dd>正則表達式或字串（不建議）。
	<dt>`newSubStr`  
		<dd>一個字串，或返回一個字串的函數。
</dl>
</div>

## Han.fn.wrap()方法
`wrap()`是基於`findAndReplaceDOMText`函式庫的Han方法，它會以`newSubElem`返回的元素包裹符合`pattern`表達式的文字。

```javascript
Han( selector ).wrap( pattern, newSubElem )
```

第一次呼叫Far方法時，會以當前選擇器新建`Han.Far`對象於`Han`實例中；爾後使用任何Far方法時，將直接査找該對象。

<div class='info desc'>

##### 變數類型

<dl>
	<dt>`pattern`  
		<dd>正則表達式或字串（不建議）。
  <dt>`newSubElem`  
		<dd>一個DOM對象或任一元素名稱的字串，或返回上述二者的函數。
</dl>
</div>

## Han.fn.unfarr()方法
`unfarr`是基於`Han.Farr`函數的Han方法，它以變數`level`來決定所回退`Farr.finder`的層級，`level`為可選變數，未設定時回退一級。

```javascript
Han( selector )
// .replace()
// .wrap()
// …
.unfarr( [level] )
```

範例，

```javascript
var $body = Han( document.body )

$body.replace( /[紅綠藍]/g, '三原色' )

// some script actions
// …

$body.unfarr( 'all' )
```

<div class='info desc'>

##### 變數類型

<dl>
	<dt>`level`
		<dd>數字或可轉換為數字的字串，使用`'all'`將回退該Han對象上的所有`Farr.finder`。
</dl>
</div>


## Han.fn.jinzify() 方法
`jinzify()`是基於Han.Farr的Han對象方法，可對Han對象上的DOM元件加入標點禁則處理。

一般情況下，瀏覽器可以正常套用標點禁則，毋須使用此方法。


## Han.fn.charify() 方法
`jinzify()`是基於Han.Farr的Han對象方法，可依選項或預設的設定為Han對象上的DOM元件進行字元包裹，以實現字級選擇器。
