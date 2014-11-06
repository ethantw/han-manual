
 <span lang='en'>Sass API</span>
==================================
 概述 <!-- #gaishu -->
-----
「漢字標準格式」提供Sass選擇器擴展 @extend、代碼混用 @mixin、函數 @function及變數等接口，用以簡化樣式表的複雜度並避免重覆的樣式宣告。

 模組 <!-- #module -->
-----
一般情況下，直接在Sass樣式表中匯入`_han.sass`即可使用「漢字標準格式」；然而，亦可依據網站需求，載入需要的Sass模組。

```scss
// 「漢字標準格式」必要檔案
@import 'han/var';
@import 'han/api';

// Normalize.css
@import 'han/hyu/normalize';

// 樣式標準化模組
@import 'han/locale';

// 文字設計模組
@import 'han/typography';

// 高級排版功能模組（章節的編排、行的組成）
@import 'han/typeset';
```

 字體基型 @extend <!-- #ziti_jixing_extend -->
---------
字體基型 @extend以精良的[字體回退機制](/manual/wenzisheji#ziti_huitui_jizhi)處理字體的套用，「[文字設計模組](/manual/wenzisheji)」中，多數元素及情境的字體樣式由字體基型 @extend提供，相關調用的字體亦請見該頁各小節的說明。

據CSS3標準，字體基型（<span lang='en'>typeface generics</span>）共分為「無襯線」「襯線」「手寫」「等寬」「裝飾」五種。目前「漢字標準格式」提供前述四種字體基型及相應意大利體的選擇器擴展。為選擇器加入所需的字體基型 @extend，選擇器便可套用相應的字體樣式，避免樣式的重覆宣告。

<div id='generics' class='info note'>

**註：**文字設計中，「generics」一詞應作「通用字體」；本使用手冊為明顯區分「字體」與「通用字體」，遂將後者統一稱作「基型」或「字體基型」，以為差異。
</div>

一般字體基型 @extend的調用形式為，

```scss
@extend %han-[基型]-[語言文字變體];
```

搭配西文意大利體的字體基型 @extend調用形式為，

```scss
@extend %han-[基型]-italic-[語言文字變體];
```

<div class='info note'>

**註：**西文等寬基型 @extend不提供意大利體。
</div>

或參見下表，

<table id='generics-extend' class='wider'>
  <style scoped>
#generics-extend {
  font-size: .8em;
}
#generics-extend thead th:first-child {
  width: 6em;
}
#generics-extend tbody th {
  height: 3em;
}
  </style>
  <thead>
    <th>基型
    <th>繁體中文
    <th>簡體中文
    <th>日文
    <th>西文
  </thead>
  <tr>
    <th>黑體
    <td><code>%han-sans-hant</code>
    <td><code>%han-sans-hans</code>
    <td><code>%han-sans-ja</code>
    <td><code>%han-sans</code>
  <tr>
    <th>黑體、<br>意大利體
    <td><code>%han-sans-italic-hant</code>
    <td><code>%han-sans-italic-hans</code>
    <td><code>%han-sans-italic-ja</code>
    <td><code>%han-sans-italic</code>
  <tr>
    <th>宋體
    <td><code>%han-serif-hant</code>
    <td><code>%han-serif-hans</code>
    <td><code>%han-serif-ja</code>
    <td><code>%han-serif</code>
  <tr>
    <th>宋體、<br>意大利體
    <td><code>%han-serif-italic-hant</code>
    <td><code>%han-serif-italic-hans</code>
    <td><code>%han-serif-italic-ja</code>
    <td><code>%han-serif-italic</code>
  <tr>
    <th>楷體
    <td><code>%han-cursive-hant</code>
    <td><code>%han-cursive-hans</code>
    <td><code>%han-cursive-ja</code>
    <td><code>%han-cursive</code>
  <tr>
    <th>楷體、<br>意大利體
    <td><code>%han-cursive-italic-hant</code>
    <td><code>%han-cursive-italic-hans</code>
    <td><code>%han-cursive-italic-ja</code>
    <td><code>%han-cursive-italic</code>
  <tr>
    <th>西文等寬／<br>黑體
    <td><code>%han-mono-hant</code>
    <td><code>%han-mono-hans</code>
    <td><code>%han-mono-ja</code>
    <td><code>%han-mono</code>
