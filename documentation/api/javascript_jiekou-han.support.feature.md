<style scope>
.usage:after {
	content: '\f101';
	font-family: FontAwesome, sans-serif;
	font-size: 1.1em;
	font-style: normal;
	font-weight: normal;
	margin-left: .25em;
	text-decoration: inherit;
	vertical-align: .03em;
	-webkit-font-smoothing: antialiased;
}
</style>


JavaScript接口[[・]]{.middle-dot}[[han.support.\[feature\]]] { #javascript_jiekou .han-support-feature }
===

<dfn class="initial">han.support.\[feature\]</dfn>用以偵測各種同_漢_字排版相關的|HTML|5／|CSS|3功能，是否為用戶端瀏覽器或系統所支援，以回傳之布林值表示。

**[API]: Application Programming Interface { :en-GB }
**[HTML]: HyperText Markup Language { :en-GB }
**[CSS]: Cascading Style Sheets { :en-GB }
**[DOM]: Document Object Model { :en-GB }

***


<abbr>CSS</abbr>3屬性 | 全域函式
-- | --
column-width | `han.support.columnwidth()`
font-face | `han.support.fontface()`
text-emphasis | `han.support.textemphasis()`
quotes | `han.support.quotes()`
writing-mode | `han.support.writingmode()`



<abbr>HTML</abbr>5元素 | 全域函式
-- | --
&lt;ruby&gt; | `han.support.ruby()`


指定字體／字體集 | 全域函式 | 備註
-- | -- | --
::font(s):: | `han.support.font( [font(s)] )` | [使用方式][font-detector-usage]

[font-detector-usage]: api/javascript_jiekou-han.support.font { .usage }


***


#### 使用方式 

直接呼叫功能偵測函式`han.support.[feature]()`，所得之布林值即表示用戶端瀏覽器是否支援該功能。









