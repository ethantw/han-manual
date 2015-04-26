
 文字設計
========

「漢字標準格式」內建專屬的文字設計模組，在[元素樣式標準化](/manual/yangshi_biaozhunhua)的基礎上，強化各作業系統及瀏覽器的字體回退機制、提供區分萬國碼區段的各式字體集（如標點修正集等），為不同元素及相應情境指定了符合需求及既成慣例的字體樣式。

<div class='info note'> 

<dfn>文字設計</dfn>原文作「<span lang='en'>typography</span>」，意指集合了字體設計與排版的各種技術。「漢字標準格式」中，<b>文字設計</b>特指在不同元素情境下設定的不同字體、字體集及基型。

**提示：**文字設計模組不依賴JavaScript腳本。
</div>

 字體回退機制 <!-- #ziti_huitui_jizhi -->
-----------
文字設計模組以其完善的字體回退機制處理所有元素與情境的字體樣式。依據元素或網頁指定的*語言、文字變體或地區*等元信息，按下方的回退順序提供相應的字體。

1. 漢字標點字體集<small>（例：Biaodian Pro Sans）</small>
2. 數字字體集<small>（需要時調用，例：Numeral LF Sans）</small>
3. 西文字體<small>（例：Helvetica Neue、Arial）</small>
4. 注音符號字體集<small>（需要時調用，例：Zhuyin Heiti）</small>
5. 漢字字體集<small>（例：Han Heiti）</small>
6. 字體基型<small>（例：sans-serif）</small>

這個回退順序，有助在最大程度上，避開各字體或字體集同時使用時可能重疊的區段衝突，以字元為單元調用相應的字體。

<div class='info important note'>

**注意：**截至2014年十月，Mozilla Firefox仍不支援回退機制中部分依萬國碼區段定義的字體集。而當前版本的Safari、Chrome、Opera及IE皆已完整支援。
</div>

### 示例及相關代碼
簡體中文網頁的根元素（`html`）*預設字體樣式*如下，

```css
html:lang(zh-Hans),
html:lang(zh-CN) {
  font-family: 
    'Biaodian Pro Sans GB',             /* 1 */
    'Helvetica Neue', Helvetica, Arial, /* 3 */
    'Han Heiti GB',                     /* 5 */
    sans-serif                          /* 6 */
  ;
}
```

繁體中文網頁，文章內區塊引用元素的*預設*字體樣式如下，

```css
article blockquote:lang(zh-Hant) {
    font-family: 
      'Biaodian Pro Serif',             /* 1 */
      'Numeral LF Serif',               /* 2 */
      Georgia, 'Times New Roman',       /* 3 */
      'Zhuyin Kaiti',                   /* 4 */
      'Han Kaiti',                      /* 5 */
      cursive, serif                    /* 6 */
    ;
}
```

日文網頁，計算機相關文本元素（如代碼`code`元素等）的*預設*字體樣式如下，

```css
code:lang(ja) {
  font-family: 
    'Yakumono Sans',                    /* 1 */
    Menlo, Courier,                     /* 3 */
    monospace, monospace, sans-serif    /* 6 */
  ;
}
```

中文或日文網頁下，非漢字文本的元素字體樣式，

```css
*:lang(zh-Latn), 
*:lang(ja-Latn),
*:not(:lang(zh)):not(:lang(ja)) {
  font-family: 
    'Helvetica Neue', Helvetica, Arial, /* 3 */
    'Han Heiti',                        /* 5 */
    sans-serif                          /* 6 */
  ;
}
```

<div class='info note'>

**提示：**為清楚表述字體回退機制與概念，以上本節節錄的CSS代碼皆經簡化、合併。
</div>

文字設計模組內建了四個字體回退基型——無襯線（黑體）、襯線（宋體）、手寫體（楷體）、等寬（黑體），使用相應的Sass `@extend`即可在選擇器上套用，並能避免冗餘繁雜的字體宣告，請見使用手冊「[Sass API·字體基型 @extend][api-extend]」。

[api-extend]: /manual/sass#ziti_jixing_extend


 標點樣式修正 <!-- #biaodian_yangshi_xiuzheng -->
