
 文字設計
========

「漢字標準格式」內建專屬的文字設計模組——Mre，在[元素樣式標準化](/manual/yangshi_biaozhunhua)的基礎上，強化各作業系統及瀏覽器的字體回退機制、提供區分萬國碼區段的各式字體集（如標點修正集等），為不同元素及相應情境指定了符合需求及既成慣例的字體樣式。

<div class='info note'> 

<dfn>文字設計</dfn>原文作「<span lang='en'>typography</span>」，意指集合了字體設計與排版的各種技術。「漢字標準格式」中，<b>文字設計</b>特指在不同元素情境下設定的不同字體集或字體種類，及字集修正方案。

**提示：**Mre文字設計模組不依賴JavaScript腳本。
</div>

 字體回退機制 <!-- #ziti_huitui_jizhi -->
-----------
Mre模組提供完整的字體回退機制，依據元素或網頁指定的語言、文字變體或地區等元信息，自動按下方的順序套用相應的字體樣式。

1. 漢字標點字體集<small>（例：Biaodian Pro Sans）</small>
2. 數字字體集<small>（需要時調用，例：Numeral LF Sans）</small>
3. 西文字體<small>（例：Helvetica Neue、Arial）</small>
4. 注音符號字體集<small>（需要時調用，例：Zhuyin Heiti）</small>
5. 漢字字體集<small>（例：Han Heiti）</small>
6. 字體基型<small>（例：sans-serif）</small>

這個回退規則，有助在最大程度上，避開各字體或字體集同時使用時可能重疊的字元區段爭議，為各種字符調用相應的字體，保持合理而美觀的格式。

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

<div class='info note'>

**提示：**為清楚表述字體回退規則與概念，以上本節節錄的CSS代碼皆經簡化、合併。
</div>

依據字體回退規則，Mre模組內建了四個字體回退基型——無襯線（黑體）、襯線（宋體）、手寫體（楷體）、等寬（黑體），使用相應的Sass `@extend`即可在選擇器上套用，並能避免冗餘繁雜的字體宣告，請見使用手冊「[APIs・Sass·字體與字體集][api-zitiji]」「[APIs・Sass·@extend][api-extend]」。

[api-zitiji]: /manual/sass#ziti_yu_zitiji
[api-extend]: /manual/sass#extend


 標點樣式修正 <!-- #biaodian_yangshi_xiuzheng -->
-----------
Mre文字設計模組預設為中文網頁套用進階標點符號樣式修正（可依需求選用簡易版），日文網頁則預設修正破折號、省略號等二種符號，並根據相應的元素或情境，套用「無襯線」或「襯線」修正集。二種語言皆可經Sass變數設定關閉標點樣式修正。

### 中文標點 <!-- #biaodian_yangshi_xiuzheng-zhongwen_biaodian -->
<table id='bd-font'>
  <style scoped>
#bd-font thead th {
  width: 12em;
}
#bd-font th small {
  color: #777;
}
  </style>
  <thead>
    <th style='width: 8em;'>變體
    <th>無襯線
    <th>襯線
  </thead>
  <tr>
    <th>推薦<br><small>繁簡中文皆適用</small>
    <td>
      Biaodian Pro Sans
    <td>
      Biaodian Pro Serif
  </tr>
  <tr>
    <th>台灣教育部式<br><small>繁體中文適用</small>
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

### 日文標點 <!-- #biaodian_yangshi_xiuzheng-riwen_biaodian -->
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

<div class='info important note'>

**注意：**截至2014年十月，Mozilla Firefox仍無法完整支援標點樣式修正，然搭配Han.js腳本的進階排版功能預設開啓「間隔號、破折號、省略號」三個符號的修正（在Firefox下）。
</div>

### 示例 <!-- #biaodian_yangshi_xiuzheng-shili -->
<div class='example'> 

#### ［中文］推薦標點修正集<small>（適用繁簡中文）</small>
《源氏物語》（成書在長保三年至寬弘五年〔西元1001年至1008年〕間）在日本開啟了「物哀」的時代——「物哀」即見物而生悲哀之情——此後日本的小說中明顯帶有一種淡淡的悲傷！而「物哀」也成為日本一種全國性的民族意識，隨着一代又一代的詩人、散文家、物語作者流傳了下來……

《源氏物语》（成书在长保三年至宽弘五年〔西元1001年至1008年〕间）在日本开启了「物哀」的时代——「物哀」即见物而生悲哀之情——此后日本的小说中明显带有一种淡淡的悲伤！而「物哀」也成为日本一种全国性的民族意识，随着一代又一代的诗人、散文家、物语作者流传了下来……

***
#### ［中文］台灣教育部標點修正集
<p lang='zh-Hant-TW' style='font-family: "Biaodian Pro Sans CNS", "Helvetica Neue", Helvetica, Arial, "Han Heiti CNS", sans-serif'>《源氏物語》（成書在長保三年至寬弘五年〔西元1001年至1008年〕間）在日本開啟了「物哀」的時代——「物哀」即見物而生悲哀之情——此後日本的小說中明顯帶有一種淡淡的悲傷！而「物哀」也成為日本一種全國性的民族意識，隨着一代又一代的詩人、散文家、物語作者流傳了下來……

