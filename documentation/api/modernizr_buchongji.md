
[[Modernizr]]{:en}補充集 { #modernizr_buchongji }
===


<dfn>[[Modernizr]]{:en}補充集</dfn>係<abbr lang="en-GB">CSS</abbr>框架「[Modernizr]」概念的延伸（但不包含[[Modernizr]]{:en}提供的內容）。使用[[JavaScript]]{:en}偵測系統、瀏覽器版本之特殊功能的支援與否，並在標籤`<html>`上加入相應的類別，方便以|CSS|編寫相容於不同環境或支援條件的代碼。

[Modernizr]: http://www.modernizr.com/ { :en }

**[CSS]: Cascading Style Sheets { :en }


「<u class="pn">漢</u>字標準格式」所用的<abbr lang="en-GB">CSS3</abbr>模組屬性 { #hanzibiaozhungeshi_suoyong_de_CSS3_mozu_shuxing }
---

<dfn>「_漢_ { .pn }字標準格式」所用的|CSS|3模組屬性</dfn>包括著重號`text-emphasis`、引號`quotes`、文字方向`writing-mode`、欄位寛度`column-width`。以下為使用範例：

	.textemphasis [id^=lyrics-] .singing_loudlier {
		text-emphasis:              dot;
			-moz-text-emphasis:     dot;
			-o-text-emphasis:       dot;
			-webkit-text-emphasis:  dot;
	}

	.no-textemphasis [id^=lyrics-] .singing_loudlier {
		color: red;
		font-weight: bolder;
	}



	.quotes.stands_out {  quotes: "~~" "~~" "*" "*";  }
	.quotes .stands_out:before {  content: open-quote;  }
	.quotes .stands_out:after {  content: close-quote;  }

	.no-quotes .stands_out:before {  content: "~~";  }
	.no-quotes .stands_out:after {  content: "~~";  }


