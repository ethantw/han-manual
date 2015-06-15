
<section class='self-contained'>

 詞組、字級選擇器 <!-- #selector -->
---------------

### Han.fn.groupify( [option] ) <!-- #groupify -->
依選項為Han對象上的指定範圍進行詞或組的包裹，實現「詞組選擇器」。

<div class='info note'>

若需同時調用，方法`groupify()`應調用於方法`charify()`*之前*，方能取得預期結果。
</div>

#### option及其預設値 <!-- #charify-option -->
```javascript
{
  // 漢字標點（以`h-char-group`元素包裹）
  biaodian: false,

  // 漢字（包含假名，以`h-char-group`元素包裹）
  // 或使用鍵名`cjk`
  hanzi: false,

  // 假名（以`h-char-group`元素包裹）
  kana: false,

  // 諺文（詞組，以`h-word`元素包裹）
  // 或使用鍵名`hangul`
  eonmun: false,

  // 西文詞（詞組，以`h-word`元素包裹）
  // 包含拉丁字母、希臘字母、西里爾字母及西文標點組成的詞組
  western: false
}
```

#### 代碼示例
詞組選擇器處理前，
```html
<div id="example">
  <p>「你好」！
  <p>「こんにちは」、"안녕하세요."
  <p>‘Hello World’, «Γειά Σου Κόσμε», 'привет мир'.
</div>
```

JavaScript代碼示例，

```javascript
Han( document.getElementById( 'example' ))
.groupify({
  biaodian: true,
  hanzi: true,
  kana: true,
  eonmun: true,
  western: true
})
```

詞組選擇器處理後，
```html
<div id="example">
  <p>「<h-char-group class="hanzi cjk">你好</h-char-group><h-char-group class="biaodian cjk">」！</h-char-group>
  <p>「<h-char-group class="hanzi cjk">こんにちは</h-char-group><h-char-group class="biaodian cjk">」、</h-char-group><h-word class="eonmun hangul">"안녕하세요."</h-word></p>
  <p><h-word class="western">‘Hello</h-word> <h-word class="western">World’,</h-word> <h-word class="western">«Γειά</h-word> <h-word class="western">Σου</h-word> <h-word class="western">Κόσμε»,</h-word> <h-word class="western">'привет</h-word> <h-word class="western">мир'</h-word></p>
</div>
```

### Han.fn.charify( [option] ) <!-- #charify -->
依選項或預設設定為Han對象上的指定範圍進行字元包裹，實現「字級選擇器」。

<div class='info note'>

若需同時調用，方法`groupify()`應調用於方法`charify()`*之前*，有較佳效果。
</div>

#### option及其預設値 <!-- #charify-option -->
```javascript
{
  // 漢字標點
  biaodian: false,

  // 西文標點
  punct: false,

  // 漢字（包含假名）
  // 或使用鍵名`cjk`
  hanzi: false,

  // 拉丁字母
  latin: false,

  // 希臘字母 
  // 或使用鍵名`greek`
  ellinika: false,

  // 西里爾字母
  // 或使用鍵名`cyrillic`
  kirillica: false,

  // 假名
  kana: false,

  // 諺文
  // 或使用鍵名`hangul`
  eonmun: false
}
```

#### 代碼示例
##### 字級選擇器處理前
```html
<div id="example">
  <p>「你好」！
  <p>「こんにちは」、"안녕하세요."
  <p>‘Hello World’, «Γειά Σου Κόσμε», 'привет мир'.
</div>
```

JavaScript腳本，
```javascript
Han( document.getElementById( 'char-level-selector' ))
.charify()
```

