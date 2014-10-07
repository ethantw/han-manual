
樣式標準化
========

概述 <!-- #gaishu -->
-------------
「漢字標準格式」使用由Nicolas Gallagher及Jonathan Neal主導開發的[Normalize.css]來增進各瀏覽器間樣式的一致性，並以此框架為基礎，延伸了專為各漢字語言及地區開發的本地樣式標準化模組——Hyu。下文將詳細介紹其功能。

<div class="info note">

**提示：**樣式標準化着重於網頁、元素的初始樣式修正及標準化，*不包含*各種元素間的使用情境樣式或單一指定的字體。
</div>

### Normalize.css <!-- #normalize-css -->
參考其作者編寫的[說明文件][about-normalize]<small>（英），</small>及Oli Studholme對[一般CSS reset與Normalize.css的比較][reset-or-normalize]<small>（英）</small>來瞭解更多資訊。

[Normalize.css]: http://necolas.github.io/normalize.css/
[about-normalize]: http://nicolasgallagher.com/about-normalize-css/
[reset-or-normalize]: https://the-pastry-box-project.net/oli-studholme/2013-june-3

### Hyu <!-- #hyu -->
Hyu是本地化（locale）的樣式標準化模組，內建於「漢字標準格式」中。這個模組在[Normalize.css]的基礎上，提供了漢字地區的本地化樣式，*根據元素語言屬性的語言、文字變體或地區等元信息，*配適相應而合理的樣式。

```html
<* lang="[巨集]-[語言]-[文字及變體]-[地區]">
```

## 全域字體樣式 <!-- #quanyu_ziti_yangshi -->
各種漢字字體的行高不一，且漢字需要較西文鬆散的行距空間，故全域行高預設使用`1.3em`以求一致，並在瀏覽器及作業系統支援的前提下，啓用亞像素文字渲染。

## 縮進 <!-- #suojin -->
### 有序與無序清單 <!-- #suojin-youxu_yu_wuxu_qingdan -->
有序清單`ol`及無序清單`ul`元素包含*二個漢字*寬度（`2em`）的左間隙（`padding-left`）縮進，以求文字的高度對齊。

<div class="example">

#### 無序清單

後天免疫缺乏症候群的病程：
- 急性感染
- 臨床潛伏期
- 發病期

