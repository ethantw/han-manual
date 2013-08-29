
文章內重點 { #wenzhang_nei_zhongdian }
===

在文章元素`<article>`中，重點元素`<strong>`顯示為「黑體」無襯線字集（sans-serif），搭配粗體重量，以顯示出其重要性。

> 希望我們每一個人，都可以**為自己的人生負責、找尋並達成自己設定的目標，**才不枉為人。

**注意：**只適用於文章`<article>`內的重點`<strong>`元素。



### 覆蓋此元素樣式 { #overwrite }

	article strong:lang(zh),
	article strong:lang(ja),
	html.han-biaodian-pro article strong:lang(zh),
	html.han-biaodian-pro-cns article strong:lang(zh),
	article strong:not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro article strong:not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro-cns article strong:not(:lang(zh)):not(:lang(ja)) {
	    font-family: inherit;
	    font-weight: inherit;
	}
