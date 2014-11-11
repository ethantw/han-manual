
 簡介
=====
「漢字標準格式」是一個集合了「[語意樣式標準化][normalise]」「[文字設計][typography]」「高級排版功能」等三大概念的網頁排版框架，使用Sass及JavaScript構架而成。其專為漢字網頁提供的美觀而標準化的環境，不僅符合傳統閱讀習慣、更為螢幕閱讀提供了既成標準，得以完整解決現今漢字網頁設計的排版需求。

[normalise]: /manual/yangshi_biaozhunhua
[typography]: /manual/wenzisheji

「漢字標準格式」支援繁體中文、簡體中文及日文等三個採用漢字的語言文字。

- [GitHub Project](https://github.com/ethantw/Han)
- [範例測試頁](//ethantw.github.io/Han/latest)
- [提issue](https://github.com/ethantw/Han/issues)
- [常見問題](/manual/faq)
- [辭彙表](/manual/glossary)

 用途與特色 <!-- #featuring -->
----------
#### 完全相容HTML5，簡潔而不冗餘 <!-- #html5-ready -->
「漢字標準格式」嚴格遵守HTML5各種元素的語意，不使用冗餘繁雜的展示性類別（<span lang='en'>presentational classes</span>），將元素的預設樣式[重新定製、標準化][normalise]，更適合漢字的書寫排印習慣。

#### 不同文字、不同字體 <!-- #character-friendly -->
配合[精細而完整的字體回退機制][fallback]，「漢字標準格式」得以依據不同的語言、文字，*以字元為單位*，套用其最合適的字體。從此標點符號不再混亂，漢字、西文、數字各得其所。

[fallback]: /manual/wenzisheji#ziti_huitui_jizhi

#### 專為「舒適閱讀」打造 <!-- #readability -->
諸多高級排版功能——如「[漢字－西文混排間隙][hws]」「[標點擠壓][jiya]」「[章節邊界調整][well-knit]」……等——皆為舒適閱讀打造，體驗如若印刷品般的螢幕閱讀。

[hws]: /manual/hang_de_zucheng#hanzi-xiwen_hunpai_jianxi
[jiya]: /manual/hang_de_zucheng#biaodian_jiya
[well-knit]: /manual/zhangjie_de_bianpai#wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng

#### 以設計流線、而非像素呈現 <!-- #non-pixel-design -->
「漢字標準格式」重視語意、設計流線和彈性，所有樣式的呈現皆避免了以像素為單位的靜態設計。

 瀏覽器支援 <!-- #browser-support -->
----------
- Google Chrome（最新版）
- Mozilla Firefox（最新版）
- Opera Next（最新版）
- Apple Safari 7+
- Internet Explorer 10+

 授權方式 <!-- #license -->
---------
「漢字標準格式」採用MIT License授權。

```
http://css.hanzi.co/LICENSE.md
```

## 參閱 <!-- #reference -->
### 使用「漢字標準格式」的網站 <!-- #used-by -->
- [萌典](https://moedict.tw/)
- [IT公論](http://itgonglun.com/)
- [g0v零時政府](http://g0v.tw/)
- [Markdown中文語法說明](http://markdown.tw/)

### 類似的解決方案 <!-- #similar-solutions -->
- [Entry.css](http://nodejs.in/Entry.css/)

<p id='tweets-about-han'><a class="twitter-timeline" href="https://twitter.com/ethantw/timelines/419245224007696385" data-widget-id="529469943549419521">關於「漢字標準格式」的回響及推文</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