-----------
目前，部分漢字標點符號*未單獨收錄*於萬國碼中，多與西文標點共同。由於二種文字形態迥異，一般的字體設定無法滿足雙方的排版需求。

<div>
  <style scoped>
.punc-wrong-format {
  font-family: 
    'Helvetica Neue', Helvetica, Arial, 
    'Heiti TC', 'Lihei Pro', 'Microsoft Jhenghei', 
    sans-serif
  ;
}
  </style>

部分繁體中文字體將單點全形句號顯示於字元中間（<span class="punc-wrong-format">．</span>），與間隔號樣式相似，可能導致讀者誤會；而西文字體中，間隔號多顯示為「半格漢字字寬」（<span class="punc-wrong-format">·</span>）、破折號兩相鄰時斷開（<span class="punc-wrong-format">——</span>）和省略號沉底（<span class="punc-wrong-format">……</span>）皆與慣例的漢字排版規範不符。
</div>

文字設計模組預設為中文網頁套用進階標點符號樣式修正（可依需求選用簡易版），日文網頁則預設修正破折號、省略號等二種符號，並根據相應的元素或情境，套用「無襯線」或「襯線」修正集。

二種語言皆可經Sass變數設定關閉標點樣式修正。

<div class='info important note'>

**注意：**截至2014年十月，Mozilla Firefox仍無法完整支援標點樣式修正，然搭配Han.js腳本的進階排版功能預設開啓「間隔號、破折號、省略號」三個符號的修正（在Firefox下）。
</div>

### 中文標點列表 <!-- #biaodian_yangshi_xiuzheng-zhongwen_biaodian_liebiao -->
<table id='bd-font'>
  <style scoped>
#bd-font thead th {
  width: 12em;
}
  </style>
  <thead>
    <th style='width: 8em;'>變體
    <th>無襯線
    <th>襯線
  </thead>
  <tr>
    <th>推薦<br><small>適用繁、簡中文</small>
    <td>
      Biaodian Pro Sans
    <td>
      Biaodian Pro Serif
  </tr>
  <tr>
    <th>台灣教育部式<br><small>繁體中文預設</small>
    <td>
      Biaodian Pro Sans CNS
    <td>
      Biaodian Pro Serif CNS
  <tr>
    <th>中國國標式<br><small>簡體中文預設</small>
    <td>
      Biaodian Pro Sans GB
    <td>
      Biaodian Pro Serif GB
  <tr>
    <th>簡易修正
    <td>
      Biaodian Sans
    <td>
      Biaodian Serif
  </tr>
</table>

#### 修正標點列表
<table id='bd-pro-char-list'>
  <style scoped>
