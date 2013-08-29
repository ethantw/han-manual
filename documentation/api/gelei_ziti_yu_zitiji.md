<style scoped>
table thead th:nth(n+2) {
	width: 18.75%;
}
</style>


各類字體與字體集 { #gelei_ziti_yu_zitiji }
===


「漢字標準格式」提供了針對各系統優化的「<span style="font-family: 'Han Heiti', sans-serif;">黑</span>、<span style="font-family: 'Han Songti', serif;">宋（明）</span>、<span style="font-family: 'Han Kaiti', cursive, serif;">楷</span>、<span style="font-family: 'Han Fangsong', cursive, serif;">仿宋</span>」[++四大_漢_{ .pn }字字體集++][the-4]及「[國語注音符號字體][zhuyin]」、「[西文_義大利_{.pn}體（斜體）][italic]」、「標點符號」字體等。藉由不同字體種類的搭配，設計師可以設計出各式精美的排版效果。

<strong>註：</strong>多數行動裝置<em>僅支援</em>黑體。

[the-4]: api/gelei_ziti_yu_zitiji#sida_zitiji
[zhuyin]: api/gelei_ziti_yu_zitiji#zhuyin_fuhao
[italic]: api/gelei_ziti_yu_zitiji#xiwen_yidaliti



四大字體集 { #sida_zitiji }
---

直接於<abbr lang="en-GB">CSS</abbr>字體宣告中引用字體集名稱，如下附表所示。



地區字形標準 | <span style="font-family: 'Han Heiti', sans-serif; font-weight: normal;">黑體</span> | <span style="font-family: 'Han Songti', serif; font-weight: normal;">宋（明）體</span> | <span style="font-family: 'Han Kaiti', cursive, serif; font-weight: normal;">楷體</span> | <span style="font-family: 'Han Fangsong', cursive, serif; font-weight: normal;">仿宋</span>
---- | ---- | ---- | ---- | ----
預設 | `'Han Heiti'` | `'Han Sonti'` | `'Han Kaiti'` | `'Han Fangsong'`
_台灣教育部_{.pn}標準字形 | | | `'Han Kaiti CNS'` | 
_中國_{.pn}國家標準字形 | | | `'Han Kaiti GB'` | 


試讀以下範例代碼，使用「宋（明）體」。

	article:lang(zh) {
		font-family: 'Biaodian Pro Serif', 'Han Songti', 'SC Songti', PMingLiU, SimSun, serif;
	}


### 注音符號 { #zhuyin_fuhao }

使用字體「`'Han Zhuyin Cursive'`」（手寫楷體）或「`Han Zhuyin Sans`」（黑體），以顯示正確的「注音符號」。

	span.mps {
		font-family: 'Han Zhuyin Curisve', '標楷體', cursive, serif;
	}

**注意：**為了在各種瀏覽環境或系統顯示一致的注音符號字體，「_漢_{.pn}字標準格式」使用`@font-face`外連注音符號字體檔案。而此處所使用的注音符號字體係為_中華民國教育部_{.pn}所研發的「[教育部標準楷書][kai]」，並**採[創用CC「姓名標示–禁止改作–3.0_台灣_{.pn}版」][cc]授權**。

[kai]: http://www.edu.tw/treasure/filedown.aspx?Node=1123&Index=2&WID=c5ad5187-55ef-4811-8219-e946fe04f725
[cc]: http://creativecommons.org/licenses/by-nd/3.0/tw/



西文義大利體 { #xiwen_yidaliti }
---

設計師可以任意調用使用於「[變音文字][alternative]」`<i>`元素的西文_義大利_{.pn}體（斜體），以符合排版需用。分為襯線「`'Latin Italic Serif'`」及非襯線「`'Latin Italic Sans'`」二種。

[alternative]: hanzi_biaozhun_geshi/bianyin_wenzi


	span.italic {
		font-family: 'Biaodian Pro Serif', 'Latin Italic Serif', Georgia, 'Han Kaiti', STKaiti, '標楷體', DFKaiShu-SB-Estd-BF, cursive, serif;
		font-style: normal;
	}	



---

雖然現時標準的瀏覽器皆支援「_漢_{ .pn }字標準格式」提供的字體集功能，我們仍然建議設計師使用適當的字體[[fallback]]{ :en-GB }（如上述各範例代碼所示），確保在各種系統或瀏覽器上能有最大的支援度與一致性。

另關於標點符號字體的設定，請參閱<cite class="piece">[標點符號樣式·啓用方式](./)</cite>。


