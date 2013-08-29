<style scoped>
html.han-la .no-hanla span.hanla {
	display: none;
}
</style>



漢拉間隙 { #han-la_jianxi }
===

<dfn>_漢_{.pn}<wbr>_拉_{.pn}間隙（_漢_{.pn}字_拉丁_{.pn}字母間隙）</dfn>功能可在_漢_{.pn}字同_拉丁_{.pn}字母、_阿拉伯_{ .pn }數字混排時，於其間加入一個小於半形空白的間隙（0.25em或1ch），提升易讀性。範例如下，

> 研究發現，全球狂銷的_蘋果_{ .pn }[[iPad]]{ :en-GB }超省電。根據非營利組織<abbr lang="en-GB" title="Electric Power Research Institute">EPRI</abbr>（_電力研究中心_{ .pn }），[[iPad]]{ :en-GB }一年電費只需1.36_美_{ .pn }刀（[[U.S. Dollar]]{ :en-GB }）。

<p class="cite" markdown="1"><cite>[中央社·[[iPad]]{ :en-GB }超省電　費用比燈泡少](http://www.cna.com.tw/News/FirstNews/201206220035.aspx)</cite></p>


**注意：**此功能*預設關閉*，參閱「[啓用方式](hanzi\_biaozhun\_geshi/han-la\_jianxi#activation)」一節瞭解如何開啓與停用_漢_{.pn}<wbr>_拉_{.pn}間隙。



前言 { #qianyan }
---

寫作時文章使用外文詞彙在所難免，又因_拉丁_{ .pn }字母、_阿拉伯_{ .pn }數字為當代最廣為流傳的書寫及記數系統，_漢_{ .pn }字常同此二者混用。三種書寫系統的外型迥異，混用時可能導致易讀性問題。


### 現有的解決方式 { #xianyou_de_jiejue_fangshi }

目前較佳的視覺效果解決方式是在二者間加入一半形空白，如：

> 你是 [[Li]]{ :zh-Latn } 博士嗎？你設計的 |CCTV| 搭配這個 |app| 能夠很有效地監控學生上課！

*[CCTV]: closed-circuit television { :en-GB }
*[app]: application { :en-GB }



#### 缺點 { #xianyou_de_jiejue_fangshi-quedian }

1. 由於_中_{ .pn }文及_日_{ .pn }文不使用空格分詞，使用空格分隔_拉丁_{ .pn }字母及_阿拉伯_{ .pn }數字不符二語言的書寫習慣。若編者間沒有統一的寫作標準和規範，可能導致下列「空白使用不一致」的情況。

	<blockquote class="no-hanla">
	<p>2009  年6月 13日，我離開了大學的殿堂，投入社會， honey 與我從A<sup>+</sup>實習生搖身一變成為真正的 DINK 族。</p>
	</blockquote>

2. 而在_拉丁_{ .pn }字母單字詞或_阿拉伯_{ .pn }數字過短的情況下，單個半形空白將造成內容過於鬆散。

	> 2009 年 6 月 13 日，我離開了大學的殿堂，投入社會，honey 與我從 A<sup>+</sup> 實習生搖身一變成為真正的 DINK 族。



漢拉間隙 { #han-la_jianxi-han-la_jianxi }
---

某些排版軟體（如[[OpenOffice]]{ :en-GB }、[[InDesign]]{ :en-GB }等）自動於_漢_{ .pn }字及_拉丁_{ .pn }字母、_阿拉伯_{ .pn }數字間加入一小於半形空白的間隙，「_漢_{ .pn }字標準格式」採用這個方案，稱作「++_漢_{ .pn }<wbr>_拉_{ .pn }間隙++」（<strong>_漢_{ .pn }字_拉丁_{ .pn }字母間隙</strong>）。在使用者瀏覽器開啓<span lang="en-GB">JavaScript</span>、<abbr lang="en" title="Cascading Style Sheets">CSS</abbr>的情況下，_漢_{ .pn }字標準格式將自動為文章中的_漢_{ .pn }字與_拉丁_{ .pn }字母、數字加入間隙。效果如下：


> [[YouTube]]{ :en-GB }是設立在_美國_{ .pn }的一個影片分享網站，讓使用者上載、觀看及分享影片或短片。2005年2月，由_美_{ .pn }籍_華人_{ .pn }<wbr>_陳士駿_{ .pn }（[[Steve Chen]]{ :en }）所創站，網站的名稱和標誌皆是自早期電視所使用的陰極射線管發想而成。至今[[YouTube]]{ :en-GB }已經成為同類型網站的翹楚，並造就多位網上名人且激發網上創作。

<p class="cite" markdown="1"><cite>[維基百科·[[YouTube]]{ :en-GB }](http://zh.wikipedia.org/wiki/YouTube)</a></cite></p>



啓用方式 { #activation }
---

此功能*預設關閉*，在元素`<html>`上套用類別`class="han-la"`以開啓此功能並作用於該網頁下的所有元素。


### 細節說明及注意事項 { #xijie_shuoming_ji_zhuyi_shixiang }

* 此空隙寛度為0.25em（或1ch，視瀏覽器支援情況而定），小於一半形空白；
* 段落開頭、標點前後不加入間隙；
* *不*作用於`<code>`、`<pre>`等預設使用等寛字體的元素；
* 使用瀏覽器的「複製、貼上」功能時，_漢_{ .pn }<wbr>_拉_{ .pn }間隙*將不被拷貝*；
* 瀏覽器的「最小字級」功能可能影響_漢_{ .pn }<wbr>_拉_{ .pn }間隙的寬度。



### 停用漢拉間隙 { #inactivation }

++_漢_{ .pn }<wbr>_拉_{ .pn }間隙++的實質係一內容為空的文字範圍元素`<span>`。藉由下列的範例代碼，我們可以停用`X`元素下的所有_漢_{ .pn }<wbr>_拉_{ .pn }間隙，並繼承至其下子元素。

	html.han-la X span.hanla {
		display: none;
	}

承上，若希望`X`元素裡的子元素`Y`仍使用_漢_{ .pn }<wbr>_拉_{ .pn }間隙，可以如下編寫，

	html.han-la X Y span.hanla {
		display: inline;
	}


#### [[IE]]{:en-GB}裡的漢拉間隙

[[IE]]{:en-GB}支援一特殊|CSS|3屬性`text-autospace`，可自動加入_漢_{ .pn }<wbr>_拉_{ .pn }間隙，「_漢_{.pn}字標準格式」遇[[IE]]{:en-GB}瀏覽器時使用此|CSS|屬性，故需使用額外的代碼另行停用。下列代碼可以停用`X`元素下的所有_漢_{ .pn }<wbr>_拉_{ .pn }間隙，並繼承至其下子元素，

**[CSS]: Cascading Style Sheets


	html.han-la X,
	html.han-la X * {
		text-autospace: none;
	}

承上，若希望`X`元素裡的子元素`Y`仍使用_漢_{ .pn }<wbr>_拉_{ .pn }間隙，可以如下編寫，

	html.han-la X Y,
	html.han-la X Y * {
		text-autospace: ideograph-alpha;
	}

<!--
比較 { #bijiao }
---

範例為使用空格（上）及_漢_{ .pn }<wbr>_拉_{ .pn }間隙（下）的比較。


> 你是 [[Li]]{ :zh-Latn } 博士嗎？你設計的 |CCTV| 搭配這個 |app| 能夠很有效地監控學生上課！

> 你是[[Li]]{ :zh-Latn }博士嗎？你設計的|CCTV|搭配這個|app|能夠很有效地監控學生上課！

<strong>注意：</strong>瀏覽器的「最小字級」功能可能影響_漢_{ .pn }<wbr>_拉_{ .pn }間隙的寬度。

-->


