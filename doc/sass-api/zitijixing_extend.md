
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

或參見以下二表，

### 漢字字體基型
<table id='generics-extend'>
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
  </thead>
  <tr>
    <th>黑體
    <td><code>%han-sans-hant</code>
    <td><code>%han-sans-hans</code>
    <td><code>%han-sans-ja</code>
  <tr>
    <th>黑體、<br>意大利體
    <td><code>%han-sans-italic-hant</code>
    <td><code>%han-sans-italic-hans</code>
    <td><code>%han-sans-italic-ja</code>
  <tr>
    <th>宋體
    <td><code>%han-serif-hant</code>
    <td><code>%han-serif-hans</code>
    <td><code>%han-serif-ja</code>
  <tr>
    <th>宋體、<br>意大利體
    <td><code>%han-serif-italic-hant</code>
    <td><code>%han-serif-italic-hans</code>
    <td><code>%han-serif-italic-ja</code>
  <tr>
    <th>楷體
    <td><code>%han-cursive-hant</code>
    <td><code>%han-cursive-hans</code>
    <td><code>%han-cursive-ja</code>
  <tr>
    <th>楷體、<br>意大利體
    <td><code>%han-cursive-italic-hant</code>
    <td><code>%han-cursive-italic-hans</code>
    <td><code>%han-cursive-italic-ja</code>
  <tr>
    <th>西文等寬／<br>黑體
    <td><code>%han-mono-hant</code>
    <td><code>%han-mono-hans</code>
    <td><code>%han-mono-ja</code>
</table>

### 西文字體基型
<table id='generics-extend-western'>
  <style scoped>
#generics-extend-western {
  font-size: .8em;
}
#generics-extend-western thead th:first-child {
  width: 10em;
}
#generics-extend-western tbody th {
  height: 3em;
}
  </style>
  <thead>
    <th>基型
    <th>西文字體
  </thead>
  <tr>
    <th>無襯線
    <td><code>%han-sans</code>
  <tr>
    <th>無襯線意大利體
    <td><code>%han-sans-italic</code>
  <tr>
    <th>襯線
    <td><code>%han-serif</code>
  <tr>
    <th>襯線意大利體
    <td><code>%han-serif-italic</code>
  <tr>
    <th>手寫
    <td><code>%han-cursive</code>
  <tr>
    <th>手寫意大利體
    <td><code>%han-cursive-italic</code>
  <tr>
    <th>等寬
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