#bd-pro-char-list thead th:first-child,
#bd-pro-char-list thead th:nth-child(2) {
  width: 6.5em;
}
#bd-pro-char-list thead th:not(:first-child):not(:nth-child(2)) {
  width: 9em;
}
#bd-pro-char-list tbody {
  font-size: .9em;
}
#bd-pro-char-list td[colspan],
#bd-pro-char-list thead th:nth-child(2),
#bd-pro-char-list tr td:first-of-type {
  text-align: center;
}
#bd-pro-char-list .char-display {
  font-family: 'Biaodian Pro Sans', sans-serif;
}
#bd-pro-char-list .char-display.cns {
  font-family: 'Biaodian Pro Sans CNS', sans-serif;
}
#bd-pro-char-list .char-display.gb {
  font-family: 'Biaodian Pro Sans GB', sans-serif;
}
  </style>
  <thead>
    <th>標點
    <th>Unicode
    <th>推薦
    <th>台灣教育部式
    <th>中國國標式
  </thead>
  <tr>
    <th>句號
    <td>3002
    <td>注字後下<span class='char-display'>。</span>
    <td>居中<span class='char-display cns'>。</span>
    <td>注字後下<span class='char-display gb'>。</span>
  <tr>
    <th>單點全形句號
    <td>FF0E
    <td colspan='3'>注字後下<span class='char-display'>．</span>
  <tr>
    <th>逗號
    <td>FF0C
    <td>注字後下<span class='char-display'>，</span>
    <td>居中<span class='char-display cns'>，</span>
    <td>注字後下<span class='char-display gb'>，</span>
  <tr>
    <th>頓號
    <td>3001
    <td>注字後下<span class='char-display'>、</span>
    <td>居中<span class='char-display cns'>、</span>
    <td>注字後下<span class='char-display gb'>、</span>
  <tr>
    <th>分號
    <td>FF1B
    <td colspan='2'>居中<span class='char-display'>；</span>
    <td>注字後下<span class='char-display gb'>；</span>
  <tr>
    <th>冒號
    <td>FF1A
    <td colspan='2'>居中<span class='char-display'>：</span>
    <td>注字後下<span class='char-display gb'>：</span>
  <tr>
    <th>問號
    <td>FF1F
    <td colspan='2'>居中<span class='char-display'>？</span>
    <td>注字後下<span class='char-display gb'>？</span>
  <tr>
    <th>驚嘆號
    <td>FF01
    <td colspan='2'>居中<span class='char-display'>！</span>
    <td>注字後下<span class='char-display gb'>！</span>
  <tr>
    <th>間隔號
    <td>00B7
    <td colspan='3'>
    佔一漢字寬度，居中<br>
    <span class='char-display'>莫那·魯道</span>
  <tr>
    <th>引號
    <td>300C<br>300D<br>300E<br>300F
    <td colspan='3'>
      佔一漢字寬度，緊靠其內容<br>
      <span class='char-display'>「內『內容』容」</span>
  <tr>
    <th>彎引號
    <td>201C<br>201D<br>2018<br>2019
    <td colspan='2'>
      不修正<br>
      <span class='char-display'>‘內“內容”容’</span>
    <td>
      佔一漢字寬度，<br>緊靠其內容<br>
      <span class='char-display gb'>“內‘內容’容”</span>
  <tr>
    <th>書名號
    <td>300A<br>300B<br>3008<br>3009
    <td colspan='3'>佔一漢字寬度，緊靠其內容<br><span class='char-display'>《書名》〈篇名〉</span>
  <tr>
    <th>括號
    <td>FF08<br>FF09<br>3014<br>3015
    <td colspan='3'>
      佔一漢字寬度，緊靠其內容<br>
      <span class='char-display'>（內〔內容〕容）</span>
  <tr>
    <th>破折號
    <td>2014
    <td colspan='3'>
      兩相連時無間隔<span class='char-display'>——</span>；<br>
      單獨存在時兩側不連字<span class='char-display'>—</span>
  <tr>
    <th>刪節號
    <td>2026
    <td colspan='3'>
      兩相連時居中<span class='char-display'>……</span>；<br>
      單獨存在時沉底<span class='char-display'>…</span>
  <tr>
    <th>連接號
    <td>FF0D
    <td colspan='3'>
      佔一漢字寬度，居中<br>
      <span class='char-display'>二〇〇六年－二〇三六年</span>
  <tr>
    <th>斜線
    <td>FF0F<br>FF3C
    <td colspan='3'>
      佔一漢字寬度，居中<br>
      <span class='char-display'>／＼</span>
</table>

#### 簡易修正標點列表
<table id='bd-char-list'>
  <style scoped>
#bd-char-list thead th:first-child,
#bd-char-list thead th:nth-child(2) {
  width: 6.5em;
}
#bd-char-list thead th:nth-child(3) {
  width: 15em;
}
#bd-char-list thead th:nth-child(2),
#bd-char-list tr td:first-of-type {
  text-align: center;
}
#bd-char-list .char-display {
  font-family: 'Biaodian Sans', sans-serif;
}
  </style>
  <thead>
    <th>標點
    <th>Unicode
    <th>示例
  </thead>
  <tr>
    <th>單點全形句號
    <td>FF0E
    <td>注字後下<span class='char-display'>．</span>
  <tr>
    <th>間隔號
    <td>00B7
    <td>
    佔一漢字寬度，居中<br>
    <span class='char-display'>莫那·魯道</span>
  <tr>
    <th>破折號
    <td>2014
    <td>
      兩相連時無間隔<span class='char-display'>——</span>；<br>
      單獨存在時兩側不連字<span class='char-display'>—</span>
  <tr>
    <th>刪節號
    <td>2026
    <td>
      兩相連時居中<span class='char-display'>……</span>；<br>
      單獨存在時沉底<span class='char-display'>…</span>
