
文章內段落 { #wenzhang_nei_duanluo }
===

如你現在所見的這幾段文字——為了提升長篇文章的閱讀效率，並減少閱讀時因文字密度過大所生的疲憊，「_漢_{.pn}字標準格式」將文章元素`<article>`中的文字行高上調至二倍。

在文章裡，「_漢_{.pn}字標準格式」採用「++首行縮進++」的分段方式，以求各段落間的語句緊密相湊、一氣呵成，省去了「空白行間距」分段所需的多餘空間。

**_中_{ .pn }文網頁中，各段落開頭縮進二字元；_日_{ .pn }文網頁，每段落則縮進一字元。**而在手機等手持裝置上，各段落皆縮進一字元，以節省小螢幕的顯示空間。


#### 清單 { #qingdan }


文章中，清單元素`<ol>`、`<ul>`縮排二字元；於_日_{ .pn }文網頁中則縮排一字元，以對齊段落。

> <b>[為什麼](http://www.zhihu.com/question/20274713)現代的_印度_{ .pn }音樂仍能保有一種強烈的、一聽就能辨別出來的風格，而_中國_{ .pn }音樂卻不是這樣？</b>

> 1. _印度_{ .pn }音樂是什麼？僅僅取所謂的_印度_{ .pn }古典音樂，南有_卡那提克_{ .pn }、北有_印度斯坦_{ .pn }，已經有極大差異，它們各自內部又因爲地域、族群、宗教等差異導致門派林立，對音樂的認識和演繹有很大不同。

> 2. 我們都知道外國人喜歡開「_亞洲人_{ .pn }長得都一樣」的笑話，我們也覺得西洋人長得像。這點在對音樂的認識上也是，因爲不夠瞭解，感知才會被籠統、表面的印象所佔據。不記得講沒講過這個故事，曾經有個朋友發來一段音樂叫我聽，說一聽就是那種_東歐_{ .pn }的風情。我聽了一下告訴她，這是_琉球_{ .pn }／_沖繩_{ .pn }民樂。別笑話人家，這種錯誤誰都會有。

> 3. ……

<p class="cite"  markdown="1">[經雷](http://www.zhihu.com/question/20274713/answer/14712749)</p>



#### 詩篇 { #shipian }

一段落屬於「詩篇」時，各行皆縮排二字元。

<blockquote class="example poem-like"  markdown="1">
橫看成嶺側成峰，遠近高低各不同。<br>
不識_廬山_{ .pn }真面目，只緣身在此山中。
</blockquote>

<p class="cite"  markdown="1">_蘇軾_{ .pn }<cite class="piece">題西林寺壁</cite></p>


**需在`article`、`blockquote`或`p`元素中手動套用類別`.poem-like`**（使用前二者將作用於其內<em>所有</em>段落`p`子元素），**再以`<br>`標籤換行。**例如：

    <blockquote class="poem-like">
        <p>金屋妝成嬌侍夜，玉樓宴罷醉和春。<br>
        姊妹弟兄皆列土，可憐光彩生門戶。</p>
    </blockquote>



### 自訂 { #customise }

設計師可為寬度較小的文章區塊，或依使用者的螢幕、瀏覽器視窗的實際寬度，分別設定合適的縮進字數。

如，瀏覽器視窗寬度較小時，便可使用一個字元的寬度縮進：

    @media screen and (min-width: 320px) and (max-width: 480px) {
        article:lang(zh) p {
            text-indent: 1em;
        }

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

    /* 去除首段的文字縮進 */
    article header:nth-of-type(1) ~ p:nth-of-type(1),
    article h1:nth-of-type(1) ~ p:nth-of-type(1) {
        text-indent: 0;
    }


### 覆寫／去除此元素樣式 { #overwrite }

1. 藉由以下代碼，你可以*完整去除*「_漢_{.pn}字標準格式」所定義的「++文章內段落元素++」樣式。

        article p,
        article li {
            line-height: inherit;
            text-align: inherit;
        }

        article p,
        article:lang(zh) p,
        article:lang(ja) p,
        article:lang(zh) p.poem-like,
        article:lang(zh).poem-like p,
        blockquote:lang(zh).poem-like p,
        article:lang(ja) p.poem-like,
        article:lang(ja).poem-like p,
        blockquote:lang(ja).poem-like p {
            margin: 0;
            text-indent: inherit;
        }

2. 也可以將「++文章內段落元素++」的樣式*回復為預設的*「空白行分段」樣式。

        article p,
        article:lang(zh) p,
        article:lang(ja) p {
            margin: 1em 0;
            text-indent: inherit;
        }

#### 注意事項 { #attention }

顯示為「行間區塊」的元素（`display: inline-block;`）將繼承其父元素的「縮排」`text-indent`屬性值，*需要另行覆蓋*以正確顯示，

    article:lang(zh) p {
        text-indent: 2em;
    }

    article p mark {
        background-color: green;
        display: inline-block;
        padding: 1px 2px;
        text-indent: 0; /* 否則將繼承`article:lang(zh) p`的`2em` */
    }