</table>

#### 代碼示例

```scss
.box {
  @extend %han-mono-hans;
}
```

上方的Sass代碼會將選擇器`.box`擴展至佔用符`%han-mono-hans`上。樣式表輸出結果將類似於，


```css
[%han-mono-hans],
code:lang(zh-Hans),
[……],
.box {
  font-family: "Biaodian Pro Sans GB", Menlo, Courier, "Han Heiti GB", monospace, monospace, sans-serif
}
```

### 覆蓋順序 <!-- #ziti_jixing_extend-fugai_shunxu --> 
在擁有相同繼承權重的同一選擇器上套用二個以上的字體基型 @extend時，字體樣式*不為*基型 @extend宣告順序所決定，相關覆蓋順序規則見下表，

<table id='generic-extend-order'>
  <style scoped>
#generic-extend-order {
  width: 13em;
}
#generic-extend-order tr {
  border-bottom: 0 !important;
}
#generic-extend-order tr th {
  text-align: right;
  padding-right: .75em;
  width: 3em;
}
#generic-extend-order thead th:only-child {
  text-align: center;
}
  </style>
  <thead> 
    <th colspan='2'>基型覆蓋優先級
  </thead>
  <tr>
    <th>高  
    <td>西文等寬／黑體
  <tr>
    <th rowspan='5'>
    <td>楷體、意大利體
  <tr>
    <td>楷體
  <tr>
    <td>宋體、意大利體
  <tr>
    <td>宋體
  <tr>
    <td>黑體、意大利體
  <tr>
    <th>低
    <td>黑體
</table>

#### 代碼示例
```scss
.some-container {
  @extend %han-cursive-italic-hant;
  @extend %han-sans-hant;
}

.some-container-2 {
  @extend %han-sans-hant;
  @extend %han-cursive-italic-hant;
}
```

上述代碼中，容器`.some-container`及`.some-container-2`的最終字體樣式**皆應為「楷體（繁體）、西文意大利體」**，而非「黑體（繁體）」，意即覆蓋規則*與宣告順序無關*。

### 相應的 @mixin <!-- #ziti_jixing_extend-xiangying_de_mixin -->
使用字體基型 @mixin `han-typeface-by-lang`可為選擇器加入所有地區變體之字體樣式的擴展，其調用形式為，

```scss
@include han-typeface-by-lang( $typeface: [基型] );
// 意大利體
@include han-typeface-by-lang( $typeface: [基型]-italic );
```

#### 代碼示例
```scss
.entry {
  @include han-typeface-by-lang( $typeface: cursive );
}
```
上方代碼同等於，

```scss
.entry {
  &:lang(zh),
  &:lang(zh-Hant) {
    @extend %han-cursive-hant;
  }

  &:lang(zh-Hans),
  &:lang(zh-CN) {
    @extend %han-cursive-hans;
  }

  &:lang(ja) {
    @extend %han-cursive-ja;
  }

  &:lang(zh-Latn),
  &:lang(ja-Latn),
  &:not(:lang(zh)):not(:lang(ja)),
  *:lang(zh-Latn),
  *:lang(ja-Latn),
  *:not(:lang(zh)):not(:lang(ja)) {
    @extend %han-cursive;
  }
}
```

 章節的編排 <!-- #sectional -->
----------

### 多級標題選擇器

```scss
#{han-header-i( $max: 1, $min: 6 )}
```

### 章節的計數

```scss 
@include han-section-counter( $toc: false );
```

 行的組成 <!-- #inline -->
---------

### 着重號 <!-- #inline-emphasis-mark -->
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

