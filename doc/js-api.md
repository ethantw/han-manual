
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
var Han = require( 'han-css' )
Han.init()
```

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

 環境初始化 <!-- #init-cond -->
----------

### Han.fn.initCond() <!-- #initCond -->
為`condition`（預設為根元素）加入各項功能及字體支援偵測類別。

<table id='init-cond-class'>
  <style scoped>
#init-cond-class tr:last-child {
  border-bottom: 1px dotted #ddd
}
#init-cond-class th:first-child {
  width: 3.5em;
}
#init-cond-class th:nth-child(2) {
  width: 11em;
}
  </style>
  <thead>
    <th>分類
    <th>類別名稱
    <th>說明
  </thead>
  <tr>
    <th rowspan='2'>渲染
    <td><code>han-js-rendered</code>
    <td>已完成「漢字標準格式」的腳本渲染。
  </tr>
  <tr>
    <td><code>hyu-js-rendered</code>
    <td>已完成「樣式標準化」的腳本渲染。
  </tr>
  <tr>
    <th rowspan='6'>功能
    <td><code>[no-]ruby</code>
    <td>

瀏覽器是否支援HTML的基本行間注功能。
  </tr>
  <tr>
    <td><code>[no-]fontface</code>
    <td>

瀏覽器是否支援CSS3的`@font-face`功能。
  </tr>
  <tr>
    <td><code>[no-]unicoderange</code>
    <td>

瀏覽器是否支援CSS3 `@font-face`的`unicode-range`功能。
  </tr>
  <tr>
    <td><code>[no-]columnwidth</code>
    <td>

瀏覽器是否支援CSS3的容器分欄功能。
  </tr>
  <tr>
    <td><code>[no-]textemphasis</code>
    <td>

瀏覽器是否支援CSS3的文字着重號功能。
  </tr>
  <tr>
    <td><code>[no-]writingmode</code>
    <td>

瀏覽器是否支援CSS的書寫模式（文字直排等）功能。
  </tr>
  <tr>
    <th rowspan='5'>字體
    <td><code>[no-]songti</code>
    <td>作業系統是否支援宋體（Han Songti等）。
  </tr>
  <tr>
    <td><code>[no-]songti-gb</code>
    <td>作業系統是否支援簡體中文宋體（Han Songti GB）。
  </tr>
  <tr>
    <td><code>[no-]kaiti</code>
    <td>作業系統是否支援楷體（Han Kaiti等）。
  </tr>
  <tr>
    <td><code>[no-]fangsong</code>
    <td>作業系統是否支援仿宋體（Han Fangsong等）。
  </tr>
  <tr>
    <td><code>heiti</code>
    <td>假定所有作業系統皆支援黑體（Han Heiti等）。
  </tr>
</table>

 樣式標準化 <!-- #normalize -->
----------
樣式標準化方法對下列四類、共六個字級語意元素進行DOM重構，以便在樣式表中修正樣式。

<a id='list-normalize-elem'></a>
<!-- Use `id` instead of `name` for app.js to position correctly. -->

- 行間注`ruby`元素 
- 註記`u`及增訂`ins`元素（文字裝飾線）
- 訛訊`s`及刪訂`del`元素（文字裝飾線）
- 強調`em`元素（着重號）

### Han.fn.renderElem() <!-- #renderElem -->
修正Han實例範圍內[上述清單所列之元素樣式](#list-normalize-elem)，詳情請見以下各小節。

### Han.fn.renderRuby() <!-- #renderRuby -->
依Han實例範圍內各個行間注`ruby`元素之類別，套用相應的DOM重構，以利樣式表正確顯示其樣式。

相關說明，請見〈[樣式標準化·行間注元素](/manual/yangshi_biaozhunhua#hangjianzhu_yuansu)〉。

### Han.fn.renderDecoLine( [target] ) <!-- #renderDecoLine -->
修正Han實例範圍內包含文字裝飾線的相鄰元素，預設為註記`u`與增訂`ins`元素。需要配合相應的Sass @mixin。

相關說明，請見〈[樣式標準化·文字裝飾線](/manual/yangshi_biaozhunhua#wenzi_zhuangshixian)〉。

<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>target</code>
<dd>

字串，選用。作用的目標元素選擇器，預設値為`'u, ins'`。
</dl>
</div>

### Han.fn.renderEm( [target] ) <!-- #renderEm -->
修正Han實例範圍內套用着重號樣式的元素，預設為強調`em`元素。需要配合相應的Sass @mixin。

相關說明，請見〈[樣式標準化·強調與重點](/manual/yangshi_biaozhunhua#qiangdiao_yu_zhongdian)〉。

<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>target</code>
<dd>

字串，選用。作用的目標元素選擇器，預設値為`'em'`。
</dl>
</div>

 行的組成 <!-- #inline -->
---------

### Han.fn.renderJiya() <!-- #renderJiya -->
處理Han實例範圍內的「[標點擠壓](/manual/hang_de_zucheng#biaodian_jiya)」。

### Han.fn.revertJiya() <!-- #revertJiya -->
回退Han實例範圍內，標點擠壓修正前的DOM結構。

### Han.fn.renderHWS( [strict] ) <!-- #renderHWS -->
處理Han實例範圍內的「[漢字－西文混排間隙](/manual/hang_de_zucheng#hanzi-xiwen_hunpai_jianxi)」。

<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>strict</code>
<dd>

布林値，選用。是否啓用嚴格模式。預設為否。
</dl>
</div>

### Han.fn.revertHWS() <!-- #revertHWS -->
回退Han實例範圍內，漢字－西文混排間隙修正前的DOM結構。

<div class='info note important'>

**注意：**此方法並非嚴格的finder回退，可能導致非預期的結果，請謹慎使用。
</div>

### Han.fn.correctBasicBD( [all] ) <!-- #correctBasicBD -->
處理Han實例範圍內的「[標點樣式修正](/manual/wenzisheji#biaodian_yangshi_xiuzheng)」（瀏覽器不支援CSS3 @font-face的`unicode-range`屬性時啓用，如Mozilla Firefox）。

<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>all</code>
<dd>

布林値，選用。是否在支援CSS3 `unicode-range`屬性的瀏覽器下亦進行修正。預設為否。
</dl>
</div>
 
### Han.fn.revertBasicBD() <!-- #revertBasicBD -->
回退Han實例範圍內，標點樣式修正前的DOM結構。

### Han.fn.substCombLigaWithPUA() <!-- #substCombLigaWithPUA -->
處理Han實例範圍內的「[變音組字符](/manual/hang_de_zucheng#ziyuan_de_tihuan)」（瀏覽器無法正常顯示變音組字符時啓用，如IE）。

### Han.fn.revertCombLigaWithPUA() <!-- #revertCombLigaWithPUA -->
回退Han實例範圍內，修正變音組字符前的DOM結構。

### Han.fn.jinzify() <!-- #jinzify -->
為Han對象上的指定範圍加入標點禁則處理。

<div class='info note'>

一般情況下，瀏覽器可以正常套用標點禁則，毋須使用此方法。
</div>

#### 代碼示例
##### 禁則處理前
```html
<div id='container-to-jinzify'>
  <p>林·菲利認為，身為一個「航海家」，這是不可寬恕的過錯。
