
<section class='self-contained'>

 功能與字體支援偵測 <!-- #support -->
-----------------
### Han.support <!-- #Han-support -->
對象（object），其下所包含各項目之値（布林値）表示該項目是否為使用者瀏覽器所支援。

- `Han.support.ruby`（基本行間注，HTML）
- `Han.support.fontface`（CSS3）
- `Han.support.unicoderange`（CSS3 @font-face）
- `Han.support.columnwidth`（CSS3）
- `Han.support.textemphasis`（CSS3）
- `Han.support.writingmode`（CSS3）

### Han.isCombLigaNormal <!-- #Han-isCombLigaNormal -->
布林値，瀏覽器是否正常支援web font「組合合字」（combining ligature）功能，需在字體檔案`han.woff`正常載入的情況下，方回傳正確的偵測結果。

### Han.isNodeNormalizeNormal <!-- #Han-isNodeNormalizeNormal -->
布林値，IE11的`Node.prototype.normalize()`方法可能導致錯誤，調用此變量可瞭解該方法在使用者瀏覽器上是否正常運行。

### Han.detectFont( treat[, control, text] ) <!-- #Han-detectFont -->
函數方法。用於偵測字體是否為使用者作業系統所支援，其回傳値為一布林値。

<div class='info parameter'>

#### 參數說明
<dl>
<dt><code>treat</code>
<dd>

字串。實驗組字體名稱（列表）。

<dt><code>control</code>
<dd>

字串，選用。對照組字體名稱（列表），預設値為無襯線`'sans-serif'`基型。

<dt><code>text</code>
<dd>

字串，選用。比對二組字體的實驗文字，預設値為包含漢字及拉丁字母的`'辭Q'`。
</dl>
</div>

<!--
<script>
window.addEventListener( 'DOMContentLoaded', function() {
  for ( prop in Han ) {
    if ( Han.hasOwnProperty( prop )) {
      console.log( prop, Han[prop] )
    }
  }
})
</script>-->

</section>