***
#### 有序清單
[為什麼](http://www.zhihu.com/question/20274713)現代的印度音樂仍能保有一種強烈的、一聽就能辨別出來的風格，而中國音樂卻不是這樣？

1. 印度音樂是什麼？僅僅取所謂的印度古典音樂，南有卡那提克、北有印度斯坦，已經有極大差異，它們各自內部又因爲地域、族群、宗教等差異導致門派林立，對音樂的認識和演繹有很大不同。

2. 我們都知道外國人喜歡開「亞洲人長得都一樣」的笑話，我們也覺得西洋人長得像。這點在對音樂的認識上也是，因爲不夠瞭解，感知才會被籠統、表面的印象所佔據。不記得講沒講過這個故事，曾經有個朋友發來一段音樂叫我聽，說一聽就是那種東歐的風情。我聽了一下告訴她，這是琉球／沖繩民樂。別笑話人家，這種錯誤誰都會有。

3. ［……］

<footer class="cite">

——[經雷](http://www.zhihu.com/question/20274713/answer/14712749)
</footer>
</div>

### 圖表與區塊引用元素 <!-- #suojin-tubiao_yu_qukuaiyinyong_yuansu -->
圖表`figure`、區塊引用`blockquote`等元素包含*二個漢字*寬度（`2em`）的左右邊界（`margin`）縮進，以求文字的高度對齊。

<div class="example no-interfere">

#### 圖表元素
<figure>

  > 唯有知識才能解決問題。

  <figcaption>面對記者的採訪，吳寶春如是說，話語更顯其從容自若的氣質。</figcaption>
</figure>
</div>

```html
<figure>
  <blockquote>
    <p>唯有知識才能解決問題。
  </blockquote>
  <figcaption>面對記者的採訪，吳寶春如是說，話語更顯其從容自若的氣質。</figcaption>
</figure>
```

<div class="example no-interfere">

#### 區塊引用元素

「我是柏林人」是1963年6月26日美國總統約翰·甘迺迪在西柏林演講中的一句名言。當時正值冷戰，柏林牆已開始建造，西柏林被東德包圍。 這一部份演說內容及譯文如下：

> <p lang="en">Two thousand years ago the proudest boast was <i lang="la">civis Romanus sum</i>. Today, in the world of freedom, the proudest boast is <i lang="de">‘Ich bin ein Berliner’</i>… All free men, wherever they may live, are citizens of Berlin, and, therefore, as a free man, I take pride in the words <i lang="de">‘Ich bin ein Berliner!’</i>
>
> 兩千年前最自豪的句子是「<i lang="la">civis Romanus sum</i>」（我是羅馬公民）。今天，在自由世界，最自豪的句子是「<i lang="de">Ich bin ein Berliner</i>」（我是柏林人）……所有自由人，無論生活在哪裡，都是柏林的公民。因此，身為自由人，我以「<i lang="de">Ich bin ein Berliner</i>」感到自豪！

以德語說出「我是柏林人」這句子，是甘迺迪在最後才想到的。他走上舍嫩貝格市政廳（Rathaus Schöneberg）時，向翻譯員羅伯特·洛赫納請教這句子的德語說法，以小紙張標下讀音，並練習了幾次。

<footer class="cite">——《維基百科·我是柏林人》</footer>

</div>

<div class="info flag related">

#### 不屬於Hyu模組的相關情境說明
在不同情境下，圖表、區塊元素有[不同的縮進及字體樣式設定](.)，符合既成的閱讀習慣、便於同正文區隔。這些功能由Mre文字設計模組及「漢字標準格式」的進階排版功能提供。
</div>

## 聯絡資訊元素 <!-- #lianluozixun_yuansu -->
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

<div class="info note">

**提示：**聯絡資訊元素用以標示網頁或文章作者的聯絡資訊，並不適用於所有的地址文本。
</div>

## 格式預處理元素 <!-- #geshiyuchuli_yuansu -->
格式預處理`pre`元素跟隨其原始代碼之格式，長文文本寬度大於其容器時仍不斷行，並啓用橫向捲軸。

<div class='example no-interfere'>

這是一段正常的段落文本。

<pre>void !function(a,b){var c=b.documentElement,d,e;function D(a,d) {d=a*d/100+b.getElementById("main").textContent;return d;}return new D(20,5);}(window||this,window.document);
</pre>

上方是一個格式預處理`pre`元素。
</div>

## 超連結元素 <!-- #chaolianjie_yuansu -->
超連結`a`元素預設不使用底線。

## 強調與重點 <!-- #qiangdiao_yu_zhongdian -->
藉由差異於父文本的文字樣式，可以突顯警示或重要性，達成強調或重點標示的需求，着重號及粗體皆為此目的的排版手段之一。

<div class="info note important">

**提示：**「強調」「重點」分別表示二種形而相似、概念卻有所不同的排版概念——前者用於凸顯語氣的加重、需要讀者多所留意之處；後者則表示段落甚或全文的重要概念或結論——請務必辨明二者的用法。
</div>

### 強調 <!-- #qiangdiao_yu_zhongdian-qiangdiao -->
隷屬中文及日文語言屬性的強調`em`元素預設使用着重號；屬中、日文非漢字（如羅馬拼音）及其他語言的強調元素仍使用意大利體（斜體）。

中文着重號位字元下方，使用「●」（`U+25CF`）；日文着重號則位上方，使用「﹅」（`U+FE45`）。

<div class="info note">

**提示：**強調元素的着重號修正包含樣式表及腳本的多重回退（fallback），然搭配腳本可有較佳且更為一致的效果。
</div>

<div class="example">

### 中文的着重號形式
至今*關於古希臘遊吟詩人Ὅμηρος的資料很少*，所以對其生平有很多說法，但都無確鑿證據。
</div>

```html
<p>至今<em>關於古希臘遊吟詩人Ὅμηρος的資料很少</em>，所以對其生平有很多說法，但都無確鑿證據。
```
<div class="example">

### 日文的着重號形式
<p lang="ja">アンネリース・マリー・フランク（ドイツ語：Annelies Marie Frank、1929年6月12日－1945年3月上旬）は、<em>『Annieの日記』の著者として知られるユダヤ系ドイツ人の少女である。</em></p>
</div>

```html
<p [lang="ja"]>アンネリース・マリー・フランク（ドイツ語：Annelies Marie Frank、Annieアンネの日記』の著者として知られるユダヤ系ドイツ人の少女である。</em>
```
<div class="example">

### 西文或拼音的強調形式
「天下為公」是<em lang="yue-Latn">Sun Yat-sen</em>先生有名的思想理論之一。
</div>

```html
<p>「天下為公」是<em lang="yue-Latn">Sun Yat-sen</em>先生有名的思想理論之一。
```

### 重點 <!-- #qiangdiao_yu_zhongdian-zhongdian -->
重點`strong`元素以粗於父文本的字重來凸顯其重要性。

<div class="example no-interfere">

希望我們每一個人，都可以**為自己的人生負責、找尋並達成自己設定的目標，**才不枉為人。
</div>

```html
<p>希望我們每一個人，都可以<strong>為自己的人生負責、找尋並達成自己設定的目標，</strong>才不枉為人。
```

## 其他粗體文本 <!-- #qita_cuti_wenben -->
術語`dfn`及關鍵字`b`元素的樣式同[重點`strong`元素][sec-strong]，以粗於父文本的字重來凸顯其重要性。術語`dfn`元素僅在中文、日文環境中顯示為粗體，在其他語言中則跟隨瀏覽器UA樣式，顯示為意大利體（斜體）。

[sec-strong]: #qiangdiao_yu_zhongdian-zhongdian

<div class="example">

<dfn>火龍果</dfn>又稱紅龍果、龍珠果，是仙人掌科三角柱屬（<i lang="la">Hylocereus</i>）或蛇鞭柱屬（<i lang="la">Selenicereus</i>）植物果實，呈橢圓形，直徑約10公分，外觀為紅色或黃色，有綠色圓角三角形的葉狀體，白色、紅色或黃色果肉，具有黑色種子的水果。

***
<p lang="en">A <dfn>pitaya</dfn> or <dfn>pitahaya</dfn> is the fruit of several cactus species. ‘Pitaya’ usually refers to fruit of the genus <i lang="la">Selenicereus</i>, while ‘Pitahaya’ always refers to fruit of the genus <i lang="la">Hylocereus</i>.
</div>

```html
<p>
  <dfn>火龍果</dfn>又稱紅龍果、龍珠果，是仙人掌科三角柱屬（<i lang="la">Hylocereus</i>）或蛇鞭柱屬（<i lang="la">Selenicereus</i>）植物果實，呈橢圓形，直徑約10公分，外觀為紅色或黃色，有綠色圓角三角形的葉狀體，白色、紅色或黃色果肉，具有黑色種子的水果。

<p lang="en">
  A <dfn>pitaya</dfn> or <dfn>pitahaya</dfn> is the fruit of several cactus species. ‘Pitaya’ usually refers to fruit of the genus <i lang="la">Selenicereus</i>, while ‘Pitahaya’ always refers to fruit of the genus <i lang="la">Hylocereus</i>.
```

## 來源與引用元素 <!-- #laiyuan_yu_yinyong_yuansu -->
Hyu模組移除了隷屬中文及日文語言屬性下，來源`cite`元素的意大利體（斜體）樣式；引用`q`元素則依語言及地區屬性採用相應的內外引號，以突顯引用文本的結構。

### 來源元素
<div class="example">

《<cite>漢語語音學</cite>》探討了諸多同「漢語語音學」相關的學術議題，值得喜歡語言的同好們一讀。

***
<p lang='en'><cite>Webster Dictionary</cite> defines ‘marriage’ as…
</div>

```html
<p>
  <cite>《漢語語音學》</cite>探討了諸多同「漢語語音學」相關的學術議題，值得喜歡語言的同好們一讀。

<p lang='en'>
  <cite>Webster Dictionary</cite> defines ‘marriage’ as…
```

### 引用元素
<div class="example">

#### 中文的引號形式

那個清晨漫步在<u class="pn">高雄</u><u class="pn">澄清湖</u>湖畔，忽見<u class="pn">余光中</u>從旁擦身而過，對我吟詩：<q>顯赫的是太陽的金輦／絢爛的是雲旗和霞旌／東經，西經，勾勒的行程／南緯，北緯，架設的驛站／等待絡繹繽紛的隨扈／簇擁著春天的主人……</q>

***
<p lang='zh-Hans'>陈丹青曾在其作品《纽约琐记》中这么评论，<q>文艺复兴的重头作品不必在美国找。全美大概仅得一枚芬奇肖像，供在华盛顿国家美术馆，用丝绒绳子拦着。</q>
</div>

```html
<p [lang='zh-Hant']>
  那個清晨漫步在<u class="pn">高雄</u><u class="pn">澄清湖</u>湖畔，忽見<u class="pn">余光中</u>從旁擦身而過，對我吟詩：<q>顯赫的是太陽的金輦／絢爛的是雲旗和霞旌／東經，西經，勾勒的行程／南緯，北緯，架設的驛站／等待絡繹繽紛的隨扈／簇擁著春天的主人……</q>

<p [lang='zh-Hans']>
  陈丹青曾在其作品《纽约琐记》中这么评论，<q>文艺复兴的重头作品不必在美国找。全美大概仅得一枚芬奇肖像，供在华盛顿国家美术馆，用丝绒绳子拦着。</q>
```

<div class="example">

#### 英文的引號形式
<p lang='en'>Albert Einstein once said: <q>Try not to become a man of success, but rather try to become a man of value.</q>

***
<p lang='en-GB'><q>Friendship is certainly the finest balm for the pangs of disappointed love,</q> Jane Austen always speaks to my heart.
</div>

```html
<p lang='en'>
  Albert Einstein once said: <q>Try not to become a man of success, but rather try to become a man of value.</q>

<p lang='en-GB'>
  <q>Friendship is certainly the finest balm for the pangs of disappointed love,</q> Jane Austen always speaks to my heart.
```

<div class="info tip note">

#### 排版小技巧
行內引用若是詩篇等多行文字文本時，可以使用斜線「<span>／</span>」來表示原文的斷行。
</div>

## 計算機相關文本 <!-- #jisuanji_xiangguan_wenben -->
計算機相關文本——如代碼`code`、輸入鍵`kbd`及計算機輸出示例`samp`等元素——使用「等寬字體集、無襯線字體集」的字體回退順序，漢字得以使用較清晰的黑體顯示。

<div class="example no-interfere">

#### 代碼
這是一段包含了`const CODE = "代碼"`的段落`p`元素。
</div>

```html
<p>這是一段包含了<code>const CODE = "代碼"</code>的段落<code>p</code>元素。
```

<div class="example no-interfere">

#### 輸入鍵
‘<kbd>command</kbd> + <kbd>P</kbd> makes it print, print, print,’ sang Phil.
</div>

```html
<p>‘<kbd>command</kbd> + <kbd>P</kbd> makes it print, print, print,’ sang Phil.
```

<div class="example no-interfere">

#### 計算機輸出示例
火龍果電腦居然跟我說：<samp>不能在brainstrom接口上插入芝士</samp>。我壓根兒看不懂這是什麼意思。
</div>

```html
<p>火龍果電腦居然跟我說：<samp>不能在brainstrom接口上插入芝士</samp>。我壓根兒看不懂這是什麼意思。
```

## 變音文字與變數元素 <!-- #bianyinwenzi_yu_bianshu_yuansu -->
變音文字`i`及變數`var`元素，使用「漢字手寫體（楷體）、西文襯線意大利體」的字體回退順序。

<div class="example">

此時我靈機一動，<i>如果我們在microwave內加上一層散熱片會如何？</i>也許幫助我們脫離這個窘境，說不準還能一舉拿下發明比賽的名次呢！
</div>

```html
<p>此時我靈機一動，<i>如果我們在microwave內加上一層散熱片會如何？</i>也許幫助我們脫離這個窘境，說不準還能一舉拿下發明比賽的名次呢！
```

<div class="info flag related">

#### 不屬於Hyu模組的相關情境說明
在文章的區塊引用元素下，變音文字及變數元素則使用「漢字黑體、西文無襯線意大利體」的字體回退順序。**這是屬於[Mre模組下的情境設計](.)，用以同文章區塊引用元素的字體樣式區隔。**

在不支援手寫漢字字體的系統中（如多數行動裝置），[變音文字、變數則改以雙灰底線表示](.)。**此為漢字標準格式的進階腳本功能**。
</div>

### 船名 <!-- #bianyinwenzi_yu_bianshu_yuansu-chuanming -->
西文排版中，船名多使用意大利體表示。

<div class="example" lang="en">

<i class="ship">Tsimtsum</i> had been sunk for weeks by then.
</div>

```html
<p lang="en"><i class="ship">Tsimtsum</i> had been sunk for weeks by then.
```

## 文字裝飾線 <!-- #wenzi_zhuangshixian -->
二大使用漢字作為書寫系統的語言——中文及日文——皆不使用空格分詞，因而在當前的網頁環境下，難以明確標示或辨明二相鄰的同種裝飾線文字。Hyu內建了樣式及腳本的「文字裝飾線」雙重修正，毋需插入空白即可得到視覺上的間隔效果，同時避免了樣式性的標記。

<div class="info note">

**提示：**相鄰文字裝飾線修正包含樣式表及腳本的多重回退（fallback），然搭配腳本可有較佳且更為一致的效果。

**提示二：**在二相鄰的裝飾線元素間，可存在不限數量的註解、機會斷行`wbr`元素並仍保有間隔效果；惟其餘受隱藏的元素（如容器顯示樣式設定為`display: none`者）將使二側的裝飾線元素失去相鄰關係，從而影響間隔效果。
</div>

### 註記與增訂元素 <!-- #wenzi_zhuangshixian-zhuji_yu_zhengding_yuansu -->
預設的UA樣式中，註記`u`與增訂`ins`元素皆使用「底線」呈現，由於該底線會附着於漢字下方，影響易讀性，我們使用「底部邊框」（`border-bottom`）取代「裝飾底線」（`text-decoration`）。二個相鄰的註記或增訂元素效果如下，

<div class="example">

<u class="pn">英國</u><!--注意：中間毋需插入任何空白--><u class="pn">倫敦</u>是個世上少有、數一數二，且融合古典及現代的大城市。
</div>

```html
<p><u class="pn">英國</u><!--注意：中間毋需插入任何空白--><u class="pn">倫敦</u>是個世上少有、數一數二，且融合古典及現代的大城市。
```

<div class="example">

#### 更完整的辨義功能
<u class="pn">歐洲大陸</u>眾多的西文當中，我最喜歡的語言是隷屬於<u class="pn">羅曼</u>語族的<u class="pn">西</u>文。

***
「先看完電影，」他說，「<u class="pn">阿呆</u>舉辦的派對我們晚點<u class="typo">在</u>去。」
</div>

```html
<p><u class="pn">歐洲大陸</u>眾多的<u class="pn">西</u>文當中，我最喜歡的語言是隷屬於<u class="pn">羅曼</u>語族的<u class="pn">西</u>文。

<p>「先看完電影，」他說，「<u class="pn">阿呆</u>舉辦的派對我們晚點<u class="typo">在</u>去。」
```

<div class="info note">

**提示：**「註記`u`元素」雖有明確的樣式，用於避免文字上的爭議，但並不改變文本的本來意義，常有表示專名（中文專名號）或原、引文的拼寫錯誤等用途；而「增訂`ins`元素」表示相應文本在版本修改、增訂間的記錄。
</div>

### 訛訊與刪訂元素 <!-- #wenzi_zhuangshixian-exun_yu_shanding_yuansu -->
二個相鄰的訛訊或刪訂元素效果如下，

<div class="example">

太陽系有<s>九大行星</s><s>入</s>八大行星。
</div>

```html
<p>太陽系有<s>九大行星</s><s>入</s>八大行星。
```

<div class="example">

立法院常設有<del datetime="1992-0-0">一六一</del><del datetime="1998-0-0">二二五</del>一一三位議員。
</div>

```html
<p>立法院常設有<del datetime="1992-0-0">一六一</del><del datetime="1998-0-0">二二五</del>一一三位議員。
```

<div class="info note">

**提示：**「訛訊`s`元素」用於標明錯誤或不再正確的資訊；而「刪訂`del`元素」表示相應文本在版本修改、刪訂間的記錄。
</div>

## 行間注元素 <!-- #hangjianzhu_yuansu -->
「行間注」包含漢字標音（亦作漢字注音）及雙語對照二大功能，前者更可細分為「羅馬拼音」及「注音符號」。搭配腳本的Hyu模組完整支援行間注的所有功能，按需求加入相應的類別屬性（`class`）即可。

<div class='info note important'>

**注意：**除基本行間注外，包含注音、複合式行間注及拼－注音共同標注功能皆需配合JavaScript腳本方可正常顯示。
</div>

### 基本行間注 <!-- #hangjianzhu_yuansu-jiben_hangjianzhu -->
基本行間注的形式係「注文」位「基文」上方居中，適用雙語對照、羅馬拼音等。

<div class="example">

#### 雙語對照

<ruby>萬維網<rt>World Wide Web</rt></ruby>
</div>

```html
<ruby>萬維網<rt>World Wide Web</rt></ruby>
```

<div class="example">

#### 羅馬拼音

<ruby class="reading romanization annotation">
  你<rt>nĭ</rt>瞧<rt>qiáo</rt>！<rt></rt>
  一彎<rt>yìwān</rt>流水<rt>liúshuĭ</rt>架<rt>jià</rt>小橋<rt>xiăoqiáo</rt>，<rt></rt>
  兩岸<rt>liăng'àn</rt>楊柳<rt>yángliŭ</rt>隨風<rt>suífēng</rt>飄<rt>piāo</rt>。
</ruby>
</div>

```html
<p>
  <ruby>
    你<rt>nĭ</rt>瞧<rt>qiáo</rt>！<rt></rt>
    一彎<rt>yìwān</rt>流水<rt>liúshuĭ</rt>架<rt>jià</rt>小橋<rt>xiăoqiáo</rt>
    …
  </ruby>
</p>
```

### 注音行間注 <!-- #hangjianzhu_yuansu-zhuyin_hangjianzhu -->
注音行間注的「注文」位「單個基文漢字」的右側，用於標注漢字發音。現支援國語（普通話）注音符號及台灣方言音符號。

<div class="example">

那美麗的高塔竟在瞬間<ruby class="reading zhuyin"><!--
  -->化<rt>ㄏㄨㄚˋ</rt>
  作<rt>ㄗㄨㄛˋ</rt>
  齏<rt>ㄐㄧ</rt>
  粉<rt>ㄈㄣˇ</rt>，</ruby>那曾令人<ruby class="reading zhuyin"><!--
  -->齰<rt>ㄗㄜˊ</rt>
  舌<rt>ㄕㄜˊ</rt>
  的<rt>˙ㄉㄜ</rt>
  鬼<rt>ㄍㄨㄟˇ</rt>
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
  啊<rt>˙ㄚ</rt></ruby>——請<em>要</em>知道
  ——「<strong><em><a href="https://www.moedict.tw/#柴米油鹽醬醋茶">
  <ruby class="reading zhuyin">
  柴<rt>ㄔㄞˊ</rt>
  米<rt>ㄇㄧ˅</rt>
  油<rt>ㄧㄡˊ</rt>
  鹽<rt>ㄧㄢˊ</rt>
  醬<rt>ㄐㄧㄤˋ</rt>
  醋<rt>ㄘㄨˋ</rt>
  茶<rt>ㄔㄚˊ</rt></ruby></a></em></strong>」，
  <ruby class="reading zhuyin">
  這些都是<rt></rt>
  我<rt>ㄨㄛˇ</rt>
  們<rt>˙ㄇㄣ</rt>
  日<rt>ㄖˋ</rt>
  常<rt>ㄔㄤˊ</rt>
  生<rt>ㄕㄥ</rt>
  活<rt>ㄏㄨㄛˊ</rt></ruby>
  <em><ruby class="reading zhuyin">必<rt>ㄅㄧˋ</rt>
  備<rt>ㄅㄟˋ</rt></ruby></em>
  <ruby class="reading zhuyin">的<rt>˙ㄉㄜ</rt></ruby>
  <u><ruby class="reading zhuyin">七<rt>ㄑㄧ</rt>
  樣<rt>ㄧㄤˋ</rt></ruby></u>
  <ruby class="reading zhuyin">東<rt>ㄉㄨㄥ</rt>
  西<rt>ㄒㄧ</rt></ruby>。
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

### 複合式行間注 <!-- #hangjianzhu_yuansu-fuheshi_hangjianzhu -->
複合式行間注可為一段基文同時標注雙注文，以更精煉的空間顯示更多資訊。

<div class="example">

朋友們，歡迎來到<ruby class="complex">
  <rb>紐約</rb><rb>市</rb>
  <rtc lang="en" class="reading pn name">
    <rt rbspan="2">New York City</rt>
  </rtc>
  <rtc lang="cmn-Latn" class="reading romanization pinyin">
    <rt>Niǔyuē</rt>
    <rt>Shì</rt>
  </rtc>
</ruby>！
</div>

```html
<ruby class="complex">
  <rb>紐約</rb><rb>市</rb>

  <rtc lang="en">
    <rt rbspan="2">New York City</rt>
  </rtc>

  <rtc lang="cmn-Latn">
    <rt>Niǔyuē</rt>
    <rt>Shì</rt>
  </rtc>
</ruby>
```

如上方代碼所示，使用複合式行間注需為`ruby`元素標籤套用類別`complex`，並依「ruby text container」語法格式書寫。

### 拼音－注音共同標注 <!-- #hangjianzhu_yuansu-pinyin-zhuyin_gongtong_biaozhu -->
拼音－注音共同標注屬於複合式行間注的特殊情況，可同時為一段文本標注拼音與注音。

<blockquote lang="zh-nan-Hant" class="example poem-like">

<ruby class="rightangle">
  <rb>我</rb><rb>有</rb><rb>一</rb><rb>个</rb><rb>朋</rb><rb>友</rb>，<rb>伊</rb><rb>真</rb><rb>有</rb><rb>志</rb><rb>氣</rb>，
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
    <rt>ㆣㄨㄚˋ</rt>
    <rt>ㄨ˫</rt>
    <rt>ㄐㄧㆵ̍</rt>
    <rt>ㆤˊ</rt>
    <rt>ㄅㄧㄥˊ</rt>
    <rt>ㄧㄨˋ</rt>
    <rt>ㄧ</rt>
    <rt>ㄐㄧㄣ</rt>
    <rt>ㄨ˫</rt>
    <rt>ㄐㄧ˪</rt>
    <rt>ㄎㄧ˪</rt>
</ruby><br>
<ruby class="rightangle">
  <rb>自</rb><rb>細</rb><rb>漢</rb><rb>就</rb><rb>立</rb><rb>志</rb><rb>講</rb><rb>欲</rb><rb>寫</rb><rb>歌</rb>、<rb>唱</rb><rb>歌</rb><rb>趁</rb><rb>錢</rb>，
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
    <rt>ㄗㄨ˫</rt>
    <rt>ㄙㆤ˪</rt>
    <rt>ㄏㄢ˪</rt>
    <rt>ㄉㄜ˫</rt>
    <rt>ㄌㄧㆴ̍</rt>
    <rt>ㄐㄧ˪</rt>
    <rt>ㄍㆲˋ</rt>
    <rt>ㆠㆤㆷ</rt>
    <rt>ㄒㄧㄚˋ</rt>
    <rt>ㄍㄨㄚ</rt>
    <rt>ㄑㄧㆫ˪</rt>
    <rt>ㄍㄨㄚ</rt>
    <rt>ㄊㄢ˪</rt>
    <rt>ㄐㆪˊ</rt>
  </rtc>
</ruby><br>
<ruby class="rightangle">
  <rb>伊</rb><rb>逐</rb><rb>工</rb><rb>攏</rb><rb>咧</rb><rb>痟</rb><rb>電</rb><rb>影</rb>，<rb>聽</rb><rb>阿</rb><rb>啄</rb><rb>仔</rb><rb>的</rb>CD。
  <rtc class="reading romanization">
    <rt>i
    <rt rbspan="2">ta̍k-kang
    <rt rbspan="2">lóng-teh
    <rt>siáu
    <rt rbspan="2">tiān-iánn
    <rt>thiann
    <rt rbspan="3">a-tok-á
    <rt rbspan="1">ê
  </rtc>
  <rtc class="reading zhuyin">
    <rt>ㄧ</rt>
    <rt>ㄉㄚㆶ̍</rt>
    <rt>ㄍㄤ</rt>
    <rt>ㄌㆲˋ</rt>
    <rt>ㄉㆤㆷ</rt>
    <rt>ㄒㄧㄠˋ</rt>
    <rt>ㄉㄧㄢ˫</rt>
    <rt>ㄧㆩˋ</rt>
    <rt>ㄊㄧㆩ</rt>
    <rt>ㄚ</rt>
    <rt>ㄉㆦㆶ</rt>
    <rt>ㄚˋ</rt>
    <rt>ㆤˊ</rt>
  </rtc>
</ruby>

<footer class="cite">——朱約信〈歡迎來唱我的歌〉</footer>
</blockquote>

```html
<ruby lang="zh-nan-Hant" class="rightangle">
  <rb>我</rb>
  <rb>有</rb>
  <rb>一</rb><rb>个</rb>
  <rb>朋</rb><rb>友</rb>，

  <rtc class="romanization">
    <rt>guá</rt>
    <rt>ū</rt>
    <rt rbspan="2">tsi̍t-ê</rt>
    <rt rbspan="2">pîng-iú</rt>
  </rtc>

  <rtc class="zhuyin">
    <rt>ㆣㄨㄚˋ</rt>
    <rt>ㄨ˫</rt>
    <rt>ㄐㄧㆵ̍</rt>
    <rt>ㆤˊ</rt>
    <rt>ㄅㄧㄥˊ</rt>
    <rt>ㄧㄨˋ</rt>
  </rtc>
</ruby>
```
如上方代碼所示，使用「拼音－注音共同標注」式行間注時，需為`ruby`元素標籤套用類別`complex`或`rightangle`，並依「ruby text container」語法格式書寫。最後，在`rtc`元素標籤上，加入相應的拼音`romanization`或注音`zhuyin`類別。