</table>

#### 示例 
<div class='example'> 

#### 修正前
<p class='before-punc-correction'>
    <style scoped>
.before-punc-correction {
  font-family: 'Helvetica Neue', Helvetica, Arial, 'Han Heiti', sans-serif;
}
  </style>
《源氏物語》（成書在長保三年至寬弘五年〔西元1001年至1008年〕間）在日本開啟了「物哀」的時代——「物哀」即見物而生悲哀之情——此後日本的小說中明顯帶有一種淡淡的悲傷！而「物哀」也成為日本一種全國性的民族意識，隨着一代又一代的詩人、散文家、物語作者流傳了下來……
</div>

<div class='example'> 

#### 推薦標點<small>（適用繁、簡中文）</small>
<p style='font-family: "Biaodian Pro Sans", "Helvetica Neue", Helvetica, Arial, "Han Heiti", sans-serif'>《源氏物語》（成書在長保三年至寬弘五年〔西元1001年至1008年〕間）在日本開啟了「物哀」的時代——「物哀」即見物而生悲哀之情——此後日本的小說中明顯帶有一種淡淡的悲傷！而「物哀」也成為日本一種全國性的民族意識，隨着一代又一代的詩人、散文家、物語作者流傳了下來……

<p lang='zh-Hans' style='font-family: "Biaodian Pro Sans", "Helvetica Neue", Helvetica, Arial, "Han Heiti GB", sans-serif'>《源氏物语》（成书在长保三年至宽弘五年〔西元1001年至1008年〕间）在日本开启了「物哀」的时代——「物哀」即见物而生悲哀之情——此后日本的小说中明显带有一种淡淡的悲伤！而「物哀」也成为日本一种全国性的民族意识，随着一代又一代的诗人、散文家、物语作者流传了下来……

***
#### 台灣教育部式
<p lang='zh-Hant-TW' style='font-family: "Biaodian Pro Sans CNS", "Helvetica Neue", Helvetica, Arial, "Han Heiti CNS", sans-serif'>《源氏物語》（成書在長保三年至寬弘五年〔西元1001年至1008年〕間）在日本開啟了「物哀」的時代——「物哀」即見物而生悲哀之情——此後日本的小說中明顯帶有一種淡淡的悲傷！而「物哀」也成為日本一種全國性的民族意識，隨着一代又一代的詩人、散文家、物語作者流傳了下來……

***
#### 中國國標式
<p lang='zh-Hans'>《源氏物语》（成书在长保三年至宽弘五年〔西元1001年至1008年〕间）在日本开启了“物哀”的时代——“物哀”即见物而生悲哀之情——此后日本的小说中明显带有一种淡淡的悲伤！而“物哀”也成为日本一种全国性的民族意识，随着一代又一代的诗人、散文家、物语作者流传了下来……
</div>

### 日文標點列表 <!-- #biaodian_yangshi_xiuzheng-riwen_biaodian_liebiao -->
<table id='ja-bd-font'>
  <style scoped>
#ja-bd-font thead th:first-child {
  width: 6em;
}
#ja-bd-font thead th {
  width: 9.5em;
}
  </style>
  <thead>
    <th>
    <th>無襯線
    <th>襯線
  </thead>
  <tr>
    <th>字體名稱
    <td>
      Yakumono Sans
    <td>
      Yakumono Serif
  </tr>
</table>

#### 修正標點列表
<table id='ja-bd-char-list'>
  <style scoped>
