
章節的編排
========

 文章、章節與內容的邊界調整 <!-- #wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng -->
-----------------------
各級標題`h1-6`、段落……等群組元素預設包含上下邊界，配合使用時，文章結構將過分鬆散。「漢字標準格式」預設提供文章`article`元素內的群組元素邊界調整，保持緊湊的閱讀節奏。

<div class='info note'>

開發者亦可藉由Sass變數`$han-article`的設定，改用其他容器選擇器取代預設的`article`，可能的設定値有`.article`、`.entry`、`.post`……等。
</div>

### 標題 <!-- #wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng-biaoti -->
### 段落 <!-- #wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng-duanluo -->
### 引用區塊 <!-- #wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng-yinyongqukuai -->
### 清單 <!-- #wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng-qingdan -->
### 類詩篇 <!-- #wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng-leishipian -->
### 後代與同輩章節元素的異同 <!-- #wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng-houdai_yu_tongbei_zhangjie_yuansu_de_yitong -->
### 行動裝置上的調整 <!-- #wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng-xingdong_zhuangzhi_shang_de_tiaozheng -->

 章節與目錄的計數 <!-- #zhangjie_yu_mulu_de_jishu -->
---------------
此功能預設關閉，藉由下列二項Sass變數的設定，可開啓文章`article`元素（或變數`$han-article`定義之容器）的標題計數或目錄計數功能，

```sass
$han-section-counter:     true  // 標題計數
$han-section-counter-toc: true  // 目錄計數
```

開啓標題計數後，在文章容器（`article`或其他自定義容器）中，二至四級標題將自動納入計數，二級標題使用漢字數字（一二三……）標示，三、四級標題則使用「1.1」「1.2.1」數字形式，適合用於技術文獻或長篇文章。

開啓目錄計數後，文章容器內，類別為.toc（table of contents，目錄）的有序清單`ol.toc`元素即為該文章的目錄，每增加一子清單元素，即為下一級的標題名稱容器，可置於長篇文章頂部，方便跳轉及査閱。