### 啓用web font合字功能 <!-- #inline-ligature -->

```
@extend %han-ligature;
```
## <span lang='en'>Sass</span>變數彙整 <!-- #variable -->

以下是「漢字標準格式」Sass樣式表下所有可調控的變數及其預設値。最佳實踐方式係在引用`_han.sass`前，為需要更動的變數賦値。

### 檔案路徑
Web font路徑，
```scss
$han-font-woff: './font/han.woff';
$han-font-otf:  './font/han.otf';
```

### 元素容器的選用
根元素，依需求可改用`:root`等。
```scss
$han-root: html;
```

文章區塊容器，其他的可能値有`.article`、`.entry`、`#post`……等。
```scss
$han-article: article;
```

「行動裝置模式」的啓用寬度（裝置或瀏覽器視窗），
```scss
$han-mobile-device-width: 480px;
```

### 文字樣式
行高（[全域行高](/manual/yangshi_biaozhunhua#quanyu_ziti_yangshi)、[文章行高](/manual/zhangjie_de_bianpai#wenzhang_de_hanggao)），
```scss
$han-line-height:         1.3;  // 全域行高（設置於根元素）
$han-article-line-height: 1.7;  // 文章行高（設置於文章區塊容器）
```

文章區塊是否使用[齊頭尾文字對齊](/manual/zhangjie_de_bianpai#wenzhang_de_duiqi)。
```scss
$han-article-justify:     true;
```

文章區塊是否啓用「[章節與目錄的計數](/manual/zhangjie_de_bianpai#zhangjie_yu_mulu_de_jishu)」功能。
```scss
$han-section-counter:     false;  // 章節標題計數
$han-section-counter-toc: false;  // 目錄計數
```

[縮進](/manual/zhangjie_de_bianpai#wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng)字數，
```scss
$han-indent:    2em;
$han-indent-md: 1em;  // 行動裝置上的縮進
```

[着重號](/manual/yangshi_biaozhunhua#qiangdiao_yu_zhongdian-qiangdiao)相關設定，
```scss
// 遇標點回避與否
$han-text-emphasis-skip: true;

// 着重號形狀
// `none` || `filled` || `open`
$han-text-emphasis-shape: filled;

// 着重號符號
// `dot` || `circle` || `double-circle` || `triangle` || `sesame` || <string>
$han-text-emphasis-mark: circle;

// 着重號位置
// `over` || `under`
$han-text-emphasis-posi: under;

// 着重號顏色
// `inherit` || <color>
$han-text-emphasis-color: inherit;

// 日文着重號樣式設定（同上）
$han-text-emphasis-shape-ja: filled;
$han-text-emphasis-mark-ja:  sesame;
$han-text-emphasis-posi-ja:  over;
$han-text-emphasis-color-ja: inherit;
```

### 文字設計
字集相關設定（[漢字](/manual/wenzisheji#zhongwen_hanzi_zitiji)、[標點](http://localhost:9999/manual/wenzisheji#biaodian_yangshi_xiuzheng-zhongwen_biaodian_liebiao)），
```scss
// 繁體中文字體變體
// `default` || `CNS` || `GB`
$han-glyph-set-hant: default;

// 繁體中文標點字體
// `Pro` || `CNS` || `GB` || `simp`
$han-biaodian-hant: Pro;

// 簡體中文字體變體
// `default` || `GB`
$han-glyph-set-hans: GB;

// 簡體中文標點字體
// `Pro` || `CNS` || `GB` || `simp`
$han-biaodian-hans: GB;
```

西文預設字體，
```scss
// 無襯線
$han-sans:  'Helvetica Neue', Helvetica, Arial;
// 襯線
$han-serif: Georgia, 'Times New Roman';
// 等寬
$han-mono:  Menlo, Courier;
```

中文預設字體，
```scss
$han-sans-zh:    '';
$han-serif-zh:   '';
$han-cursive-zh: '';
$han-mono-zh:    $han-sans-zh;
```