#ja-bd-char-list thead th:first-child,
#ja-bd-char-list thead th:nth-child(2) {
  width: 6.5em;
}
#ja-bd-char-list thead th:nth-child(3) {
  width: 15em;
}
#ja-bd-char-list thead th:nth-child(2),
#ja-bd-char-list tr td:first-of-type {
  text-align: center;
}
#ja-bd-char-list .char-display {
  font-family: 'Yakumono Sans', sans-serif;
}
  </style>
  <thead>
    <th>標點
    <th>Unicode
    <th>示例
  </thead>
  <tr>
    <th>破折號
    <td>2014
    <td>
      兩相連時無間隔<span class='char-display'>——</span>；<br>
      單獨存在時兩側不連字<span class='char-display'>—</span>
  <tr>
    <th>刪節號
    <td>2026
    <td>
      兩相連時居中<span class='char-display'>……</span>；<br>
      單獨存在時沉底<span class='char-display'>…</span>
</table>

#### 示例 
<div class='example'> 

#### 修正前
<p lang='ja' class='before-punc-correction'>
    <style scoped>
.before-punc-correction:lang(ja) {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
  </style>
『西遊記』は、中国で16世紀の明の時代に大成した伝奇小説で——唐僧・三蔵法師が白馬・玉龍に乗って三神仙（神通力を持った仙人）、孫悟空、猪八戒、沙悟浄を供に従え、幾多の苦難を乗り越え天竺へ取経を目指す物語⋯⋯

*** 
#### 修正後
<p lang='ja'>『西遊記』は、中国で16世紀の明の時代に大成した伝奇小説で——唐僧・三蔵法師が白馬・玉龍に乗って三神仙（神通力を持った仙人）、孫悟空、猪八戒、沙悟浄を供に従え、幾多の苦難を乗り越え天竺へ取経を目指す物語⋯⋯
</div>

更詳盡的範例及測試，請見[程式測試頁·標點符號][test-bd]。

[test-bd]: http://ethantw.github.io/Han/latest/biaodian.html

 預設西文字體 <!-- #yushe_xiwen_ziti -->
------------
預設西文字體分為無襯線、襯線、等寬三種，字體選用的原則以主流作業系統相應的預設字體或「網頁安全字體」為主。

<table id='western-font'>
  <style scoped>
#western-font {
  min-width: 22em;
}
  </style>
  <thead>
    <th style='width: 6em;'>基型
    <th>字體名稱及展示
  </thead>
  <tr>
    <th>無襯線
    <td>
      <span class='font-display' style='font-family: "Helvetica Neue";'>Helvetica Neue</span><!---->、<span class='font-display' style='font-family: Helvetica;'>Helvetica</span><!--
      -->、<span class='font-display' style='font-family: Arial;'>Arial</span>
  </tr>
  <tr>
    <th>襯線
    <td>
      <span class='font-display' style='font-family: Georgia;'>Georgia</span><!--
      -->、<span class='font-display' style='font-family: "Times New Roman";'>Times New Roman</span>
  </tr>
  <tr>
    <th>等寬
    <td>
      <span class='font-display' style='font-family: Menlo;'>Menlo</span><!--
      -->、<span class='font-display' style='font-family: Courier;'>Courier</span>
  </tr>
</table>

### 等高與文本數字 <!-- #yushe_xiwen_ziti-denggao_yu_wenben_shuzi -->
部分西文字體使用文本數字樣式的阿拉伯數字，然文本數字並不適合嚴格等寬的漢字排版。文字設計模組提供「等高數字」與「文本數字」二種數字字體集，其下再區分無襯線及襯線二個基型分類。

<table id='numeral-font'>
  <style scoped>
#numeral-font {
  min-width: 30em;
}
#numeral-font thead th {
  width: 12em;
}
  </style>
  <thead>
    <th style='width: 6em;'>基型
    <th>等高數字<small>（多數情況適用）</small>
    <th>文本數字
  </thead>
  <tr>
    <th>無襯線
    <td>
      Numeral LF Sans<br>
      <span class='font-display' style='font-family: "Numeral LF Sans";'>1234567890</span>
    <td>
      Numeral TF Sans<br>
      <span class='font-display' style='font-family: "Numeral TF Sans";'>1234567890</span>
  </tr>
  <tr>
    <th>襯線
    <td>
      Numeral LF Serif<br>
      <span class='font-display' style='font-family: "Numeral LF Serif";'>1234567890</span>
    <td>
      Numeral TF Serif<br>
      <span class='font-display' style='font-family: "Numeral TF Serif";'>1234567890</span>
  </tr>
