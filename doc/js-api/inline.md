
 行的組成 <!-- #inline -->
---------

### Han.fn.renderHanging() <!-- #renderHanging -->
處理Han實例範圍內的「[行尾點號懸掛](/manual/hang_de_zucheng#hangwei_dianhao_xuangua)」。

### Han.fn.revertHanging() <!-- #revertHanging -->
回退Han實例範圍內，行尾點號懸掛修正前的DOM結構。

### Han.fn.renderJiya() <!-- #renderJiya -->
處理Han實例範圍內的「[標點擠壓](/manual/hang_de_zucheng#biaodian_jiya)」。

### Han.fn.revertJiya() <!-- #revertJiya -->
回退Han實例範圍內，標點擠壓修正前的DOM結構。

### Han.fn.renderHWS( [strict] ) <!-- #renderHWS -->
處理Han實例範圍內的「[漢字－西文混排間隙](/manual/hang_de_zucheng#hanzi-xiwen_hunpai_jianxi)」。

<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>strict</code>
<dd>

布林値，選用。是否啓用嚴格模式。預設為否。
</dl>
</div>

### Han.fn.revertHWS() <!-- #revertHWS -->
回退Han實例範圍內，漢字－西文混排間隙修正前的DOM結構。

<div class='info note important'>

**注意：**此方法並非嚴格的finder回退，可能導致非預期的結果，請謹慎使用。
</div>

### Han.fn.correctBasicBD( [all] ) <!-- #correctBasicBD -->
處理Han實例範圍內的「[標點樣式修正](/manual/wenzisheji#biaodian_yangshi_xiuzheng)」（瀏覽器不支援CSS3 @font-face的`unicode-range`屬性時啓用，如Mozilla Firefox）。

<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>all</code>
<dd>

布林値，選用。是否在支援CSS3 `unicode-range`屬性的瀏覽器下亦進行修正。預設為否。
</dl>
</div>
 
### Han.fn.revertBasicBD() <!-- #revertBasicBD -->
回退Han實例範圍內，標點樣式修正前的DOM結構。

### Han.fn.substCombLigaWithPUA() <!-- #substCombLigaWithPUA -->
處理Han實例範圍內的「[變音組字符](/manual/hang_de_zucheng#ziyuan_de_tihuan)」（瀏覽器無法正常顯示變音組字符時啓用，如IE）。

### Han.fn.revertCombLigaWithPUA() <!-- #revertCombLigaWithPUA -->
回退Han實例範圍內，修正變音組字符前的DOM結構。
