
各類字體與字體集 { #gelei_ziti_ji_zitiji }
===


「漢字標準格式」提供了針對各系統優化的「<span style="font-family: 'Han Heiti', sans-serif;">黑</span>、<span style="font-family: 'Han Songti', serif;">宋（明）</span>、<span style="font-family: 'Han Kaiti', cursive, serif;">楷</span>、<span style="font-family: 'Han Fangsong', cursive, serif;">仿宋</span>」共++四種_中_{ .pn }文字體集++及「國語注音符號楷體」、「標點符號」字體集等。藉由不同字體種類的搭配，你可以設計出各式精美的排版效果。

<strong>註：</strong>多數行動裝置<em>僅支援</em>黑體。


使用方式 { #shiyong_fangshi }
---

<p class="poem-like" markdown="1">直接於<abbr lang="en-GB">CSS</abbr>字體宣告中引用字體集名稱。<br>
黑：`'Han Heiti'`；<br>
宋：`'Han Songti'`；<br>
楷：`'Han Kaiti'`；<br>
仿宋：`'Han Fangsong'`。<br>
試讀以下範例代碼，</p>



	article:lang(zh) {
		font-family: 'Biaodian Pro Serif', 'Han Songti', 'SC Songti', PMingLiU, SimSun, serif;
	}

國語注音符號（楷體）：`'Han Zhuyin'`

	.mps {
		font-family: 'Han Zhuyin', 'Han Kaiti', '標楷體', cursive, serif;
	}

雖然現時的瀏覽器皆支援「_漢_{ .pn }字標準格式」提供的字體集功能，我們仍然建議設計師使用適當的字體[[fallback]]{ :en-GB }（如上述代碼範例所示），確保在各種系統或瀏覽器上能有最大的支援度與一致性。

另關於標點符號字體的設定，請參閱<cite class="piece">[標點符號樣式·啓用方式](./)</cite>。