</table>

<div class='info note important'>

**注意：**尚不支援Firefox。
</div>

### 意大利體 <!-- #yushe_xiwen_ziti-yidaliti -->
西文意大利體對應漢字的手寫體，例如楷體或仿宋。在「漢字標準格式」中，應用於如變音文字`i`與變數`var`等元素。

<table id='italic-font'>
  <style scoped>
#italic-font thead th {
  width: 11em;
}
  </style>
  <thead>
    <th style='width: 5em;'>基型
    <th>西文
    <th>等高數字
    <th>文本數字
  </thead>
  <tr>
    <th>無襯線
    <td>
      <span class='font-display' style='font-family: "Latin Italic Sans";'>Latin Italic Sans
    <td>
      Numeral LF Italic Sans<br>
      <span class='font-display' style='font-family: "Numeral LF Italic Sans";'>1234567890</span>
    <td>
      尚無
  </tr>
  <tr>
    <th>襯線
    <td>
      <span class='font-display' style='font-family: "Latin Italic Serif";'>Latin Italic Serif
    <td>
      Numeral LF Italic Serif<br>
      <span class='font-display' style='font-family: "Numeral LF Italic Serif";'>1234567890</span>
    <td>
      Numeral TF Italic Serif<br>
      <span class='font-display' style='font-family: "Numeral TF Italic Serif";'>1234567890</span>
  </tr>
</table>

<div class='info note important'>

**注意：**數字意大利體尚不支援Firefox。
</div>

### 陽入韻羅馬拼音 <!-- #yushe_xiwen_ziti-luoma_pinyin -->
適用於含有*陽入韻*的漢語羅馬拼音（如臺灣閩南語羅馬字拼音方案）行間注`ruby`元素。提供無襯線基型「Romanization Sans」，使用web font技術，此字體僅包含五個陽入韻元音「<span class='font-display' style='font-family: "Romanization Sans";'>a̍e̍i̍o̍u̍</span>」字符。

 中文漢字字體集 <!-- #zhongwen_hanzi_zitiji --> 
--------------
文字設計模組按四大漢字字體基型「黑」「宋」「楷」「仿宋」編制，其下再區分「繁體推薦字體」「繁體適用字體」「中國國標新字形字體」三種變體，足以適應各種需求。

<table id='hanzi-font'>
  <style scoped>
#hanzi-font thead th {
  width: 11em;
}
  </style>
  <thead>
    <th style='width: 4em;'>基型
    <th style='width: 8.5em;'>繁體推薦字體
    <th>繁體適用字體
    <th>中國國標新字形
  </thead>
  <tr>
    <th>黑
    <td>
      Han Heiti<br>
      <span class='font-display' style='font-family: "";'></span>
    <td>
      Han Heiti CNS<br>
      <span class='font-display' style='font-family: "";'></span>
    <td>
      Han Heiti GB<br>
      <span class='font-display' style='font-family: "";'></span>
  </tr>
  <tr>
    <th>宋
    <td>
      Han Songti<br>
      <span class='font-display' style='font-family: "";'></span>
    <td>
      Han Songti CNS<br>
      <span class='font-display' style='font-family: "";'></span>
    <td>
      Han Songti GB<br>
      <span class='font-display' style='font-family: "";'></span>
  </tr>
  <tr>
    <th>楷
    <td>
      Han Kaiti<br>
      <span class='font-display' style='font-family: "";'></span>
    <td>
      Han Kaiti CNS<br>
      <span class='font-display' style='font-family: "";'></span>
    <td>
      Han Kaiti GB<br>
      <span class='font-display' style='font-family: "";'></span>
  </tr>
  <tr>
    <th>仿宋
    <td>
      Han Fangsong<br>
      <span class='font-display' style='font-family: "";'></span>
    <td>
      Han Fangsong CNS<br>
      <span class='font-display' style='font-family: "";'></span>
    <td>
      Han Fangsong GB<br>
      <span class='font-display' style='font-family: "";'></span>
  </tr>
