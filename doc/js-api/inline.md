
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

### Han.fn.jinzify() <!-- #jinzify -->
為Han對象上的指定範圍加入標點禁則處理。

<div class='info note'>

一般情況下，瀏覽器可以正常套用標點禁則，毋須使用此方法。
</div>

#### 代碼示例
##### 禁則處理前
```html
<div id='container-to-jinzify'>
  <p>林·菲利認為，身為一個「航海家」，這是不可寬恕的過錯。
</div>
```

JavaScript腳本，
```javascript
Han( document.getElementById( 'container-to-jinzify' ))
.jinzify()
```

##### 禁則處理後
```html
<div id='container-to-jinzify'>
   <p><jinze class="middle">林·菲</jinze>利認<jinze class="wei">為，</jinze>身為一個<jinze class="tou">「航</jinze>海<jinze class="wei">家」，</jinze>這是不可寬恕的過<jinze class="wei">錯。</jinze></p>
</div>
```

相應的CSS樣式，

```css
jinze {
    display: inline-block;
    text-indent: 0
}
```

### Han.fn.charify( [option] ) <!-- #charify -->
依選項或預設設定為Han對象上的指定範圍進行字元包裹，實現「字級選擇器」。


<div class='info note'>

搭配[禁則處理方法`Han.fn.jinzify()`](#jinzify)，可達到更佳的效果。
</div>

<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>option</code>
<dd>

對象，選用。詳細設定見本小節「[option對象說明](#charify-option)」。
</dl>
</div>

#### option對象說明及其預設値 <!-- #charify-option -->
```javascript
{
  // 漢字包裹方式
  // individual || group || biaodian || none
  hanzi:     'individual',
  
  // 連續標點（漢字破折號或省略號）的包裹方式
  // liga || none            
  liga:      'liga',
  
  // 西文單字詞包裹方式
  // group || none           
  word:      'group',

  // 拉丁字母包裹方式
  // group || individual || none
  latin:     'group',

  // 希臘字母包裹方式
  // group || individual || none
  ellinika:  'group',

  // 西里爾字母包裹方式
  // group || individual || none
  kirillica: 'group'
}
```

#### 代碼示例
##### 字級選擇器處理前
```html
<div id='char-level-selector'>
  
</div>
```

JavaScript腳本，
```javascript
Han( document.getElementById( 'char-level-selector' ))
.jinzify() // 若搭配「禁則處理」，請在`charify()`方法前使用
.charify()
```

##### 字級選擇器處理後
```html
<div id='char-level-selector'>
  
</div>
```