</div>
```

JavaScript腳本，
```javascript
Han( document.getElementById( 'container-to-jinzify' ))
.jinzify()
```

##### 禁則處理後
```html
<div id='container-to-jinzify'>
   <p><jinze class="middle">林·菲</jinze>利認<jinze class="wei">為，</jinze>身為一個<jinze class="tou">「航</jinze>海<jinze class="wei">家」，</jinze>這是不可寬恕的過<jinze class="wei">錯。</jinze></p>
</div>
```

相應的CSS樣式，

```css
jinze {
    display: inline-block;
    text-indent: 0
}
```

### Han.fn.charify( [option] ) <!-- #charify -->
依選項或預設設定為Han對象上的指定範圍進行字元包裹，實現「字級選擇器」。


<div class='info note'>

搭配[禁則處理方法`Han.fn.jinzify()`](#jinzify)，可達到更佳的效果。
</div>

<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>option</code>
<dd>

對象，選用。詳細設定見本小節「[option對象說明](#charify-option)」。
</dl>
</div>

#### option對象說明及其預設値 <!-- #charify-option -->
```javascript
{
  // 漢字包裹方式
  // individual || group || biaodian || none
  hanzi:     'individual',
  
  // 連續標點（漢字破折號或省略號）的包裹方式
  // liga || none            
  liga:      'liga',
  
  // 西文單字詞包裹方式
  // group || none           
  word:      'group',

  // 拉丁字母包裹方式
  // group || individual || none
  latin:     'group',

  // 希臘字母包裹方式
  // group || individual || none
  ellinika:  'group',

  // 西里爾字母包裹方式
  // group || individual || none
  kirillica: 'group'
}
```

#### 代碼示例
##### 字級選擇器處理前
```html
<div id='char-level-selector'>
  