</table>

<div class='info note'>

**提示：**由於主流作業系統皆僅預裝「中國國標新字形」的仿宋體，基型仿宋雖同其餘三者提供三種變體，惟目前皆指向同一字體。俟未來各系統提供相應字體後，漢字標準格式將隨之更新。
</div>

### 注音符號 <!-- #zhongwen_hanzi_zitiji-zhuyin_fuhao --> 
文字設計模組提供二種注音符號字體——「注音黑體」及「注音楷體」。

<table id='zhuyin-font'>
  <style scoped>
#zhuyin-font thead th:first-child {
  width: 6em;
}
#zhuyin-font thead th {
  width: 9.5em;
}
  </style>
  <thead>
    <th>
    <th>黑
    <th>楷
  </thead>
  <tr>
    <th>字體名稱
    <td>
      Zhuyin Heiti<br>
      <span class='font-display' style='font-family: "";'></span>
    <td>
      Zhuyin Kaiti<br>
      <span class='font-display' style='font-family: "";'></span>
  </tr>
</table>


<section class='self-contained'>

 元素字體的指定 <!-- #yuansu_ziti_de_zhiding -->
--------------
在「漢字標準格式」中，不同的元素依據其功能、語意及「語言、文字變體、地區」等元信息，套用相應合適的字體樣式。

### 全域字體樣式 <!-- #yuansu_ziti_de_zhiding-quanyu_ziti_yangshi -->
全域字體樣式使用漢字無襯線標點、西文無襯線字體及漢字（注音）黑體。

### 計算機相關文本 <!-- #yuansu_ziti_de_zhiding-jisuanji_xiangguan_wenben -->
代碼`code`、輸入鍵`kbd`、計算機輸出示例`samp`及格式預處理`pre`等計算機相關文本元素，使用漢字無襯線標點、西文等寬字體及漢字（注音）黑體。

<div class='example'>

#### 輸入鍵
請使用<kbd>caps lock</kbd>鍵來切換大小寫。
</div>

### 變音文字與變數元素 <!-- #yuansu_ziti_de_zhiding-bianyinwenzi_yu_bianshu_yuansu -->
變音文字`i`與變數`var`元素使用漢字襯線標點、襯線等高數字、西文襯線意大利體及漢字（注音）楷體。

<div class='example'>

#### 變數
設總增加人數為<var>x</var>，報名後棄賽人數為<var>y</var>…… 

***
#### 變音文字
<i>夢境中，他發現自己身着印有數字1926的上衣，左側手臂隱約傳來陣陣抽痛。</i>
</div>

#### 相關情境 <!-- yuansu_ziti_zhiding-bianyinwenzi_ji_bianshu_yuansu-xiangguan_qingjing -->
見本文「[文章下的區塊引用元素·變音文字與變數元素][article-blockquote-i-var]」一節。

[article-blockquote-i-var]: #butong_qingjing_xia_de_ziti-bianyinwenzi_yu_bianshu

### 行間注元素 <!-- #yuansu_ziti_de_zhiding-hangjianzhu_yuansu -->
行間注`ruby`元素下的注音符號注文（國語注音符號及方言音符號）依據父元素的字體樣式，使用注音黑體或注音楷體，然「調號」因定位之由，強制使用注音楷體。

在`<ruby>`或`<rtc>`標記上套用類別`.romanization`者視為羅馬拼音注文，預設使用羅馬拼音陽入韻連字字體（Romanization Sans，僅包含<span style='font-family: "Romanization Sans"'>a̍e̍i̍o̍u̍</span>五個符號）及西文無襯線字體。

<blockquote class='example poem-like'>

<ruby class='mps'>
如<rt>ㄖㄨˊ</rt>
雪<rt>ㄒㄩㄝˇ</rt>
花<rt>ㄏㄨㄚ</rt>
的<rt>˙ㄉㄜ</rt>
結<rt>ㄐㄧㄝˊ</rt>
構<rt>ㄍㄡˋ</rt>、<rt></rt>
流<rt>ㄌㄧㄡˊ</rt>
蘇<rt>ㄙㄨ</rt>
的<rt>˙ㄉㄜ</rt>
四<rt>ㄙˋ</rt>
瓣<rt>ㄅㄢˋ</rt> 
</ruby>