***
#### ［中文］中國國標標點修正集
<p lang='zh-Hans'>《源氏物语》（成书在长保三年至宽弘五年〔西元1001年至1008年〕间）在日本开启了“物哀”的时代——“物哀”即见物而生悲哀之情——此后日本的小说中明显带有一种淡淡的悲伤！而“物哀”也成为日本一种全国性的民族意识，随着一代又一代的诗人、散文家、物语作者流传了下来……

***
#### 日文標點修正集
<p lang='ja'>『西遊記』は、中国で16世紀の明の時代に大成した伝奇小説で——唐僧・三蔵法師が白馬・玉龍に乗って三神仙（神通力を持った仙人）、孫悟空、猪八戒、沙悟浄を供に従え、幾多の苦難を乗り越え天竺へ取経を目指す物語⋯⋯</p>
</div>

更詳盡的標點修正字體集列表及說明，請見使用手冊「[APIs・Sass·字體與字體集][api-zitiji]」；範例及測試，請見[程式測試頁·標點符號][test-bd]。

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
部分西文字體使用文本數字樣式的阿拉伯數字，然文本數字並不適合嚴格等寬的漢字排版。Mre模組提供「等高數字」與「文本數字」二種數字字體集，其下再區分無襯線及襯線二個基型分類。

<table id='numeral-font' style='min-width: 30em;'>
  <style scoped>
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

 中文漢字字體集 <!-- #zhongwen_hanzi_zitiji --> 
--------------
Mre模組按四大漢字字體基型「黑」「宋」「楷」「仿宋」編制，其下再區分「推薦字體」「繁體適用字體」「中國國標新字形字體」三種變體，足以適應各種需求。

<table id='hanzi-font'>
  <style scoped>
#hanzi-font thead th {
  width: 11em;
}
  </style>
  <thead>
    <th style='width: 4em;'>基型
    <th style='width: 8.5em;'>推薦字體
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
Mre模組提供二種注音符號字體——「注音黑體」及「注音楷體」。

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


 元素字體的指定 <!-- #yuansu_ziti_de_zhiding -->
--------------
在「漢字標準格式」中，不同的元素依據其功能、語意及「語言、文字變體、地區」等元信息，套用相應合適的字體樣式。

### 全域字體樣式 <!-- #yuansu_ziti_de_zhiding-quanyu_ziti_yangshi -->
全域字體樣式使用無襯線漢字標點、西文無襯線字體及漢字黑體。

### 計算機相關文本 <!-- #yuansu_ziti_de_zhiding-jisuanji_xiangguan_wenben -->
代碼`code`、輸入鍵`kbd`、計算機輸出示例`samp`及格式預處理`pre`等計算機相關文本元素，使用無襯線漢字標點、西文等寬字體及漢字黑體。

<div class='example'>

#### 輸入鍵元素
請使用<kbd>caps lock</kbd>鍵來切換大小寫。
</div>

### 變音文字與變數元素 <!-- #yuansu_ziti_de_zhiding-bianyinwenzi_yu_bianshu_yuansu -->
變音文字`i`與變數`var`元素使用襯線漢字標點、等高數字、西文襯線意大利體及漢字楷體。

<div class='example'>

#### 變數元素
設總增加人數為<var>x</var>，報名後棄賽人數為<var>y</var>…… 

***
#### 變音文字元素
<i>夢境中，他發現自己身着印有數字1926的上衣，左側手臂隱約傳來陣陣抽痛。</i>
</div>

#### 相關情境 <!-- yuansu_ziti_zhiding-bianyinwenzi_ji_bianshu_yuansu-xiangguan_qingjing -->
見「[文章下的區塊引用元素·變音文字與變數元素][article-blockquote-i-var]」一節。

[article-blockquote-i-var]: #butong_qingjing_xia_de_ziti-bianyinwenzi_yu_bianshu_yuansu

### 行間注元素 <!-- #yuansu_ziti_de_zhiding-hangjianzhu_yuansu -->
行間注`ruby`元素下的注音符號注文（國語注音符號及方言音符號）依據父元素的字體樣式，使用注音黑體（Zhuyin Heiti）或注音楷體（Zhuyin Kaiti），然「調號」為定位之由，強制使用注音楷體（Zhuyin Kaiti）；在`<ruby>`或`<rtc>`標記上套用類別`.romanization`者，注文`rt`元素預設使用陽入韻連字字體（Romanization Sans，僅包含<span style='font-family: "Romanization Sans"'>a̍e̍i̍o̍u̍</span>五個符號）及西文無襯線字體。

<div class='example'>

#### 注音符號
<p class='poem-like'><ruby class='mps'>
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
#### 台灣閩南語羅馬字拼音方案
<p class='poem-like'><ruby class='romanization'>
你
  <rt>Lí</rt>
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
</div>


 不同情境下的字體 <!-- #butong_qingjing_xia_de_ziti -->
---------------
### 文章下的重點元素 <!-- #butong_qingjing_xia_de_ziti-wenzhang_xia_de_zhongdian_yuansu -->
### 文章下的圖表元素 <!-- #butong_qingjing_xia_de_ziti-wenzhang_xia_de_tubiao_yuansu -->
### 文章下的區塊引用元素 <!-- #butong_qingjing_xia_de_ziti-wenzhang_xia_de_qukuaiyinyong_yuansu -->
#### 變音文字與變數元素 <!-- #butong_qingjing_xia_de_ziti-bianyinwenzi_yu_bianshu_yuansu -->
### 圖表下的區塊引用元素 <!-- #butong_qingjing_xia_de_ziti-tubiao_xia_de_qukuaiyinyong_yuansu -->


