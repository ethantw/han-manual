
<section class='self-contained'>

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
#init-cond-class tr:first-of-type th {
  padding: .5em 0;
}
  </style>
  <thead>
    <th>分類
    <th>類別名稱
    <th>說明
  </thead>
  <tr>
    <th>渲染
    <td><code>han-js-rendered</code>
    <td>已完成「漢字標準格式」的腳本渲染。
  </tr>
  <tr>
    <th rowspan='8'>功能
    <td><code>[no-]ruby</code>
    <td>

瀏覽器是否支援HTML的基本行間注功能。
  </tr>
  <tr>
    <td><code>[no-]ruby-display</code>
    <td>

瀏覽器是否支援CSS行間注`ruby-display`屬性。
  </tr>
  <tr>
    <td><code>[no-]ruby-interchar</code>
    <td>

瀏覽器是否支援CSS行間注`ruby-position`屬性的`inter-character`値。
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
    <th rowspan='6'>字體
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
  <tr>
    <td><code>[no-]han-space</code>
    <td>瀏覽器是否正確加載空格字體（用於行尾點號懸掛）。
  </tr>
</table>
</section>

<section class='self-contained'>

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
修正Han實例範圍內包含文字裝飾線的相鄰元素，預設為註記`u`與增訂`ins`元素。<!--需要配合相應的Sass @mixin。-->

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
</section>
