<style scoped>
#yinyong {
    letter-spacing: 2em;
    padding-left: 2em;
}

.kaiti {
	font-family: 'Biaodian Pro Serif', 'Han Kaiti', cursive;
}
</style>


引用 { #yinyong }
===


<dfn>引用</dfn>是種常見的寫作技巧，以截取他人的話語、文字來支持作者自身的言論，或探討其中的內容或意義。一般分為「[行內引言](hanzi\_biaozhun\_geshi/yinyong#hangnei\_yinyan)」及「[區塊引用](hanzi\_biaozhun\_geshi/yinyong#qukuai\_yinyong)」二類。「_漢_{.pn}字標準格式」分別為二相應的|HTML|5元素——`<q>`及`<blockquote>`——提供適用於_漢_{.pn}字的樣式。

**[HTML]: HyperText Markup Language { :en-GB }
**[CSS]: Cascading Style Sheets { :en-GB }



行內引言 { #hangnei_yinyan }
---

<dfn>行內引言</dfn>用以標示「一節」源自他人之手的文字、經紀綠的話語、格言或俗諺。「_漢_{.pn}字標準格式」以_漢_{.pn}字專屬的角引號（簡體_中_{.pn}文使用彎引號）包裹行內引言內容。

> 那個清晨漫步在_高雄_{.pn}<wbr>_澄清湖_{.pn}湖畔，忽見_余光中_{.pn}從旁擦身而過，對我吟詩：<q>顯赫的是太陽的金輦／絢爛的是雲旗和霞旌／東經，西經，勾勒的行程／南緯，北緯，架設的驛站／等待絡繹繽紛的隨扈／簇擁著春天的主人……</q>

> 望着湖水反射急於升起的日頭的淡淡微光，身體的疲憊和內心深處的焦躁不安好像變得沒那麼沉重了。


#### 排版小技巧

行內引言若是詩篇等多行文字範圍時，用斜線「／」來表示斷行。


### 覆寫／去除此元素樣式 { #hangnei_yinyan-overwrite }

	q:lang(zh),
	q:lang(ja),
	q:lang(zh-CN),
	q:lang(zh-hans),
	q:lang(en),
	q:lang(en-GB) {
	    quotes: '' '';
	}

	.no-quotes q:lang(zh):before,
	.no-quotes q:lang(ja):before,
	.no-quotes q:lang(zh):after,
	.no-quotes q:lang(ja):after,
	.no-quotes q.double:lang(zh):before,
	.no-quotes q.double:lang(ja):before,
	.no-quotes q.double:lang(zh):after,
	.no-quotes q.double:lang(ja):after {
	    content: '';
	}



### 角引號

和<a href="hanzi_biaozhun_geshi/shuminghao#jianjiao_guahao">書名號相同</a>，你也可以選擇完全不用`<q>`元素，直接以「單」『雙』角引號表示引言。



區塊引用 { #qukuai_yinyong }
---

<dfn>區塊引用</dfn>用以表示「一段」乃至「一篇」節錄自他人之手的文字或文章。這個元素`<blockquote>`更可同多種元素和專用屬性搭配，為網站或文章內文提供不同的使用情境。


在「_漢_{.pn}字標準格式」中內建有二種元素下的區塊引用樣式，分別為「<a href="hanzi_biaozhun_geshi/yinyong#wenzhang_nei_de_qukuai_yinyong">文章元素</a>」及「<a href="hanzi_biaozhun_geshi/yinyong#miaoshu_yuansu_nei_de_qukuai_yinyong">描述元素</a>」。



### 文章內的區塊引用 { #wenzhang_nei_de_qukuai_yinyong }

在文章元素`<article>`內的區塊引用向內縮進，窄一般段落或清單項目二字元（行動裝置等螢幕較小的系統上則縮進一字元），並使用「[[楷體]] { .kaiti }」為其內文字體。



#### 引用中的引用 { #yinyong_zhong_de_yinyong }

<blockquote markdown="1">
「我是_柏林人_{.pn}」是1963年6月26日_美國_{.pn}總統_約翰·甘迺迪_{.pn}在_西柏林_{.pn}演講中的一句名言。當時正值冷戰，_柏林_{.pn}牆已開始建造，_西柏林_{.pn}被_東德_{.pn}包圍。
這一部份演說內容及譯文如下：

<blockquote markdown="1">
<p lang="en-GB" markdown="1">Two thousand years ago the proudest boast was ::civis Romanus sum.::{ :la } Today, in the world of freedom, the proudest boast is ‘::Ich bin ein Berliner::{ :de }’… All free men, wherever they may live, are citizens of Berlin, and, therefore, as a free man, I take pride in the words ‘::Ich bin ein Berliner!::{ :de }’</p>

兩千年前最自豪的句子是「::civis Romanus sum::{ :la }」（我是_羅馬公民_{.pn}）。今天，在自由世界，最自豪的句子是「::Ich bin ein Berliner::{ :de }」（我是_柏林人_{.pn}）……所有自由人，無論生活在哪裡，都是_柏林_{.pn}的公民。因此，身為自由人，我以「::Ich bin ein Berliner::{ :de }」感到自豪！
</blockquote>

以_德_{.pn}語說出「我是_柏林人_{.pn}」這句子，是_甘迺迪_{.pn}在最後才想到的。他走上_舍嫩貝格市政廳_{.pn}（[[Rathaus Schöneberg]]{ :de }）時，向翻譯員_羅伯特·洛赫納_{.pn}請教這句子的_德_{.pn}語說法，以小紙張標下讀音，並練習了幾次。
</blockquote>
<p class="cite" markdown="1"><cite><a href="http://zh.wikipedia.org/wiki/我是柏林人">維基百科·我是柏林人</a></cite></p>



#### 覆寫／去除此元素樣式 { #wenzhang_nei_de_qukuai_yinyong-overwrite }

覆寫一般系統上的樣式，

	/* 覆寫文章內的區塊引用（blockquote） */
	article:lang(zh) blockquote,
	article:lang(ja) blockquote,
	article blockquote:lang(ja) {
	    font-family: inherit;
	    margin: 0;
	    width: auto;
	}

	html.han-biaodian-pro article blockquote,
	html.han-biaodian-pro-cns article blockquote,
	article:lang(zh) blockquote :not(:lang(zh)),
	article:lang(ja) blockquote :not(:lang(ja)),
	html.han-biaodian-pro article blockquote :not(:lang(zh)),
	html.han-biaodian-pro-cns article blockquote :not(:lang(zh)) {
	    font-family: inherit;
	}



	/* 覆寫引用中的引用 */
	article:lang(zh) blockquote blockquote,
	article:lang(ja) blockquote blockquote {
	    margin: 0;
	    padding-left: 0;
	}

	article:lang(zh) blockquote blockquote p,
	article:lang(ja) blockquote blockquote p {
	    margin: 0;
	    text-indent: 2em;
	}


覆寫手持裝置上的微調，

	@media only screen and (min-device-width: 320px) and (max-device-width: 480px),
	       only screen and (device-aspect-ratio: 2/3),
	       only screen and (device-aspect-ratio: 40/71) {
	    article:lang(zh) blockquote {
	        margin-left: 0;
	    }

	    article:lang(zh) blockquote blockquote {
	        margin-left: 0;
	        padding-left: 0;
	    }

		article:lang(zh) blockquote blockquote p,
		article:lang(ja) blockquote blockquote p {
		    margin: 0;
		    text-indent: 1em;
		}
	}



### 描述元素內的區塊引用 { #miaoshu_yuansu_nei_de_qukuai_yinyong }

描述元素`<figure>`內的區塊引用元素不採用縮進，而是以一淺灰色彎引號作起始、放大其字體至「1.25em」並使用「[[宋體]]{ .songti }」來示意一個引用區塊。

再以一條淺灰色直線區隔其下方的描述說明元素`<figcaption>`，說明文字字體則為「深灰色」、「0.85em」、「黑體」。

下面白色文章區塊內，右中上方的棕色字樣「唯有知識才能解決問題」彎引號區塊即為範例。


<article class="simulator" markdown="1">

[吳寶春：要學習　不是要學位](http://www.cna.com.tw/News/aEDU/201306020057-1.aspx)
===

<p class="time"><time>2013-06-02 10:56</time></p>

<style scoped>
article.simulator {
	background-color: #fff;
	margin: 2em 0;
	padding: 1em 15px 3em;
	position: static;
	width: 100%;
}

article.simulator h1:nth-of-type(1),
article.simulator h1:nth-of-type(1) a {
	background: none;
	border: 0 none;
	color: #0645ad;
	margin: .5em 0 1em;
	padding: 0;
	position: static;
	text-align: left;
	text-shadow: none;
}

article.simulator p.time {
	color: #753;
	font: bold .9em sans-serif;
	margin: -1.5em 0 2em;
	text-indent: 0;
}

article.simulator figure {
	float: right;
	margin: .7em 1em;
	width: 210px;
}

article.simulator figure blockquote {
	color: #750;
}

.songti {
	font-family: 'Biaodian Pro Serif', Georgia, Times, 'Times New Roman', 'Han Songti', serif;
}
</style>

<b>_吳寶春_{.pn}念|EMBA|專題</b>〔中央社記者_林紳旭_{.pn}<wbr>_台北_{.pn}2日電〕麵包達人_吳寶春_{.pn}求學風波塵埃落定，將攻讀_新加坡國立大學_{.pn}|EMBA|，同時也在_台大_{.pn}開課和選讀。_吳寶春_{.pn}說，要的是學習，不是學位。

**[EMBA]: Executive Master of Business Administration { :en-GB }


<figure>
<blockquote>
	<p>唯有知識才能解決問題</p>
</blockquote>
<figcaption>面對記者的採訪，<u class="pn">吳寶春</u>如是說，話語中更顯出其從容自若的氣質。</figcaption>
</figure>

_吳寶春_{.pn}說，當時想要讀書，只是想要透過學習，獲得管理的知識，不是要獲得|EMBA|學位，很感謝總統_馬英九_{.pn}、政府單位和所有關心他的_台灣_{.pn}朋友。

他表示，不想破壞體制，_教育部_{.pn}放寬|EMBA|入學標準，可提供給想要學習的人一個機會，有更多的麵包師傅可以有好的學習機會。

「唯有知識才能解決問題」，他說，以前做麵包時，這一次做的跟下一次做的品質都不一樣，這就是沒有量化的結果，他要找問題所在，因為沒有知識，只能一直試，如果有知識，就不用一直在失敗中找答案。

〔……〕

他表示，他從媽媽身上學到的是「從不怨天尤人」，心裡面永遠帶著感恩的心，他很珍惜_台灣_{.pn}給他的一切，也會更加努力付出。

「當我走到生命的最後一天，我是什麼樣的人？」_吳寶春_{.pn}說這是他目前在思考的事，「我會成為什麼樣的人？」他說，在他的生命中，只要是一句話或一個行為改變了他，這個人就是他的貴人，他永遠感激。
</article>


為了顯示較佳的效果，上方的範例含有為美觀因素而加入的非「_漢_{.pn}字標準格式」原生樣式，建議你參考下面的代碼，為此情境加入適用你的網站的專用樣式。


	/* 描述元素 */
	article figure {
		float: right;       /* 飄浮於文章文字右方 */
		margin: .7em 1em;   /* 上下、右左方的邊界值，以同文章內文區隔 */
		width: 210px;		/* 寬度，最好小於文章區塊的0.5倍 */
	}

	/* 描述元素內的區塊引用 */
	article figure blockquote {
		color: #750;		/* 不同於文章內文的文字色彩，以為區別 */
	}
















