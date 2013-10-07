
JavaScript接口 { #javascript_jiekou }
====

「漢字標準格式」提供了下列4項與本框架或_漢_{.pn}字排版相關的JavaScript開放接口，設計師可藉這些|API|，搭配|HTML|及|CSS|，補足排版效果的不足。

**[API]: Application Programming Interface { :en-GB }
**[CSS]: Cascading Style Sheets { :en-GB }
**[HTML]: HyperText Markup Language { :en-GB }

---


<div class="api">

<a href="api/javascript_jiekou-jquery.charize">
<article markdown="1">
# jQuery(selector).charize()

將_漢_{.pn}字、_拉丁_{.pn}字符及各種標點符號等字元，按需求分割、包裹在文字範圍元素`<span>`中，並以類別屬性`class`區分，使設計師得依不同的情況調整各字元之樣式。
</article>
</a>



<!--<a href="api/javascript_jiekou-han.convert">
<article markdown="1">
# jQuery(selector).hanInit()

將原始|HTML|代碼轉換成可完整支援樣式集`han.css`的代碼，適用於|DOM|更動後，新加入的元素或文字範圍。
</article>
</a>-->




<a href="api/javascript_jiekou-han.support.feature">
<article markdown="1">
# han.support.\[feature\]()

偵測不同的功能（`[feature]`）是否為用戶端瀏覽器或系統所支援，以回傳之布林值表示。
</article>
</a>



<a href="api/javascript_jiekou-han.support.font">
<article markdown="1">
# han.support.font()

偵測特定字體或字體集是否為用戶端系統所提供／支援，以回傳之布林值表示。
</article>
</a>



<a href="api/javascript_jiekou-han.unicode">
<article markdown="1">
# han.unicode( range )

包含着_漢_{.pn}字、注音符號、_拉丁_{.pn}字母、標點符號等萬國碼區段字元集函式。
</article>
</a>

</div>

**[DOM]: Document Object Model { :en-GB }










