
樣式標準化
========

Normalize.css
-------------
「漢字標準格式」使用了由Nicolas Gallagher及Jonathan Neal主導開發的Normalize.css來增進各瀏覽器間樣式的一致性。

Hyu
---
Hyu是本地化（locale）的樣式標準化模組，內建於「漢字標準格式」中。這個模組在Normalize.css的基礎上，提供了漢字地區的本地化樣式，*根據其語言屬性的語言、文字或地區，*配適相應而合理的元素樣式。

```html
lang="語言-文字-地區"
```

### 全域的字體排印樣式

各種漢字字體的行高不一，且漢字需要較西文鬆散的行距空間，故全域行高預設使用`1.3em`以求一致，並在瀏覽器及作業系統支援的前提下，啓用亞像素文字渲染。

### 縮進

#### 有序清單及無序清單
有序清單`ol`及無序清單`ul`元素包含二個漢字寬度（`2em`）的左間隙（`padding-left`）縮進，以求文字的高度對齊。

<div class="example">
後天免疫缺乏症候群的病程：

- 急性感染
- 臨床潛伏期
- 發病期
</div>

<div class="example">

[為什麼](http://www.zhihu.com/question/20274713)現代的印度音樂仍能保有一種強烈的、一聽就能辨別出來的風格，而中國音樂卻不是這樣？

<ol>
  <li><p>印度音樂是什麼？僅僅取所謂的印度古典音樂，南有卡那提克、北有印度斯坦，已經有極大差異，它們各自內部又因爲地域、族群、宗教等差異導致門派林立，對音樂的認識和演繹有很大不同。

  <li><p>我們都知道外國人喜歡開「亞洲人長得都一樣」的笑話，我們也覺得西洋人長得像。這點在對音樂的認識上也是，因爲不夠瞭解，感知才會被籠統、表面的印象所佔據。不記得講沒講過這個故事，曾經有個朋友發來一段音樂叫我聽，說一聽就是那種東歐的風情。我聽了一下告訴她，這是琉球／沖繩民樂。別笑話人家，這種錯誤誰都會有。

  <li><p>［……］
</ol>

——[經雷](http://www.zhihu.com/question/20274713/answer/14712749)
</div>

#### 圖表及區塊引用等元素
圖表`figure`、區塊引用`blockquote`等元素包含二個漢字寬度（`2em`）的左右邊界（`margin`）縮進，以求文字的高度對齊。

<div class="example">
<figure>

  > 唯有知識才能解決問題。

  <figcaption>面對記者的採訪，吳寶春如是說，話語中更顯出其從容自若的氣質。</figcaption>
</figure>
</div>

<div class="example">

> 「我是柏林人」是1963年6月26日美國總統約翰·甘迺迪在西柏林演講中的一句名言。當時正值冷戰，柏林牆已開始建造，西柏林被東德包圍。 這一部份演說內容及譯文如下：

>> <p lang="en">Two thousand years ago the proudest boast was <i lang="la">civis Romanus sum</i>. Today, in the world of freedom, the proudest boast is <i lang="de">‘Ich bin ein Berliner’</i>… All free men, wherever they may live, are citizens of Berlin, and, therefore, as a free man, I take pride in the words <i lang="de">‘Ich bin ein Berliner!’</i>

>> 兩千年前最自豪的句子是「<i lang="la">civis Romanus sum</i>」（我是羅馬公民）。今天，在自由世界，最自豪的句子是「<i lang="de">‘Ich bin ein Berliner’</i>」（我是柏林人）……所有自由人，無論生活在哪裡，都是柏林的公民。因此，身為自由人，我以「<i lang="de">‘Ich bin ein Berliner’</i>」感到自豪！

> 以德語說出「我是柏林人」這句子，是甘迺迪在最後才想到的。他走上舍嫩貝格市政廳（Rathaus Schöneberg）時，向翻譯員羅伯特·洛赫納請教這句子的德語說法，以小紙張標下讀音，並練習了幾次。

> <footer class="cite">——《維基百科·我是柏林人》</footer>

</div>

### 聯絡資訊元素

聯絡資訊`address`元素去除了西文常見的地址意大利體樣式。

<div class="example">

想瞭解更多關於我們的資訊，可以前往，

<address>
香港尖沙咀彌敦道105號  
九龍清真寺
</address>

</div>

```html
<p>想瞭解更多關於我們的資訊，可以前往，

<address>
香港尖沙咀彌敦道105號<br>
九龍清真寺
</address>
```

<div class='info note'>

**提示：**聯絡資訊元素用以標示該網頁或文章作者的聯絡資訊，而非用於標示任一地址。
</div>

### 格式預處理元素

格式預處理`pre`元素跟隨其原始代碼之格式，長文文本寬度大於容器元素仍不斷行，並啓用橫向捲軸。

<div class="example">

```javascript
void;!function(a,b){var c=b.documentElement,d,e;function D(a,d) {d=a*d/100+b.getElementById('main').textContent;return d;}return new D(20,5);}(window||this,window.document);
```
</div>

### 超連結

超連結`a`元素預設不使用底線。

### 強調與重點

<div class='info note important'>

**提示：**「強調」「重點」各表示二種相似卻有所不同的字體排印概念——前者用於凸顯語氣的加重、需要讀者多所留意之處；後者則表示段落甚或全文的重要概念或結論——請務必辨明二者的用法。
</div>

#### 強調

隷屬中文及日文語言屬性的強調`em`元素預設使用着重號；屬中、日文非漢字（如羅馬拼音）及其他語言的強調元素仍使用意大利體（斜體）。

中文着重號位字元下方，使用「●」（`U+25CF`）；日文着重號則位上方，使用「﹅」（`U+FE45`）。

<div class='info note'>

**提示：**強調元素的着重號修正包含樣式表及腳本的多重回退（fallback），然搭配腳本可有較佳且更為一致的效果。
</div>

<div class="example">

至今*關於古希臘遊吟詩人Ὅμηρος的資料很少*，所以對其生平有很多說法，但都無確鑿證據。

<p lang='ja'>アンネリース・マリー・フランク（ドイツ語：Annelies Marie Frank、1929年6月12日－1945年3月上旬）は、*『Annieの日記』の著者として知られるユダヤ系ドイツ人の少女である。*

有人通曉<em lang='zh-yue-Latn'>Sun Yat-sen</em>先生「天下為公」的思想嗎？
</div>

```html
<div class="example">
<p>至今<em>關於古希臘遊吟詩人Ὅμηρος的資料很少</em>，所以對其生平有很多說法，但都無確鑿證據。

<p lang='ja'>アンネリース・マリー・フランク（ドイツ語：Annelies Marie Frank、Annieアンネの日記』の著者として知られるユダヤ系ドイツ人の少女である。</em>

<p>有人通曉<em lang='zh-yue-Latn'>Sun Yat-sen</em>先生「天下為公」的思想嗎？
</div>
```

#### 重點

重點`strong`元素以**粗於父文本的字重來凸顯其重要性**。

<div class="example">

希望我們每一個人，都可以**為自己的人生負責、找尋並達成自己設定的目標，**才不枉為人。
</div>

```html
<p>希望我們每一個人，都可以<strong>為自己的人生負責、找尋並達成自己設定的目標，</strong>才不枉為人。
```

### 其他粗體文本

術語`dfn`及關鍵字`b`元素的樣式同[重點`strong`元素](#)。術語`dfn`僅在中文、日文環境中顯示為粗體，其餘語言則仍顯示為意大利體（斜體）。

### 來源及引用

Hyu模組移除了隷屬中文及日文語言屬性下，來源`cite`元素的意大利體（斜體）樣式；引用`q`元素則依語言及地區屬性採用相應的內外引號，以突顯引用文本的結構。

### 計算機相關文本

代碼`code`、輸入鍵`kbd`及計算機輸出示例`samp`等元素使用「等寬字體集、無襯線字體集」的字體回退順序，漢字得以使用較清晰的黑體顯示。

### 變音文字與變數

變音文字`i`及變數`var`元素，使用「漢字手寫體（楷體）、西文意大利體」的字體回退順序。

<div class="example">

> 「……我們知道的並不多。我們只知道在很遠的地方，越過許多山脈和河流，有一群矮小的生物居住在洞穴或是沙丘中。但沒有任何關於他們的傳說，<i>因為據說他們游手好閒，躲避人類的目光，可以在一瞬間消失，</i>而且他們還可以將嗓音偽裝成飛鳥的啁啾聲。不過，看來並不是這樣。」

> <footer class="cite">——J. R. R.·托爾金《魔戒之王·雙城奇謀》</footer>
</div>

```html
<blockquote>
<p>「……我們知道的並不多。我們只知道在很遠的地方，越過許多山脈和河流，有一群矮小的生物居住在洞穴或是沙丘中。但沒有任何關於他們的傳說，<i>因為據說他們游手好閒，躲避人類的目光，可以在一瞬間消失，</i>而且他們還可以將嗓音偽裝成飛鳥的啁啾聲。不過，看來並不是這樣。」</p>

<footer class="cite">——J. R. R.·托爾金魔戒之王·雙城奇謀</footer>
</blockquote>
```

#### 西文中的船名

<div class="example">

<i class='ship'>Tsimtsum</i> had been sunk for weeks by then.
</div>

```html
<i class='ship'>Tsimtsum</i> had been sunk for weeks by then.
```

在不支援手寫漢字字體的系統中（如多數行動裝置），「漢字標準格式」則自動改以雙灰底線表示。範例如下，

<div class="example mobile-alike no-kaiti">

此時我靈機一動，<i>如果我們在microwave內加上一層散熱片會如何？</i>也許幫助我們脫離這個窘境，說不準還能一舉拿下發明比賽的名次呢！
</div>

### 文字裝飾線

二大使用漢字作為書寫系統的語言——中文及日文——皆不使用空格分詞，因而在當前的網頁環境下，難以明確標示或辨明二相鄰的同種裝飾線文字。Hyu內建了樣式及腳本的「文字裝飾線」雙重修正，毋需插入空白即可得到視覺上的間隔效果，同時避免了樣式性的標記代碼。

#### 註記與增訂元素
預設的UA樣式中，註記`u`與增訂`ins`元素皆使用「底線」呈現，由於該底線會附着於漢字下方，影響易讀性，我們使用「底部邊框」（`border-bottom`）取代「裝飾底線」（`text-decoration`）。二個相鄰的註記或增訂元素效果如下，

<div class="example">

<u class="pn">英國</u><!--注意：中間毋需插入任何空白--><u class="pn">倫敦</u>是個世上少有、數一數二，且融合古典及現代的大城市。

<u>我們</u><ins datetime='2014-08-12'>有可能</ins>會去<u class='pn'>嘉義</u>。
</div>

```html
<p><u class="pn">英國</u><!--注意：中間毋需插入任何空白--><u class="pn">倫敦</u>是個世上少有、數一數二，且融合古典及現代的大城市。

<p><u>我們</u><!--注意：中間毋需插入任何空白--><ins datetime='2014-08-12'>有可能</ins>會去<u class='pn'>嘉義</u>。
```

#### 訛訊與刪訂元素
<div class="example">

太陽系有<s>九大行星</s><s>入</s>八大行星。

立法院常設有<del datetime='1992-0-0'>161</del><del datetime='1998-0-0'>225</del>113位議員。
</div>

```html
<p>太陽系有<s>九大行星</s><s>入</s>八大行星。

<p>立法院常設有<del datetime='1992-0-0'>161</del><del datetime='1998-0-0'>225</del>113位議員。
```

<div class="info note">

**提示：**在二相鄰的裝飾線元素間，可存在不限數量的註解、機會斷行`wbr`元素並仍保有間隔效果；惟其餘的隱藏元素（如`display: none`）將使二側的裝飾線元素失去相鄰關係，從而影響間隔效果。
</div>

### 行間注

行間注`ruby`包含了漢字標音（亦作漢字注音）及雙語對照二大功能，前者更可細分為「羅馬拼音」及「注音符號」。搭配腳本的Hyu模組完整支援行間注的各項需求，僅需加入相應的類別屬性（`class`）即可。

#### 基本行間注
基本行間注的「注文」形式位「基文」上方居中，適用雙語對照、羅馬拼音等。

<div class="example">
<ruby>WWW<rt>World Wide Web</rt></ruby>
</div>

```html
<ruby>WWW<rt>World Wide Web</rt></ruby>
```

#### 注音行間注
注音行間注的「注文」位「單個基文漢字」的右側，多用於標注漢字發音。現支援國語（普通話）注音符號及台灣方言音符號。

<div class="example">

<ruby class="reading zhuyin">那美麗的高塔竟在瞬間<!--
  -->化<rt>ㄏㄨㄚˋ</rt>
  作<rt>ㄗㄨㄛˋ</rt>
  齏<rt>ㄐㄧ</rt>
  粉<rt>ㄈㄣˇ</rt>，
  那曾令人<!--
  -->齰<rt>ㄗㄜˊ</rt>
  舌<rt>ㄕㄜˊ</rt>
  的<!--
  -->鬼<rt>ㄍㄨㄟˇ</rt>
  斧<rt>ㄈㄨˇ</rt>
  神<rt>ㄕㄣˊ</rt>
  工<rt>ㄍㄨㄥ</rt>
  只能長存在人們心中。
</ruby>
</div>

與各種字級語意元素並用，

<div class="example">

<ruby class="reading zhuyin">
  我<rt>ㄨㄛ˅</rt>
  的<rt>˙ㄉㄜ</rt>
  朋<rt>ㄆㄥˊ</rt>
  友<rt>ㄧㄡ˅</rt>
  啊<rt>˙ㄚ</rt>——請<em>要</em>知道
  ——「<strong><em><a href="https://www.moedict.tw/#柴米油鹽醬醋茶">柴<rt>ㄔㄞˊ</rt>
  米<rt>ㄇㄧ˅</rt>
  油<rt>ㄧㄡˊ</rt>
  鹽<rt>ㄧㄢˊ</rt>
  醬<rt>ㄐㄧㄤˋ</rt>
  醋<rt>ㄘㄨˋ</rt>
  茶<rt>ㄔㄚˊ</rt></a></em></strong>」，
  這些都是<rt>ㄕˋ</rt>
  我<rt>ㄨㄛˇ</rt>
  們<rt>˙ㄇㄣ</rt>
  日<rt>ㄖˋ</rt>
  常<rt>ㄔㄤˊ</rt>
  生<rt>ㄕㄥ</rt>
  活<rt>ㄏㄨㄛˊ</rt>
  <em>必<rt>ㄅㄧˋ</rt>
  備<rt>ㄅㄟˋ</rt></em>
  的<rt>˙ㄉㄜ</rt>
  <u>七<rt>ㄑㄧ</rt>
  樣<rt>ㄧㄤˋ</rt></u>
  東<rt>ㄉㄨㄥ</rt>
  西<rt>ㄒㄧ</rt>。
</ruby>
</div>

直接於`ruby`元素標籤上，加入`zhuyin`或`mps`類別即可顯示注音行間注，

```html
<ruby class="zhuyin">
    柴<rt>ㄔㄞˊ</rt>
    米<rt>ㄇㄧ˅</rt>
    油<rt>ㄧㄡˊ</rt>
    鹽<rt>ㄧㄢˊ</rt>
    醬<rt>ㄐㄧㄤˋ</rt>
    醋<rt>ㄘㄨˋ</rt>
    茶<rt>ㄔㄚˊ</rt>
</ruby>
```

#### 複合式行間注
複合式行間注可為一段基文同時標注雙行注文，以更精煉的排版空間顯示更多資訊。

<div class="example">

<ruby class="complex">
  <rb>紐</rb><rb>約</rb><rb>市</rb>

  <rtc class="reading pn name">
    <rt rbspan="3">New York City</rt>
  </rtc>

  <rtc class="reading romanization pinyin">
    <rt rbspan="2">Niǔyuē</rt>
    <rt>Shì</rt>
  </rtc>
</ruby>
</div>

套用類別`complex`，並使用「ruby container」代碼格式，

```html
<ruby class="complex">
  <rb>紐</rb><rb>約</rb><rb>市</rb>

  <rtc>
    <rt rbspan="3">New York City</rt>
  </rtc>

  <rtc>
    <rt rbspan="2">Niǔyuē</rt>
    <rt>Shì</rt>
  </rtc>
</ruby>
```

#### 拼音－注音共同標注
拼音－注音共同標注屬於複合式行間注的特殊情況，可在同一段文字中同時標注拼音與注音。

<blockquote class='example poem-like'>

<ruby lang="zh-nan-Hant" class="rightangle">
  <rb>我<rb>有<rb>一<rb>个<rb>朋<rb>友</rb>，<rb>伊<rb>真<rb>有<rb>志<rb>氣</rb>，

  <rtc class="reading romanization">
    <rt>guá
    <rt>ū
    <rt rbspan="2">tsi̍t ê
    <rt rbspan="2">pîng-iú
    <rt>i
    <rt rbspan="2">tsin-ū
    <rt rbspan="2">tsì-khì
    <rt>tsū
    <rt rbspan="2">sè-hàn
    <rt>tō
    <rt rbspan="2">li̍p-tsì
    <rt>kóng
    <rt>beh
    <rt rbspan="2">siá-kua
    <rt rbspan="2">tshiùnn-kua
    <rt rbspan="2">thàn-tsînn
  </rtc>

  <rtc class="reading zhuyin">
    <rt>ㆣㄨㄚˋ
    <rt>ㄨ˫
    <rt>ㄐㄧㆵ̍
    <rt>ㆤˊ
    <rt>ㄅㄧㄥˊ
    <rt>ㄧㄨˋ
    <rt>ㄧ
    <rt>ㄐㄧㄣ
    <rt>ㄨ˫
    <rt>ㄐㄧ˪
    <rt>ㄎㄧ˪
</ruby><br>
<ruby class="rightangle">
  <rb>自<rb>細<rb>漢<rb>就<rb>立<rb>志<rb>講<rb>欲<rb>寫<rb>歌</rb>、<rb>唱<rb>歌<rb>趁<rb>錢</rb>，

  <rtc class="reading romanization">
    <rt>tsū
    <rt rbspan="2">sè-hàn
    <rt>tō
    <rt rbspan="2">li̍p-tsì
    <rt>kóng
    <rt>beh
    <rt rbspan="2">siá-kua
    <rt rbspan="2">tshiùnn-kua
    <rt rbspan="2">thàn-tsînn
  </rtc>

  <rtc class="reading zhuyin">
    <rt>ㄗㄨ˫
    <rt>ㄙㆤ˪
    <rt>ㄏㄢ˪
    <rt>ㄉㄜ˫
    <rt>ㄌㄧㆴ̍
    <rt>ㄐㄧ˪
    <rt>ㄍㆲˋ
    <rt>ㆠㆤㆷ
    <rt>ㄒㄧㄚˋ
    <rt>ㄍㄨㄚ
    <rt>ㄑㄧㆫ˪
    <rt>ㄍㄨㄚ
    <rt>ㄊㄢ˪
    <rt>ㄐㆪˊ
  </rtc>
</ruby><br>
<ruby class="rightangle">
  <rb>伊<rb>逐<rb>工<rb>攏<rb>咧<rb>痟<rb>電<rb>影</rb>，<rb>聽<rb>阿<rb>啄<rb>仔<rb>的<rb>CD。

  <rtc class="reading romanization">
    <rt>i
    <rt rbspan="2">ta̍k-kang
    <rt rbspan="2">lóng-teh
    <rt>siáu
    <rt rbspan="2">tiān-iánn
    <rt>thiann
    <rt rbspan="2">a-tok-á
    <rt rbspan="2">ê
  </rtc>

  <rtc class="reading zhuyin">
    <rt>ㄧ
    <rt>ㄉㄚㆶ̍
    <rt>ㄍㄤ
    <rt>ㄌㆲˋ
    <rt>ㄉㆤㆷ
    <rt>ㄒㄧㄠˋ
    <rt>ㄉㄧㄢ˫
    <rt>ㄧㆩˋ
    <rt>ㄊㄧㆩ
    <rt>ㄚ
    <rt>ㄉㆦㆶ
    <rt>ㄚˋ
    <rt>ㆤˊ
  </rtc>
</ruby>

<footer class="cite">——朱約信〈歡迎來唱我的歌〉</footer>
</blockquote>

在`rtc`元素標籤上，加入相應的拼音`romanization`或注音`zhuyin`類別，並使用「ruby container」代碼格式，

```html
<ruby lang="zh-nan-Hant" class="rightangle">
  <rb>我<rb>有<rb>一<rb>个<rb>朋<rb>友</rb>，<rb>伊<rb>真<rb>有<rb>志<rb>氣</rb>，

  <rtc class="romanization">
    <rt>guá
    <rt>ū
    <rt rbspan="2">tsi̍t-ê
    <rt rbspan="2">pîng-iú
    <rt>i
    <rt rbspan="2">tsin-ū
    <rt rbspan="2">tsì-khì
    <rt>tsū
    <rt rbspan="2">sè-hàn
    <rt>tō
    <rt rbspan="2">li̍p-tsì
    <rt>kóng
    <rt>beh
    <rt rbspan="2">siá-kua
    <rt rbspan="2">tshiùnn-kua
    <rt rbspan="2">thàn-tsînn
  </rtc>

  <rtc class="zhuyin">
    <rt>ㆣㄨㄚˋ
    <rt>ㄨ˫
    <rt>ㄐㄧㆵ̍
    <rt>ㆤˊ
    <rt>ㄅㄧㄥˊ
    <rt>ㄧㄨˋ
    <rt>ㄧ
    <rt>ㄐㄧㄣ
    <rt>ㄨ˫
    <rt>ㄐㄧ˪
    <rt>ㄎㄧ˪
</ruby>
```
