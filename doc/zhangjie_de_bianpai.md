
章節的編排
========

 概述 <!-- #gaishu -->
------
「章節的編排」屬於漢字標準格式的高級排版功能，多屬與HTML5文章`article`元素相關的情境處理。

<div class='info note'>

開發者亦可藉由Sass變數`$han-article`的設定，改用其他容器選擇器取代預設的`article`，可能的設定値有`.article`、`.entry`、`.post`……等。
</div>

 文章的行高 <!-- #wenzhang_de_hanggao -->
----------
文章區塊的行高大於全域行高，預設為1.7em。可經Sass變數`$han-article-line-height`的設定調整，推薦範圍為1.5-2em間。

 文章的對齊 <!-- #wenzhang_de_duiqi -->
-----------
文章區塊預設使用齊頭尾文字對齊，可經Sass變數關閉，

```sass
$han-article-justify: false
```

 文章、章節與內容的邊界調整 <!-- #wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng -->
-----------------------
各級標題`h1-6`、段落……等群組元素預設包含上下邊界，配合使用時，文章結構將過分鬆散。「漢字標準格式」預設提供文章`article`元素內的群組元素邊界調整，保持緊湊的閱讀節奏。

**礙於篇幅，本節所有示例請見[測試範例頁·文章、章節與內容的邊界調整][well-knit]。**

[well-knit]: http://ethantw.github.io/Han/latest/well-knit.html

### 段落 <!-- #wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng-duanluo -->
文章中，段落`p`在各級標題後方時，其上邊界對標題收緊。

### 區塊引用 <!-- #wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng-qukuaiyinyong -->
文章中，區塊引用`blockquote`在各級標題後方時，上邊界對標題收緊，並縮進二個漢字的寬度，其下若包含另一個子代區塊引用`blockquote blockquote`，則子區塊引用縮進一個字元。

### 清單 <!-- #wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng-qingdan -->
文章中，有序`ol`及無序清單`ul`在各級標題後方時，上邊界對標題收緊。

### 類詩篇段落或區塊 <!-- #wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng-leishipian_duanluo_huo_ququai -->
在段落`p`或任意元素上套用類別`.poem-like`，其或其下的段落預設縮進二個漢字的寬度。類詩篇段落*不限定*在文章情境中。

### 標題 <!-- #wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng-biaoti -->

<section class='poem-like'>

小級標題對大級標題收緊、  
同級標題互相收緊；

大級標題  
不對小級標題收緊、  
一級標題  
不對一級標題收緊。
</section>

### 章節元素不受影響 <!-- #wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng-zhangjie_yuansu_bushou_yingxiang -->
上述群組元素在章節`section`元素內時，不會影響其對上級標題的收緊。

### 行動裝置上的調整 <!-- #wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng-xingdong_zhuangzhi_shang_de_tiaozheng -->
在螢幕寬度480px以下的行動裝置上，所有包含縮進的群組元素，其縮進由二個漢字寬度減為一個漢字寬度。

- 區塊引用`blockquote`
- 圖表`figure`
- 類詩篇段落`p.poem-like, .poem-like p`
- 有序`ol`及無序`ul`清單

本節所述預設値，可經由Sass變數`$han-mobile-device-width`（行動裝置最大寬度）及`$han-indent-md`（行動裝置縮進値）來調整。例如，

```sass
$han-mobile-device-width: 640px  // 行動裝置最大寬度
$han-indent-md:           1.5em  // 行動裝置縮進値
```

 章節與目錄的計數 <!-- #zhangjie_yu_mulu_de_jishu -->
---------------
此功能預設關閉，藉由下列二項Sass變數的設定，可開啓文章`article`元素（或變數`$han-article`定義之容器）的標題計數或目錄計數功能，

```sass
$han-section-counter:     true  // 標題計數
$han-section-counter-toc: true  // 目錄計數
```
**礙於篇幅，本節所有示例請見[測試範例頁·章節與目錄的計數][counter]。**

[counter]: http://ethantw.github.io/Han/latest/counter.html

<div class='info note important'>

**注意：**CDN文件不支援此功能。
</div>

開啓標題計數後，在文章容器（`article`或其他自定義容器）中，二至四級標題將自動納入計數，二級標題使用漢字數字（一二三……）標示，三、四級標題則使用「1.1」「1.2.1」數字形式，適合用於技術文獻或長篇文章。

開啓目錄計數後，文章容器內，類別為`.toc`（table of contents，目錄）的有序清單`ol.toc`元素即為該文章的目錄，其後每增加一子清單元素，即為下一級的標題名稱容器，可置於長篇文章頂部，方便跳轉及査閱。
