
 行的組成 <!-- #inline -->
---------

### Han.fn.renderJiya() <!-- #renderJiya -->
處理Han實例範圍內的「[標點擠壓](/manual/hang_de_zucheng#biaodian_jiya)」。

### Han.fn.revertJiya() <!-- #revertJiya -->
回退Han實例範圍內，標點擠壓修正前的DOM結構。

### Han.fn.renderHWS( [strict] ) <!-- #renderHWS -->
處理Han實例範圍內的「[漢字－西文混排間隙](/manual/hang_de_zucheng#hanzi-xiwen_hunpai_jianxi)」。

#### 參數說明
<dl>
<dt><code>strict</code>
<dd>

布林値，選用。是否啓用嚴格模式。預設為否。
</dl>

### Han.fn.revertHWS() <!-- #revertHWS -->
回退Han實例範圍內，漢字－西文混排間隙修正前的DOM結構。

### Han.fn.correctBasicBD( [all] ) <!-- #correctBasicBD -->
處理Han實例範圍內的「[標點樣式修正](/manual/wenzisheji#biaodian_yangshi_xiuzheng)」（瀏覽器不支援CSS3 @font-face的`unicode-range`屬性時啓用，如Mozilla Firefox）。

#### 參數說明
<dl>
<dt><code>all</code>
<dd>

布林値，選用。是否在支援CSS3 `unicode-range`屬性的瀏覽器下亦進行修正。預設為否。
</dl>
 
### Han.fn.revertBasicBD() <!-- #revertBasicBD -->
回退Han實例範圍內，標點樣式修正前的DOM結構。

### Han.fn.substCombLigaWithPUA() <!-- #substCombLigaWithPUA -->
處理Han實例範圍內的「[組合合字](/manual/hang_de_zucheng#ziyuan_de_tihuan)」（瀏覽器無法正常顯示組合合字時啓用，如IE）。

### Han.fn.revertCombLigaWithPUA() <!-- #revertCombLigaWithPUA -->
回退Han實例範圍內，組合合字修正前的DOM結構。
