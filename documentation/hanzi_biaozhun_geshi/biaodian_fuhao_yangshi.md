<style scoped>
.punctuation-wrong-format {
	font-family: 'Helvetica Neue', Helvetica, Arial, 
	'Heiti TC', 'Lihei Pro', 'Microsoft Jhenghei', sans-serif;
}

table tr th:nth-child(2),
table tr td:nth-child(2) {  text-align: center;  }


table.pro tr th:nth-child(1) {  width: 9em  }
table.pro tr th:nth-child(3),
table.pro tr th:nth-child(4) { width: 26%; }



table .example {
	background-color: #fbd;
	color: #ce196c;
	font-family: 'Biaodian Sans', sans-serif;
	padding: 1px 2px;
}

table.pro .example {
	font-family: 'Biaodian Pro Sans', sans-serif;
}

table.pro .example.cns {
	font-family: 'Biaodian Pro Sans CNS', sans-serif;
}
</style>




標點符號樣式 { #biaodian_fuhao_yangshi }
====

在萬國碼中，有少數_中_{ .pn }文標點符號並末單獨收錄，需同西文標點共用。而一般作業系統、瀏覽器在fallback字體順序時，通常**將西文字體排序在前、_漢_{ .pn }字字體在後**，導致無從以_中_{ .pn }文的排版習慣顯示效果。

<dfn>標點符號樣式</dfn>用於修正_中_{ .pn }<wbr>_日_{ .pn }<wbr>_韓_{ .pn }表意文字（|CJK|）的標點位置及顯示樣式。這個功能以`@font-face`將標點符號獨立於_漢_{ .pn }字字體之外，並排序於西文、_漢_{ .pn }字字體或系統[[fallback]]{ :en-GB }前方，以避免交由作業系統或瀏覽器排序字體所造成的衝突，並提升美觀度。

**[CJK]: Chinese, Japanese and Korean, East Asian Unified Ideographs { :en-GB }



範例 { #fanli }
---

### _台_{ .pn }<wbr>_港_{ .pn }繁體標點 { #fanli-tai-gang_fanti_biaodian }

<blockquote markdown="1" lang="zh-TW" style="font-family: 'Biaodian Pro Serif CNS', Georgia, Times, 'Times New Roman', 'Han Kaiti', 'Han Cursive', cursive, '標楷體', serif;">
《源氏物語》是_日本_{ .pn }女作家_紫式部_{ .pn }的長篇小說，也是世界上最早的長篇寫實小說，代表_日本_{ .pn }古典文學的高峰，成書在_長保_{ .pn }三年至_寬弘_{ .pn }五年（西元1001年至1008年）間。

「物語」是一種具有民族特色的_日本_{ .pn }文學體裁，較著名的有《竹取物語》、《落窪物語》、《平家物語》等。《竹取物語》中_輝夜姬_{ .pn }的故事在_日本_{ .pn }更是婦孺皆知。

**《源氏物語》在_日本_{ .pn }開啟了「物哀」的時代**——「物哀」即見物而生悲哀之情——此後_日本_{ .pn }的小說中明顯帶有一種淡淡的悲傷！而「物哀」也成為_日本_{ .pn }一種全國性的民族意識，隨着一代又一代的詩人、散文家、物語作者流傳了下來……
</blockquote>

<p class="cite" markdown="1"><cite><a href="http://zh.wikipedia.org/wiki/源氏物語">維基百科·源氏物語</a></cite></p>



### _中_{ .pn }<wbr>_日_{ .pn }式標點 { #fanli-zhong-rishi_biaodian }

<blockquote markdown="1" lang="zh-CN">
当考试接近的时候，_达尔文_{ .pn }“私下接受‘_亨斯洛_{ .pn }’的指导”，但**也同时将重心放在课业！**_达尔文_{ .pn }尤其热衷于_威廉·裴利_{ .pn }（William Paley）的著作，包括论证神必定存在的《目的论的证明》（<cite lang="en-GB">Teleological Argument</cite>）。在1831年2月的期末，他在神学上的表现优异，而古典学、数学、物理学也能应付。在178个过关名单中排名第10……
</blockquote>

<p class="cite" markdown="1"><cite><a href="http://zh.wikipedia.org/wiki/查爾斯·達爾文">維基百科·達爾文</a></cite></p>




符號樣式說明 { #fuhao_yangshi_shuoming }
---

下方二表包含<b>標點符號樣式</b>最佳化的所有標點及說明，二表分別為預設開啓的「簡易符號修正」及需另行啓用的「進階版」。



### |CJK|基本符號修正 { #fuhao_yangshi_shuoming-cjk_jiben_fuhao_xiuzheng }

<b>|CJK|基本符號修正</b>預設開啓。



#### 問題及修正

部分繁體_中_{ .pn }文字體將單點全形句號顯示於字元中間（<span class="punctuation-wrong-format">．</span>），與間隔號樣式相似，可能導致讀者誤會；而西文字體中，間隔號及彎引號多顯示為「半格_漢_{ .pn }字字寬」（<span class="punctuation-wrong-format">·</span>、<span class="punctuation-wrong-format">“‘’”</span>）、破折號兩不相連（<span class="punctuation-wrong-format">——</span>）和省略號沉底（<span class="punctuation-wrong-format">……</span>）亦與_中_{ .pn }<wbr>_台_{ .pn }<wbr>_日_{ .pn }的_漢_{ .pn }字排版規範不符。故在「_漢_{ .pn }字標準格式」中，預設修正這五種標點。

**註：**在_日_{ .pn }文網頁中，僅修正破折號及省略號。

<table>
<thead>
<tr>
<th>標點</th>
<th lang="en-GB">Unicode</th>
<th>符號位置與修正說明</th>
</tr>
</thead>

<tbody>
<tr>
<th>單點全形句號</th>
<td>FF0E</td>
<td>前字右下<span class="example">．</span></td>
</tr>

<tr>
<th>間隔號</th>
<td>00B7</td>
<td>
佔一漢字寬度，居中<br>
<span class="example">莫那·魯道</span>
</td>
</tr>

<tr>
<th>彎引號</th>
<td>201C<br>201D<br>2018<br>2019</td>
<td>
佔一漢字寬度，緊靠其內容<br>
<span class="example">“內‘內容’容”</span>
</td>
</tr>

<tr>
<th>破折號</th>
<td>2014</td>
<td>相連無間隔<span class="example">——</span></td>
</tr>

<tr>
<th>刪節號</th>
<td>2026</td>
<td>居中<span class="example">……</span></td>
</tr>
</tbody>
</table>


### 進階版 { #fuhao_yangshi_shuoming-jinjieban }

++進階版++預設關閉，需要另行啓用。

進階版<b>標點符號樣式</b>包含常見的<em>所有</em>_中_{ .pn }文標點，並再細分為「_台_{ .pn }<wbr>_港_{ .pn }式」與「_中_{ .pn }<wbr>_日_{ .pn }式」二種以地區差異區分的版本。在萬國碼中同西文共用之字符以高亮背景色凸顯。

**註：**進階版<a href="#qiyong_fangshi-jinjieban">需另行啓用</a>。

<table class="pro" markdown="1">
<thead>
<tr>
<th>標點</th>
<th lang="en-GB">Unicode</th>
<th>_台_{ .pn }<wbr>_港_{ .pn }式</th>
<th>_中_{ .pn }<wbr>_日_{ .pn }式</th>
</tr>
</thead>

<tbody>
<tr>
<th>句號</th>
<td>3002</td>
<td>居中<span class="example cns">。</span></td>
<td>前字右下<span class="example">。</span></td>
</tr>

<tr>
<th>單點全形句號</th>
<td>FF0E</td>
<td colspan="2">前字右下<span class="example">．</span></td>
</tr>

<tr>
<th>逗號</th>
<td>FF0C</td>
<td>居中<span class="example cns">，</span></td>
<td>前字右下<span class="example">，</span></td>
</tr>

<tr>
<th>頓號</th>
<td>3001</td>
<td>居中<span class="example cns">、</span></td>
<td>前字右下<span class="example">、</span></td>
</tr>

<tr>
<th>分號</th>
<td>FF1B</td>
<td colspan="2">居中，佔一漢字長寬<span class="example">；</span></td>
</tr>

<tr>
<th>冒號</th>
<td>FF1A</td>
<td colspan="2">居中，佔一漢字長寬<span class="example">：</span></td>
</tr>

<tr>
<th>問號</th>
<td>FF1F</td>
<td colspan="2">居中，佔一漢字長寬<span class="example">？</span></td>
</tr>

<tr>
<th>驚嘆號</th>
<td>FF01</td>
<td colspan="2">居中，佔一漢字長寬<span class="example">！</span></td>
</tr>

<tr>
<th>引號</th>
<td>300C<br>300D<br>300E<br>300F</td>
<td colspan="2">
佔一漢字寬度，緊靠其內容<br>
<span class="example">「內『內容』容」</span>
</td>
</tr>

<tr class="important">
<th>彎引號</th>
<td>201C<br>201D<br>2018<br>2019</td>
<td colspan="2">
佔一漢字寬度，緊靠其內容<br>
<span class="example">“內‘內容’容”</span>
</td>

<tr>
<th>書名號</th>
<td>300A<br>300B<br>3008<br>3009</td>
<td colspan="2">佔一漢字寬度，緊靠其內容<br><span class="example">《書名》〈篇名〉</span></td>
</tr>

<tr>
<th>括號</th>
<td>FF08<br>FF09</td>
<td colspan="2">佔一漢字寬度，緊靠其內容<br><span class="example">（內容）</span></td>
</tr>

<tr class="important">
<th>破折號</th>
<td>2014</td>
<td colspan="2">相連無間隔<span class="example">——</span></td>
</tr>

<tr class="important">
<th>刪節號</th>
<td>2026</td>
<td colspan="2">居中<span class="example">……</span></td>
</tr>

<tr class="important">
<th>間隔號</th>
<td>00B7</td>
<td colspan="2">
佔一漢字寬度，居中<br>
<span class="example">莫那·魯道</span>
</td>
</tr>
</tbody>
</table>



啓用方式 { #activation }
---
++標點符號樣式++的簡易符號修正已*預設啓用*，並作用於多數「_漢_{ .pn }字標準格式」定義的元素。你可以使用下列的字體名稱為個別的元素加入簡易符號修正。

* 無襯線字體標點：
	1. _中_{ .pn }文網頁  
	   `'Biaodian Sans'`
	2. _日_{ .pn }文網頁  
	   `'Yakumono Sans'`

* 襯線字體標點：
	1. _中_{ .pn }文網頁  
	   `'Biaodian Serif'`
	2. _日_{ .pn }文網頁  
	   `'Yakumono Serif'`


**註：**務必為自行套用標點字體元素下的**非_漢_{ .pn }字子元素**設定跳脫。如： 

	div.content {
		font-family: 'Biaodian Serif', Georgia, 'Times New Roman', serif;
	}

	div.content :not(:lang(zh)) {
		font-family: Georgia, 'Times New Roman', serif;
	}



### 進階版 { #activation-pro }

#### 直接套用於「_漢_{ .pn }字標準格式」定義的元素中

選擇需要的地區標點樣式類別，並插入`html`中。

1. _台_{ .pn }<wbr>_港_{ .pn }繁體標點  
   `class="han-biaodian-pro-cns"`
2. _中_{ .pn }<wbr>_日_{ .pn }式標點  
   `class="han-biaodian-pro"`


#### 自行套用

在欲套用效果的元素中，宣告下列字體並排序於其他字體前方，請依樣式、字體風格選擇標點字體。

* 無襯線字體標點：
	1. _台_{ .pn }<wbr>_港_{ .pn }繁體標點  
	   `'Biaodian Pro Sans CNS'`
	2. _中_{ .pn }<wbr>_日_{ .pn }式標點  
	   `'Biaodian Pro Sans'`


* 襯線字體標點：
	1. _台_{ .pn }<wbr>_港_{ .pn }繁體標點  
	   `'Biaodian Pro Serif CNS'`
	2. _中_{ .pn }<wbr>_日_{ .pn }式標點  
	   `'Biaodian Pro Serif'`

**註：**務必為自行套用標點字體元素下的**非_漢_{ .pn }字子元素**設定跳脫。如：

	div.content.taiwan {
		font-family: 'Biaodian Pro Sans CNS', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}

	div.content.taiwan **:not(:lang(zh))**,
	html.han-biaodian-pro-cns** div.content.taiwan :not(:lang(zh)) {
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}


支援情況 { #zhiyuan_qingkuang }
---

這個「標點符號樣式」解決方案目前支援[[Webkit]]{ :en }（[[Google Chrome]]{ :en }、[[Safari]]{ :en }）及[[IE9]]{ :en }以上版本的瀏覽器環境，於[[Mac OS X]]{ :en }、[[iOS]]{ :en }、[[Windows Vista]]{ :en }、[[Windows 7/8]]{ :en }、[[Debian]]{ :en }、[[Ubuntu]]{ :en }等作業系統上有較佳效果。