***

<ruby class='romanization'>
你
  <rt>lí</rt>
敢有
  <rt>kám-ū</rt>
聽著
  <rt>thiann-tio̍h</rt>
咱
  <rt>lán</rt>
的
  <rt>ê</rt>
歌
  <rt>kua</rt>
</ruby>？
</blockquote>

<div class='info desc'>

**說明：**如上方範例所示，在文章內區塊引用元素下的行間注，注音符號注文使用了配合其父元素的注音楷體；而羅馬拼音注文則使用Romanization Sans及西文無襯線字體。
</div>

</section>
<section class='self-contained'>

 不同情境下的字體 <!-- #butong_qingjing_xia_de_ziti -->
---------------
### 文章下的重點情境 <!-- #butong_qingjing_xia_de_ziti-wenzhang_xia_de_zhongdian_qingjing -->
文章下的重點情境`article strong`，使用漢字無襯線標點、西文無襯線字體及漢字（注音）黑體，並以粗於父文本的字重突顯其重要性。

<div class='example'>
<article>
  
  BRT的中文作巴士捷運系統，是一種**將公車路線系統化的大眾運輸工具，**下面是節錄自《維基百科》相關條目的說明，

  > 一個巴士捷運系統具有專門的設計、服務和基礎設施，以提高系統的品質與屏除可能造成誤點的因素。巴士捷運系統的**目的是結合輕軌與捷運的容量、速度與公車系統的低成本、靈活性和簡單性，**並能提供類似鐵路的服務水平，被喻為「地面上的地鐵」。
</article>
</div>

### 文章下的區塊引用情境 <!-- #butong_qingjing_xia_de_ziti-wenzhang_xia_de_qukuaiyinyong_qingjing -->
文章下的區塊引用情境`article blockquote`使用漢字襯線標點、襯線等高數字、西文襯線體及漢字（注音）楷體。

<div class='example'>
<article>
  
  據<cite>《周髀算經》</cite>中記述，公元前一千多年周公與商高論數的對話中，商高就以「三四五」三個特定數為例詳細解釋了勾股定理要素，

  > 既方其外，半之一矩，環而共盤，得成三四五。兩矩共長二十有五，是謂積矩。
</article>
</div>

#### 變音文字與變數 <!-- #butong_qingjing_xia_de_ziti-bianyinwenzi_yu_bianshu -->
在文章下的區塊引用情境中，變音文字`i`與變數`var`元素改用漢字無襯線標點、西文無襯線意大利體及漢字（注音）黑體，以突顯其用途與差異。

<div class='example'>
<article>
  
  曾經，甘道夫如此描述哈比人，

  > ……我們知道的並不多。我們只知道在很遠的地方，越過許多山脈和河流，有一群矮小的生物居住在洞穴或是沙丘中。但沒有任何關於他們的傳說，<i>因為據說他們游手好閒，躲避人類的目光，可以在一瞬間消失，而且他們還可以將嗓音偽裝成飛鳥的啁啾聲。</i>不過，看來並不是這樣。

  > <footer class='cite'>——J·R·R·托爾金<cite>《魔戒之王·雙城奇謀》</cite></footer>

  和新朋友們相處了一會兒，他便改觀了。
</article>
</div>


### 圖表下的區塊引用情境 <!-- #butong_qingjing_xia_de_ziti-tubiao_xia_de_qukuaiyinyong_qingjing -->
圖表下的區塊引用情境`figure blockquote`使用漢字襯線標點、襯線等高數字、西文襯線體及漢字宋體（注音楷體）。

<div class='example'>
<figure>
  
  > 唯有知識才能解決問題。
  <figcaption>面對記者的採訪，吳寶春如是說，話語更顯其從容自若的氣質。</figcaption>
</figure>
</div>
</section>

