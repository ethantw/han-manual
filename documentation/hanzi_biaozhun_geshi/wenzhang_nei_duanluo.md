
文章內段落 { #wenzhang_nei_duanluo }
===

如你現在所見的這幾段文字——為了提升長篇文章的閱讀效率，並減少閱讀時因文字密度過大所生的疲憊，「_漢_{.pn}字標準格式」將文章元素`<article>`中的文字行高上調至二倍。




#### 清單 { #qingdan }

文章中，清單元素`<ol>`、`<ul>`中的各條目`<li>`縮排二字元；於_日_{ .pn }文網頁中則縮排一字元，以對齊段落。

> <b>[為什麼](http://www.zhihu.com/question/20274713)現代的_印度_{ .pn }音樂仍能保有一種強烈的、一聽就能辨別出來的風格，而_中國_{ .pn }音樂卻不是這樣？</b>

> 1. _印度_{ .pn }音樂是什麼？僅僅取所謂的_印度_{ .pn }古典音樂，南有_卡那提克_{ .pn }、北有_印度斯坦_{ .pn }，已經有極大差異，它們各自內部又因爲地域、族群、宗教等差異導致門派林立，對音樂的認識和演繹有很大不同。

> 2. 我們都知道外國人喜歡開「_亞洲人_{ .pn }長得都一樣」的笑話，我們也覺得西洋人長得像。這點在對音樂的認識上也是，因爲不夠瞭解，感知才會被籠統、表面的印象所佔據。不記得講沒講過這個故事，曾經有個朋友發來一段音樂叫我聽，說一聽就是那種_東歐_{ .pn }的風情。我聽了一下告訴她，這是_琉球_{ .pn }／_沖繩_{ .pn }民樂。別笑話人家，這種錯誤誰都會有。

> 3. ……

<p class="cite"  markdown="1">[經雷](http://www.zhihu.com/question/20274713/answer/14712749)</p>



#### 詩篇 { #shipian }

一段落屬於「詩篇」時，各行皆縮排二字元；於_日_{ .pn }文網頁中則縮排一字元。而在手機等手持裝置上，詩篇段落則縮進一字元，以節省小螢幕的顯示空間。

<blockquote class="example poem-like"  markdown="1">
橫看成嶺側成峰，遠近高低各不同。<br>
不識_廬山_{ .pn }真面目，只緣身在此山中。
</blockquote>

<p class="cite" markdown="1">_蘇軾_{ .pn }<cite class="piece">題西林寺壁</cite></p>

<small>**提示：**包含此處及《_漢_字標準格式·使用手冊》全網站的範例皆置於「引用元素」`<blockquote>`中，故你在上方範例所見到的詩篇段落共縮進了四個字元（手持裝置及小瀏覽視窗共縮進二字元）。</small>


**需在段落元素`<p>`或其父輩元素（如但不限於`<article>`、`<blockquote>`、`<div>`等）中手動套用類別`.poem-like`**（使用前二者將作用於其內<em>所有</em>段落`p`子元素），**再以`<br>`標籤換行。**例如：

    <article>
        <p class="poem-like">金屋妝成嬌侍夜，玉樓宴罷醉和春。<br>
        姊妹弟兄皆列土，可憐光彩生門戶。</p>
    </article>


也可以是`<blockquote>`：

    <blockquote class="poem-like">
        <p>第一行……<br>
        ……第二行……</p>
    </blockquote>


也可以直接置於文章元素`<article>`上，

    <article class="poem-like">
        <p>第一行……<br>
        ……第二行……<br>
        ……第三行……<br>
        ……很多很多行……</p>
    </article>


或，

    <div class="poem-like">
        <p>科學博物館：</p>

        <p>
            <address>台灣　台中市<br>
            北區館前路1號<br>
            404</address>
        </p>
    </div>


……等等。



### 自訂 { #customise }

設計師可為寬度較小的文章區塊，或依使用者的螢幕、瀏覽器視窗的實際寬度，分別設定合適的縮進字數。

如，瀏覽器視窗寬度較小時，便可使用一個字元的寬度縮進：

    @media screen and (min-width: 320px) and (max-width: 480px) {
        article:lang(zh) ol > li,
        article:lang(zh) ul > li {
            margin-left: 1em;
            padding: 0;
        }
    }


#### 首段首字下沉 { #shouduan_shouzi_xiachen }

你也可以*自行加入*++首段首字下沉++的裝飾樣式，效果見本頁的起首。

    /* 首段首字的偽類樣式 */
    article header:nth-of-type(1) ~ p:nth-of-type(1):first-letter,
    article h1:nth-of-type(1) ~ p:nth-of-type(1):first-letter {
        float: left;
        font: 2.5em Georgia, 'Han Songti', serif;
        margin-right: .1em;
    }




