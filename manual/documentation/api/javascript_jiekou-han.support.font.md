
JavaScript接口[[・]]{.middle-dot}[[han.support.font()]] { #javascript_jiekou .han-support-feature }
===

<dfn class="initial">han.support.font( '[font]/[fontlist]' )</dfn>用以偵測特定字體或字體集是否為用戶端系統所提供／支援，以回傳之布林值表示。

**[API]: Application Programming Interface { :en-GB }
**[HTML]: HyperText Markup Language { :en-GB }
**[CSS]: Cascading Style Sheets { :en-GB }
**[DOM]: Document Object Model { :en-GB }


原理 { #yuanli }
---

以瀏覽器預設的_漢_{.pn}字及_拉丁_{.pn}字母無襯線字體[[fallback]]{ :en-GB }列表為「基準組」，指定字體或字體集為「比對組」，以`<canvas>`元素繪製相同字元的基準組／比對組，若二者結果完全相同，即代表比對組字體不為用戶端所支援，反之即為支援。

#### 注意事項 { #attention }
從上述原理可知，若「比對組」字體為瀏覽器或作業系統之預設字體，得之結果將為「不支援」，故此函式之結果並非完全準確，請避免用於偵測各系統上的預設字體。



使用方式 { #usage }
---

使用字體參數`[font]`來偵測指定字體或字體集是否為用戶端作業系統所支援，下方範例分別測試[[Myriad Pro]]{ :en }及華文楷體（楷體-簡），

	var font_list = [],
		supported_fonts = [];

	font_list['myriadpro'] = '"Myriad Pro"';
	font_list['stkaiti'] = '"Kaiti SC", STKaiti';

	jQuery(document).bind('ready', function(){
		for ( var font in font_list ) {
			supported_fonts[font] = ( han.support.font( font ) ) ? '支援' : '不支援';
		}
	});

**注意：**函式`han.support.font( [font] )`需在網頁完整載入後始可呼叫。



#### 測試結果

++你++的系統**[[不知道支不支援]] { .result-for-myriadpro }**[[Myriad Pro]]{ :en }，而華文楷體（楷體-簡）則**[[不知道支不支援]] { .result-for-stkaiti }**。


<script class="example">
	var font_list = [],
		supported_fonts = [];

	font_list['myriadpro'] = 'Myriad Pro';
	font_list['stkaiti'] = '"Kaiti SC", STKaiti';

	jQuery(document).bind('ready', function(){
		for ( var font in font_list ) {
			supported_fonts[font] = ( han.support.font( font_list[font] ) ) ? '支援' : '不支援';

			jQuery( '.result-for-' + font ).text( supported_fonts[font] );
		}
	});
</script>

