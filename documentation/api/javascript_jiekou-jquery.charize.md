
[[$(selector).charize()]] { #javascript_jiekou .jquery-charized  }
===

<dfn class="initial">jQuery(selector).charize( [glyph, charClass, innerSpan] )</dfn>可將_漢_{.pn}字、_拉丁_{.pn}字符及各種標點符號等字元，按需求分割、包裹在文字範圍元素`<span>`中，並以類別屬性`class`區分，使設計師得依不同的情況調整各字元之樣式。


---

使用jQuery選擇器指定目標DOM元素（`<body>`或其內後代元素，且不得為`<script>`或`<style>`），再套入`.charize()`方法，最後，`charize`方法會將目標元素內的所有文字以`<span>`元素包裹，並依語言文字種類加入其萬國碼類別（`class`）。

**[HTML]: HyperText Markup Language { :en }
**[JSON]: JavaScript Object Notation { :en }

範例如下，

	<p class="foo">
		<u class="pn">英</u>語單字<span lang="en-GB">‘character’</span>有5種以上的<u class="pn">中</u>文解釋——「字符」是其中一種。
	</p>

	<script>
	$('.foo').charize();
	</script>

將得到下列結果，

	<p class="foo">
		<u class="pn"><span class="char cjk">英</span></u><span class="char cjk">語</span><span class="char cjk">單</span><span class="char cjk">字</span><span lang="en-GB"><span class="bitouwei bitouweidian"><span class="bitouwei biweidian"><span class="char cjk biaodian"><span class="char latin punc">‘</span></span></span><span class="bitouwei bitoudian"><span class="bitouwei biweidian"><span class="char latin">character</span></span><span class="char cjk biaodian"><span class="char latin punc">’</span></span></span></span></span><span class="char cjk">有</span><span class="char latin">5</span><span class="char cjk">種</span><span class="char cjk">以</span><span class="char cjk">上</span><span class="char cjk">的</span><u class="pn"><span class="char cjk">中</span></u><span class="char cjk">文</span><span class="char cjk">解</span><span class="bitouwei bitoudian"><span class="char cjk">釋</span><span class="char cjk biaodian">—</span></span><span class="char cjk biaodian">—</span><span class="bitouwei biweidian"><span class="char cjk biaodian">「</span><span class="char cjk">字</span></span><span class="bitouwei bitoudian"><span class="char cjk">符</span><span class="char cjk biaodian">」</span></span><span class="char cjk">是</span><span class="char cjk">其</span><span class="char cjk">中</span><span class="char cjk">一</span><span class="bitouwei bitoudian"><span class="char cjk">種</span><span class="char cjk biaodian">。</span></span>
	</p>




變量 { #argument }
---

函式的三個變量皆為可選填的項目，

	[glyph, charClass, innerSpan]



#### glyph

變量`glyph`為一JSON字串，其下包含，

	{
		cjk: 'individual',
		'bitouwei': true,
		latin: 'group'
	}

以上為預設的設置，++漢字++`glyph.cjk`（包含_日_{.pn}語假名但不含注音符號）及++拉丁字母及數字++`glyph.latin`皆可選用「單字符」`individual`或「群組」`group`模式。++避頭尾點++變量`glyph.bitouwei`預設開啓，亦可選擇關閉`false`。



#### charClass

此變量以布林值控制，預設關閉。開啓後，選取之元素將加入類別`'han-js-charized'`以同其餘未經`.charize()`方法包裹文字之元素區分。



#### innerSpan

此變量以布林值控制，預設關閉。開啓後，將在選取之元素下各個`.char`文字範圍元素內以一個`<span>`元素再行包裹文字，方便樣式編排。









