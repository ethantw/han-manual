
<section class='self-contained'>

 行的組成 <!-- #inline -->
---------

### 着重號 <!-- #inline-emphasis-mark -->
強調`em`元素預設使用着重號樣式，「漢字標準格式」提供接口方便其他選擇器使用相同的CSS3 `text-emphasis`屬性的polyfill。包含Sass及JavaScript二部分，後者可依需求選用。

#### Sass 
```
@include han-text-emphasis( 
  $posi: under,
  $mark: circle,
  $shape: filled,
  $color: inherit,
  $skip: true,
  $extend: true
);
```
<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>$posi</code></dt>
<dd>
	
着重號的位置，可為字下`under`或字上`over`。
</dd>
<dt><code>$mark</code></dt>
<dd>

着重號符號，選項有圈`circle`、點`dot`、雙圈`double-circle`、三角形`triangle`、芝麻點`sesame`或其他字符`<string>`。
</dd>
<dt><code>$shape</code></dt>
<dd>

着重號形狀，填滿`filled`、空心`open、無`none`。
</dd>
<dt><code>$color</code></dt>
<dd>

着重號顏色。
</dd>
<dt><code>$skip</code></dt>
<dd>

規避標點符號與否（需配合JavaScript腳本）。
</dd>
<dt><code>$extend</code></dt>
<dd>

使用選擇器 @extend與否，可減縮生成的CSS代碼大小。
</dd>
</dl>
</div>

#### JavaScript（選用）
```javascript
Han( context ).renderEm( selector )
```
<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>context</code></dt>
<dd>
	
套用着重號選擇器的範圍，預設為文件內容`body`元素。
</dd>
<dt><code>selector</code></dt>
<dd>

套用着重號的目標選擇器，支援CSS選擇器語法。
</dd>
</dl>
</div>

示例請見[測試範例頁·強調元素（着重號）][em]。

[em]: http://ethantw.github.io/Han/latest/em.html

### 啓用web font合字功能 <!-- #inline-ligature -->
在需要啓用web font合字（ligature）功能的選擇器上引用如下 @extend。
```
@extend %han-ligature;
```

### 行尾點號懸掛 <!-- #inline-hanging_biaodian -->
見[Sass變數彙整下的相應小節](/manual/sass-api#sec-26)。

</section>
