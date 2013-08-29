
JavaScript接口[[・]]{.middle-dot}[[han.characterize()]] { #javascript_jiekou .han-characterize }
===

<dfn class="initial">han.characterize( [content], [glyph] )</dfn>可將_漢_{.pn}字、_拉丁_{.pn}字符及各種標點符號等字元，按需求分割、包裹在文字範圍元素`<span>`中，並以類別屬性`class`區分，使設計師得依不同的情況調整各字元之樣式。


---

將一段文字或代碼以變量`[content]`代入`han.characterize( [content], [glyph] )`後，該函式將依|JSON|變量`[glyph]`處理`[content]`的各_漢_{.pn}字與_拉丁_{.pn}字詞，最後回傳以`<span class="[glyph]"></span>`元素包裹之|HTML|代碼。

**[HTML]: HyperText Markup Language { :en }
**[JSON]: JavaScript Object Notation { :en }

範例如下，

	var test = '我們<span lang="en-GB">definitely</span><em>沒有</em>湮滅證據。',
	characterized = han.characterize( test );

	console.log( characterized );


將得到下列結果，

	<span class="cjk">我</span><span class="cjk">們</span><span lang="en-GB"><span class="latin">definitely</span></span><em><span class="cjk">沒</span><span class="cjk">有</span></em><span class="cjk">湮</span><span class="cjk">滅</span><span class="cjk">證</span><span class="cjk">據</span><span class="cjk biaodian">。</span><!---->

<script class="example">
	var test = '我們<span lang="en-GB">definitely</span><em>沒有</em>湮滅證據。',
	characterized = han.characterize( test );

	console.log( characterized );
</script>

