##### 字級選擇器處理後
```html
<div id="example">
  <p><h-char unicode="300c" class="biaodian cjk open">「</h-char><h-char class="hanzi cjk">你</h-char><h-char class="hanzi cjk">好</h-char><h-char unicode="300d" class="biaodian cjk close end">」</h-char><h-char unicode="ff0c" class="biaodian cjk end">！</h-char>
  <p><h-char unicode="300c" class="biaodian cjk open">「</h-char><h-char class="hanzi cjk">こ</h-char><h-char class="hanzi cjk">ん</h-char><h-char class="hanzi cjk">に</h-char><h-char class="hanzi cjk">ち</h-char><h-char class="hanzi cjk">は</h-char><h-char unicode="300d" class="biaodian cjk close end">」</h-char><h-char unicode="3001" class="biaodian cjk end">、</h-char><h-char class="punct">"</h-char><h-char class="eonmun hangul">안</h-char><h-char class="eonmun hangul">녕</h-char><h-char class="eonmun hangul">하</h-char><h-char class="eonmun hangul">세</h-char><h-char class="eonmun hangul">요</h-char><h-char class="punct">.</h-char><h-char class="punct">"</h-char></p>
  <p><h-char class="punct">‘</h-char><h-char class="alphabet latin">H</h-char><h-char class="alphabet latin">e</h-char><h-char class="alphabet latin">l</h-char><h-char class="alphabet latin">l</h-char><h-char class="alphabet latin">o</h-char> <h-char class="alphabet latin">W</h-char><h-char class="alphabet latin">o</h-char><h-char class="alphabet latin">r</h-char><h-char class="alphabet latin">l</h-char><h-char class="alphabet latin">d</h-char><h-char class="punct">’</h-char><h-char class="punct">,</h-char> <h-char class="punct">«</h-char><h-char class="alphabet ellinika greek">Γ</h-char><h-char class="alphabet ellinika greek">ει</h-char><h-char class="alphabet ellinika greek">ά</h-char> <h-char class="alphabet ellinika greek">Σ</h-char><h-char class="alphabet ellinika greek">ο</h-char><h-char class="alphabet ellinika greek">υ</h-char> <h-char class="alphabet ellinika greek">Κ</h-char><h-char class="alphabet ellinika greek">ό</h-char><h-char class="alphabet ellinika greek">σ</h-char><h-char class="alphabet ellinika greek">μ</h-char><h-char class="alphabet ellinika greek">ε</h-char><h-char class="punct">»</h-char><h-char class="punct">,</h-char> <h-char class="punct">'</h-char><h-char class="alphabet kirillica cyrillic">п</h-char><h-char class="alphabet kirillica cyrillic">р</h-char><h-char class="alphabet kirillica cyrillic">и</h-char><h-char class="alphabet kirillica cyrillic">в</h-char><h-char class="alphabet kirillica cyrillic">е</h-char><h-char class="alphabet kirillica cyrillic">т</h-char> <h-char class="alphabet kirillica cyrillic">м</h-char><h-char class="alphabet kirillica cyrillic">и</h-char><h-char class="alphabet kirillica cyrillic">р</h-char><h-char class="punct">'</h-char><h-char class="punct">.</h-char></p>
</div>
```

### Han.fn.jinzify() <!-- #jinzify -->
為Han對象上的指定範圍加入標點禁則處理。

<div class='info note'>

一般情況下，瀏覽器可以正常套用標點禁則，毋須使用此方法。若需同時調用，方法`jinzify()`應調用於方法`groupify()`及`charify()`*之前*，有較佳效果。
</div>

#### 代碼示例
##### 禁則處理前
```html
<div id="example">
  <p>林·菲利認為，身為一個「航海家」，這是不可寬恕的過錯。
</div>
```

JavaScript腳本，
```javascript
Han( document.getElementById( 'example' )).jinzify()
```

##### 禁則處理後
```html
<div id="example">
  <p><h-jinze class="middle">林·菲</h-jinze>利認<h-jinze class="wei">為，</h-jinze>身為一個<h-jinze class="tou">「航</h-jinze>海<h-jinze class="wei">家」，</h-jinze>這是不可寬恕的過<h-jinze class="wei">錯。</h-jinze></p>
</div>
```

相應的CSS樣式，

```css
h-jinze {
  display: inline-block;
  text-indent: 0
}
```

</section>