</div>
```

JavaScript腳本，
```javascript
Han( document.getElementById( 'char-level-selector' ))
.jinzify() // 若搭配「禁則處理」，請在`charify()`方法前使用
.charify()
```

##### 字級選擇器處理後
```html
<div id='char-level-selector'>
  
</div>
```

 功能與字體支援偵測 <!-- #support -->
-----------------
### Han.support <!-- #Han-support -->
對象（object），其下所包含各項目之値（布林値）表示該項目是否為使用者瀏覽器所支援。

- `Han.support.ruby`（基本行間注，HTML）
- `Han.support.fontface`（CSS3）
- `Han.support.unicoderange`（CSS3 @font-face）
- `Han.support.columnwidth`（CSS3）
- `Han.support.textemphasis`（CSS3）
- `Han.support.writingmode`（CSS3）

### Han.isCombLigaNormal <!-- #Han-isCombLigaNormal -->
布林値，瀏覽器是否正常支援web font「組合合字」（combining ligature）功能，需在字體檔案`han.woff`正常載入的情況下，方回傳正確的偵測結果。

### Han.isNodeNormalizeNormal <!-- #Han-isNodeNormalizeNormal -->
布林値，IE11的`Node.prototype.normalize()`方法可能導致錯誤，調用此變量可瞭解該方法在使用者瀏覽器上是否正常運行。

### Han.detectFont( treat[, control, text] ) <!-- #Han-detectFont -->
函數方法。用於偵測字體是否為使用者作業系統所支援，其回傳値為一布林値。

<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>treat</code>
<dd>

字串。實驗組字體名稱（列表）。

<dt><code>control</code>
<dd>

字串，選用。對照組字體名稱（列表），預設値為無襯線`'sans-serif'`基型。

<dt><code>text</code>
<dd>

字串，選用。比對二組字體的實驗文字，預設値為包含漢字及拉丁字母的`'辭Q'`。
</dl>
</div>

<!--
<script>
window.addEventListener( 'DOMContentLoaded', function() {
  for ( prop in Han ) {
    if ( Han.hasOwnProperty( prop )) {
      console.log( prop, Han[prop] )
    }
  }
})
</script>-->

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

 萬國碼區段及正則表達式 <!-- #unicode -->
--------------------
Han包含二類萬國碼區段表達式常量——以字串集合而成的`Han.UNICODE`，及以正則表達式集合而成的`Han.TYPESET`。


### 漢字標點 <!-- #unicode-cjk-biaodian -->
#### `Han.UNICODE.biaodian`
#### `Han.TYPESET.char.biaodian`

### 漢字區段 <!-- #unicode-cjk -->
#### `Han.UNICODE.hanzi`
`Han.UNICODE.cjk`

#### `Han.TYPESET.char.hanzi`
`Han.TYPESET.char.cjk`

### 西文標點 <!-- #unicode-western-punct -->
#### `Han.UNICODE.punct`
#### `Han.TYPESET.char.punct`

### 拉丁字母區段 <!-- #unicode-latin -->
#### `Han.UNICODE.latin`
#### `Han.TYPESET.char.latin`

### 希臘字母區段 <!-- #unicode-greek -->
#### `Han.UNICODE.ellinika`
`Han.UNICODE.greek`

#### `Han.TYPESET.char.ellinika`
`Han.TYPESET.char.greek`

### 西里爾字母區段  <!-- #unicode-cyrillic -->
#### `Han.UNICODE.kirillica`
`Han.UNICODE.cyrillic`

#### `Han.TYPESET.char.kirillica`
`Han.TYPESET.char.cyrillic`

### 假名區段  <!-- #unicode-kana -->
#### `Han.UNICODE.kana`
#### `Han.TYPESET.char.kana`

### 諺文區段  <!-- #unicode-eonmun -->
#### `Han.UNICODE.eonmun`
`Han.UNICODE.hangul`

#### `Han.TYPESET.char.eonmun`
`Han.TYPESET.char.hangul`

### 注音及方言音符號區段  <!-- #unicode-zhuyin -->
#### `Han.UNICODE.zhuyin`
#### `Han.TYPESET.zhuyin`

### 標點禁則表達式  <!-- #regex-jinze -->
#### `Han.TYPESET.jinze`

### 漢字－西文混排間隙表達式  <!-- #regex-hws -->
#### `Han.TYPESET.hws`
