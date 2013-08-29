
代碼元素裡的漢字 { #daima_yuansu_li_de_hanzi }
===

代碼元素`<code>`預設以等寛字體集顯示內文，而一般瀏覽器或作業系統會將_漢_{.pn}字fallback至襯線字體集，使代碼不易閱讀。「_漢_{.pn}字標準格式」為`<code>`、`<kbd>`、`<pre>`、`<samp>`等四個元素重新排序字體列表（詳見`han.fonts.css`），以求最佳的閱讀效果。

範例如下，


	<div>
		<p>拉丁字母和漢字（及標點符號）都能正常顯示。</p>
	</div>



### 覆寫／去除此元素樣式 { #overwrite }

	code,
	kbd,
	pre,
	samp,
	code:lang(zh),
	kbd:lang(zh),
	pre:lang(zh),
	samp:lang(zh),
	code:lang(ja),
	kbd:lang(ja),
	pre:lang(ja),
	samp:lang(ja),
	html.han-biaodian-pro code,
	html.han-biaodian-pro kbd,
	html.han-biaodian-pro pre,
	html.han-biaodian-pro samp,
	html.han-biaodian-pro-cns code,
	html.han-biaodian-pro-cns kbd,
	html.han-biaodian-pro-cns pre,
	html.han-biaodian-pro-cns samp,
	code:not(:lang(zh)):not(:lang(ja)),
	code :not(:lang(zh)):not(:lang(ja)),
	kbd:not(:lang(zh)):not(:lang(ja)),
	kbd :not(:lang(zh)):not(:lang(ja)),
	pre:not(:lang(zh)):not(:lang(ja)),
	pre :not(:lang(zh)):not(:lang(ja)),
	samp:not(:lang(zh)):not(:lang(ja)),
	samp :not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro code:not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro code :not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro kbd:not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro kbd :not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro pre:not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro pre :not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro samp:not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro samp :not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro-cns code:not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro-cns code :not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro-cns kbd:not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro-cns kbd :not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro-cns pre:not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro-cns pre :not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro-cns samp:not(:lang(zh)):not(:lang(ja)),
	html.han-biaodian-pro-cns samp :not(:lang(zh)):not(:lang(ja)) {
	    font-family: monospace; /* 或使用繼承`inherit` */
	}




