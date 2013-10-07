<style scoped>
#fanli {
    margin-top: 3em;
}
</style>



書名號 { #shuminghao }
===

<dfn>書名號及篇名號</dfn>是一類用以突顯文章內著作名稱的標點符號，同內文區隔，以為識別。



#### 範例 { #fanli }


> <cite>漢語語音學</cite>探討了諸多同「_漢_{.pn}語語音學」相關的學術議題，值得喜歡語言的同好們一讀。


在_日_{.pn}文及_英_{.pn}文中，也有相似的使用情境，使用正確的語言屬性​即可正常顯示。

<blockquote lang="ja" markdown="1">
<cite>白い巨塔</cite>（しろいきょとう）は、山崎豊子の長編小説。1963年9月15日号から1965年6月13日号まで、<cite>サンデー毎日</cite>に連載された。
</blockquote>
<p class="cite"><cite><a href="http://ja.wikipedia.org/wiki/白い巨塔">Wikipedia・白い巨塔</a></cite></p>


_中_{.pn}、_英_{.pn}文書名併列的情況，

> 最近在看_張愛玲_{.pn}的小說<cite>傾城之戀</cite>。閱讀時搭配_諾拉·瓊絲_{.pn}收錄於<cite lang="en-GB">Come Away with Me</cite>專輯的<cite class="piece" lang="en-GB">Don't Know Why</cite>，隨著同故事情節波動的音符起舞，真是一大享受！



使用說明 { #shiyong_shuoming }
---

「_漢_{.pn}字標準格式」將書名號內置於`cite`元素中。參見下方的代碼範例，瞭解區分方式。

    <cite>書名、電影名、電視劇名、專輯名等</cite>

    <cite class="piece">文章篇名、畫作名、歌名、劇集名等</cite>

<!---->

    <cite class="no-cite-mark">不使用書名號，如遇國際標準書號（ISBN）時</cite>

    <foo class="no-cite-mark">
    <cite>特定範圍內不使用書名號</cite>
    </foo>

支援繁、簡_中_{.pn}文、_日_{.pn}語、_英_{.pn}文等語言的書名號用法。套用語言屬性`lang="zh/​ja/​en"`即可。



### 尖角括號 { #jianjiao_guahao }

不過，其實也不需要那麼麻煩，你也可以選擇完全不用這個元素，直接使用《雙》〈單〉尖角括號等符號。


#### 書名、電影名、電視劇名、專輯名等

* 《小王子》
* 《唐詩三百首》
* 《出埃及記》
* 《少年Pi的奇幻漂流》
* 《後宮甄媛傳》
* 《你在煩惱什麼？》


#### 文章篇名、畫作名、歌名、劇集名等

* 〈拼湊的時光〉
* 〈艾蒂兒·布洛赫-鮑爾肖像一號〉
* 〈清明上河圖〉
* 〈光輝歲月〉


#### 並列時

* 《韓非子·說林上》
* 《漢·王充·論衡·幸偶》
* 《古蘭經·法諦海》
* 《走過1999·心如刀割》








