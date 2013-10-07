<style scoped>

table {  margin-top: 5em;  }

table tr th:first-child {  width: 80px;  }
table tr th:nth-child(n+2) {  width: 20%;  }
table tr th:last-child {  width: 40%;  }

table tr td:last-child {
	line-height: 1.5em;
	padding: 7px .5em 7px 0;
	text-align: justify;
}



.fawe:before,
.fawe:after {
	font-family: FontAwesome, sans-serif;
	font-style: normal;
	font-weight: normal;
	text-decoration: inherit;
	-webkit-font-smoothing: antialiased;
}

.sort.fawe:after {
	color: #a56;
	content: '\f15d';
	display: inline-block;
	font-size: 1.2em;
	padding-left: .25em;
}

.none.fawe:before {
	color: #a56;
	content: '\f120';
	display: inline-block;
	font-size: 1.2em;
	font-weight: bolder;
	padding-right: .25em;
}

.none.fawe {
	color: #999;
}
</style>


附錄·詞彙 { #terminology }
===

這分附錄表格記錄着「_漢_{.pn}字標準格式」及其使用手冊上所使用的各種專有名詞詞彙和原文，並有簡短說明。依其_中_{.pn}文（_中_{.pn}譯）拼音之_拉丁_{.pn}字母順序排序。

*** 


_英_{.pn}語<wbr>（原文詞彙）| _中_{.pn}文（_中_{.pn}譯）| [[_漢_{.pn}語拼音]]{.fawe.sort} | 定義
--- | --- | --- | ---
alternative voice | 變音文字 | bianyin wenzi | 元素`<i>`的原名，通常以手寫體作為預設樣式，表示一段不同的概念、夢境、想法或外來語。在_英_{.pn}文中也用於船舶名。
fallback | [[尚無]]{.fawe.none} | fallback | 遇指定的方案不支援當前情況時，系統或瀏覽器提供的向後降級處理，以求完整顯示資訊。多用於字體列表的排序上。
gaps betw'n Hanzi and Latin letter | _漢_{.pn}<wbr>_拉_{.pn}間隙 | Han-La jianxi | ++_漢_{.pn}字<wbr>_拉丁_{.pn}字母間隙++，「_漢_{.pn}字標準格式」專有的排版效果，可在_漢_{.pn}字及_拉丁_{.pn}字母、_阿拉伯_{.pn}數字間加上微小間隙，以達較佳的視覺效果。
line break opportunity | 機會斷行元素 | jihui duanhang yuansu | |HTML|5元素`<wbr>`的原名，置於較長的單字詞中的各音節間，以在需要時依音節斷行。
class | 類別 | leibie | 用於同種或同類元素間不同語義目的的分類，常同|CSS|共用以定義樣式。
poem-like | 類詩篇（類別）| leishipian | 「_漢_{.pn}字標準格式」專有的語意類別，指詩篇或類似詩篇的文字段落，可用於文章元素、區塊引用元素、段落元素。
grouping content | 內容群組元素 | neirong qunzu yuansu | 
sections | 區塊元素 | qukuai yuansu |
The Four Typefaces | 四大字體集 | Si Da Zitiji | 「宋、黑、楷、仿宋體」四類_漢_{.pn}字印刷基本字體的總稱。
annotations | 註記元素 | zhuji yuansu | 元素`<u>`的原名。預設樣式為文字下底線，通常用於_中_{.pn}文的專名，或錯誤拼寫及錯別字上，以為識別。
<abbr>pn</abbr>: ++p++roper ++n++oun |  專名 | zhuanming | 專有名詞。
text-level semantics | 字級語意元素 | ziji yuyi yuansu | 



**[HTML]: HyperText Markup Language { :en }
**[CSS]: Cascading Style Sheets { :en }





















