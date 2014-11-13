
 章節的編排 <!-- #sectional -->
----------
### 章節的計數 <!-- #sectional-counter -->
若欲在非「文章區塊容器」（預設為文章`article`元素）中使用章節的計數功能，直接混用`han-section-counter`即可。套用後，容器內二至四級標題將自動納入計數，二級標題使用漢字數字（一二三……）標示，三、四級標題則使用「1.1」「1.2.1」數字形式，適合用於技術文獻或長篇文章。

```scss 
@include han-section-counter( $toc: false );
```

<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>$toc</code></dt>
<dd>

使用目錄清單與否，預設關閉。開啓後，容器下類別為`.toc`的有序清單`ol`元素即作為該容器的目錄，其後每增加一子清單元素，即為下一級的標題名稱容器，可置於長篇文章頂部，方便跳轉及査閱。
</dd>
</dl>
</div>

示例請見[測試範例頁·章節與目錄的計數][counter]。

[counter]: http://ethantw.github.io/Han/latest/counter.html
