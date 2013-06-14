
Markdown: Créma { #markdown-crema :en-GB }
===


為了::更完整地::使用|HTML|5中的各種[字級語意元素][text-level]，「[Markdown: Créma][MC]」新增了下列數種符號的使用功能。其中包含「分立」自原有[[Markdown]]{ :en-GB }的語法符號，使用上請特別留意。

[text-level]: http://www.w3.org/TR/html5/text-level-semantics.html
[MC]: http://ethantw.net/projects/markdown-crema/
**[HTML]: HyperText Markup Language { :en }



包含特殊屬性的文字範圍 { #baohan_teshu_shuxing_de_wezi_fanwei }
---

如下方代碼所示，使用一對++角括號++（`[[文字]]`）來包裹一小節文字範圍`<span>`，並在其後以大括號`{}`定義該小節文字的屬性（可使用類|CSS|式縮寫）。識別ID、類別及語言設定等三種屬性皆可選擇性使用，你甚至可不加上大括號`{}`，讓[[Markdown]]{:en-GB}直接輸出`<span> … </span>`。

**[CSS]: Cascading Style Sheets { :en }

	[[un intervalo de texto lapso]] { #id .class1.class2 :es }

上方代碼將輸出為：

	<span id="id" class="class1 class2" lang="es">un intervalo de texto lapso</span>


直接在下列[[Markdown]]{:en-GB}元素符號後方加上`{}`，亦可輸出各種屬性於該元素中。

#### 區塊元素

* 標題（`===`、`---`、`#`）
* 圍籬式代碼區塊（`~~~`）
* 引用區塊（`>`）


#### 字級元素

* 連結
* 圖片
* 縮寫
* 強調及重點（`*`、`**`）
* 註記及凸顯（`_`、`__`）
* 變音（`::`）
* 關鍵字（`++`）




註記及凸顯元素 { #zhuji_ji_tuxian_yuansu }
---

使用一組++半形底線++（`_文字_`）來包裹_一小節註記文字範圍_（`<u>`），預設的瀏覽器樣式將顯示此小節為「底線」；或使用一組++半形雙底線++（`__文字__`）包裹__一小節凸顯文字範圍__（`<mark>`），預設的瀏覽器樣式將以「黃底黑字」顯示這一小節。

第一個範例使用註記元素標示錯別字。

	那個展覽我想晚點_在_去。

輸出為：

	那個展覽我想晚點<u>在</u>去。


第二個代碼範例，以凸顯元素凸顯引言裡上下文探討的的主要字詞。

	試讀下列這段文字：

	>{ :zh-hant-CN } 這款__屏幕__的顯示效果很好。

	儘管開啓了繁簡自動轉換功能，我們仍然可以從文章的字詞選用中發現，作者應該來自中國大陸。

輸出的|HTML|：

	<p>試讀下列這段文字：</p>

	<blockquote lang="zh-hant-CN">
		<p>這款<mark>屏幕</mark>的顯示效果很好。</p>
	</blockquote>

	<p>儘管開啓了繁簡自動轉換功能，我們仍然可以從文章的字詞選用中發現，作者應該來自中國大陸。</p>

**注意：**在普通版本的[[Markdown]]{:en-GB}中，一組半形（雙）底線的功能*同等於*一組（雙）星號（`*強調*`、`**重點**`），在使用[[Markdown: Créma]]{:en-GB}時務必分別二者的功能。




變音元素 { #bianyin_yuansu }
---

使用一對++半形冒號++（`::文字::`）來包裹::一小節變音文字範圍::。預設的瀏覽器樣式將顯示此小節為「斜體」；_漢_{.pn}字標準格式則依照語言的不同設定，顯示不同於原段落（父元素）的字體或樣式。範例使用變音元素標示外來語。

	對於那張差一個號碼的彩劵，我一直感到很::残念:: { :jp }。


輸出為：

	對於那張差一個號碼的彩劵，我一直感到很<i lang="jp">残念</i>。


**注意：**請仔細選用適合該小節文字的語意元素，「變音元素」不可同「強調元素」（`*文字*`）混用。如下方第二個範例，這是_英_{ .pn }文排版中「船名使用斜體」的規定，這個情況便不適合使用「強調」。

	::Tsimtsum:: had been sunk for weeks by then.


輸出為：

	<i>Tsimtsum</i> had been sunk for weeks by then.



關鍵字元素 { #guanjianzi_yuansu }
---

使用一對++半形加號++（`++文字++`）來包裹++一個關鍵字範圍++。預設的瀏覽器樣式將顯示此小範圍為「粗體」。下方示範關鍵字的標示。

	我早已習慣用++行動裝置++來處理日常生活中的大小事。

輸出為：

	我早已習慣用<b>行動裝置</b>來處理日常生活中的大小事。


**注意：**請仔細選用適合該小節文字的語意元素，「關鍵字元素」不可同「重點元素」（`**重點**`）混用。



縮寫元素 { #suoxie_yuansu }
---

為了讓「縮寫」功能得以正常地在_漢_{.pn}字等「無空格」的語言或情況中被解析，[[Markdown: Créma]]{.en-GB}採用了不同於[Markdown Extra]的縮寫寫法。使用一組++半形分隔直線++（`|文字|`）來包裹一小節縮寫文字範圍，並在該段落的後方以「參考式連結」的方式，前方加上一星號`*`，後方再加上原始拼寫或原名。

[Markdown Extra]: http://michelf.ca/projects/php-markdown/extra/ { :en }

~~~ { :en-GB }
The |abbrev.| forms for ‘alternative’ are ‘alt’ or ‘alter’.

*[abbrev.]: abbreviation
~~~

將輸出為：

	The <abbr title="abbreviation">abbrev.</abbr> forms for ‘alternative’ are ‘alt’ or ‘alter’.


### 首字母縮寫 { #shouzimu_suoxie }

在|HTML|5規範書中，已將「首字母縮寫」元素（`<acronym>`）合併至縮寫元素（`<abbr>`）。於「縮寫定義字詞」的角括號前方使用一組++雙星號++（`**`），將會在代碼轉換時，於元素`abbr`中加入一類別`class="acronym"`，以方便區分。需要注意的是，這個區分方式*絕非必要*，但可以方便你在樣式表或其他|DOM|處理接口上更有彈性地運用此元素（比如在_漢_{.pn}字直書文字中，可為首字母縮寫的西文字詞編排合適的文字轉向）。在考量成本及效率後，你可以勘酙選用這個語法規則。

**[DOM]: Document Object Model { :en }


	|P.S.| 相信你到了|中研院|後定會有很好的發展。

	**[P.S.]: post script { :en-GB .ps }
	**[中研院]: 中央研究院

將輸出為：

	<abbr class="ps acronym" lang="en-GB" title="post script">P.S.</abbr> 相信你到了<abbr class="acronym" title="中央研究院">中研院</abbr>後定會有很好的發展。




