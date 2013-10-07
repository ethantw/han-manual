<style scoped>
.manual article header:nth-of-type(1) ~ p:nth-of-type(1)::first-letter {
	font-size: 3.5em;
}
</style>


[[Modernizr]]{:en}補充集 { #modernizr_buchongji }
===


<dfn>[[Modernizr]]{:en}補充集</dfn>是以「|HTML|5／|CSS|3用戶端功能偵測庫——『[Modernizr]』」為概念設計的開放功能接口，提供了「Modernizr」未收錄、且與「_漢_{.pn}字標準格式」或_漢_{.pn}字相關的功能支援偵測。設計師能夠藉此偵測用戶端瀏覽器或作業系統對各功能的支援與否，並據各種支援程度提供不同的解決方案。

[Modernizr]: http://modernizr.com/ { :en }
**[HTML]: HyperText Markup Language { :en-GB }
**[CSS]: Cascading Style Sheets { :en-GB }


「[[Modernizr]]{:en}補充集」區分有|CSS|端及JavaScript端二種用法，設計師可依使用需求選擇調用。


#### JavaScript支援與否 { #zhiyuan_javascript_yufou }

「[[Modernizr]]{:en}補充集」需要JavaScript方可運作，設計師可在|CSS|中調用類別「`.han-js-rendered`」確知JavaScript及`han.js`是否於用戶的瀏覽器上正常運作、載入。

支援JavaScript的情況下，

	.han-js-rendered div.js-support-msg:after {
		content: '你的瀏覽器支援JavaScript並且正確載入了han.js。';
	}


不支援的情況，

	html:not(.han-js-rendered) div.js-support-msg:after {
		content: '你的瀏覽器不支援JavaScript或未正確載入han.js。';
	}



## 功能支援偵測 { #gongneng_zhiyuan_zhence }

「[[Modernizr]]{:en}補充集」提供了「[Modernizr]」未收錄、且與「_漢_{.pn}字標準格式」或_漢_{.pn}字相關的|HTML|5／|CSS|3功能支援偵測。下依各功能之_英_{.pn}語拉丁字母排序。

功能名稱              | CSS類別名稱
-------------------- | --------------------
column-width         | `columnwidth`
font-face            | `fontface`
&lt;ruby&gt;         | `ruby`
text-emphasis        | `textemphasis`
quotes               | `quotes`
writing-mode         | `writingmode`


另有三種「字體集」的支援偵測，分別為，

字體集名稱            | CSS類別名稱
-------------------- | --------------------
宋體（明朝體）         | `fontface-songti`
楷體                  | `fontface-kaiti`
仿宋體                | `fontface-fangsong`



### 使用範例 { #shiyong_fanli }

在|CSS|中，設計師可分別為「支援」與「不支援」（以`no-`為前綴）該功能的二種情況提供不同的樣式或解決方案。

支援|CSS|3文字着重號屬性「`text-emphasis`」的瀏覽器將解讀下列代碼，

	.textemphasis span.sarcasm {
		text-emphasis: dot;
			-moz-text-emphasis: dot;
			-ms-text-emphasis: dot;
			-webkit-text-emphasis: dot;
	}

不支援者則，

	.no-textemphasis span.sarcasm {
		border-bottom: 3px dotted;
		font-weight: bolder;
	}


---


[[JavaScript]] { :en-GB }端的物件 { #javascript_duan_de_wujian }
---

在JavaScript中，使用全域變數集「`han.support.功能類別名稱`」即可獲得一布林值，`true`表該功能在用戶端可使用，反之，`false`表示不支援。



### 特定字體／字體集支援函式

在網頁*載入*後，呼叫「_漢_{.pn}字標準格式」字體支援偵測函式「`han.support.font('字體／字體集名稱')`」即可獲知一布林值，表示該字體／字體集在用戶端是否安裝或得以使用。


#### 參見 { #canjian }

詳閱下列說明文件，瞭解更詳盡的使用方式。

1. <cite class="piece">[JavaScript接口·`han.support.[feature]`](api/javascript_jiekou-han.support.feature)</cite>
2. <cite class="piece">[JavaScript接口·`han.support.font()`](api/javascript_jiekou-han.support.font)</cite>



