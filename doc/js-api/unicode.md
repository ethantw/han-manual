
<section class='self-contained'>

 萬國碼區段及正則表達式 <!-- #unicode -->
--------------------
Han包含二類萬國碼區段表達式常量——以字串集合而成的`Han.UNICODE`及以正則表達式集合而成的`Han.TYPESET`。


### 漢字標點 <!-- #unicode-cjk-biaodian -->
#### 點號
- `Han.UNICODE.biaodian.base`

#### 開始括注號
- `Han.UNICODE.biaodian.open`
- `Han.TYPESET.char.biaodian.open`

#### 結束括注號
- `Han.UNICODE.biaodian.close`
- `Han.TYPESET.char.biaodian.close`

#### 結束標點符號（包含點號與結束括注號）
- `Han.UNICODE.biaodian.end`
- `Han.TYPESET.char.biaodian.end`

#### 佔二個漢字空間的標點
- `Han.UNICODE.biaodian.liga`
- `Han.TYPESET.char.biaodian.liga`

#### 漢字標點表達式
- 字符：`Han.TYPESET.char.biaodian.all`
- 字符組：`Han.TYPESET.group.biaodian[0]`
- 字符組：`Han.TYPESET.group.biaodian[1]`

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

### 西文標點 <!-- #unicode-western-punct -->
#### 點號
- `Han.UNICODE.punct.base`

#### 開始括注號
- `Han.UNICODE.punct.open`
- `Han.TYPESET.char.punct.open`

#### 結束括注號
- `Han.UNICODE.punct.close`
- `Han.TYPESET.char.punct.close`

#### 結束標點符號（包含點號與結束括注號）
- `Han.UNICODE.punct.end`
- `Han.TYPESET.punct.biaodian.end`

#### 西文標點表達式
- 字符：`Han.TYPESET.char.punct.all`

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

### 漢字區段 <!-- #unicode-cjk -->
#### 基本漢字（包含擴展區）
- `Han.UNICODE.cjk.base`
- 意音文字描述字元：`Han.UNICODE.cjk.desc`
- 繁簡漢字部首：`Han.UNICODE.cjk.radical`

#### 漢字、假名及其相關區段表達式
- 字符：`Han.TYPESET.char.cjk`
- 字符組：`Han.TYPESET.group.cjk`

<div class="info">

亦可使用`hanzi`替代`cjk`鍵名。
</div>

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

### 西文 <!-- #unicode-western -->
包含拉丁字母、希臘字母、西里爾字母及西文標點符號的正則表達式，多用於詞組。

- 詞組：`Han.TYPESET.group.western`

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

### 拉丁字母區段 <!-- #unicode-latin -->
#### 基本拉丁字母、組合字符
- `Han.UNICODE.latin.base`
- `Han.UNICODE.latin.combine`

#### 拉丁字母表達式（包含組合字符）
- 字符：`Han.TYPESET.char.latin`
- 詞組：`Han.TYPESET.group.western`

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

### 希臘字母區段 <!-- #unicode-greek -->
#### 基本希臘字母、組合字符
- `Han.UNICODE.greek.base`
- `Han.UNICODE.greek.combine`

#### 希臘字母表達式（包含組合字符）
- 字符：`Han.TYPESET.char.greek`
- 詞組：`Han.TYPESET.group.western`

<div class="info">

亦可使用`ellinika`替代`greek`鍵名。
</div>

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

### 西里爾字母區段  <!-- #unicode-cyrillic -->
#### 基本西里爾字母、組合字符
- `Han.UNICODE.cyrillic.base`
- `Han.UNICODE.cyrillic.combine`

#### 西里爾字母表達式（包含組合字符）
- 字符：`Han.TYPESET.char.cyrillic`
- 詞組：`Han.TYPESET.group.western`

<div class="info">

亦可使用`kirillica`替代`cyrillic`鍵名。
</div>

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

### 假名區段  <!-- #unicode-kana -->
#### 基本假名
- `Han.UNICODE.kana.base`
- 組合字符：`Han.UNICODE.kana.combine`
- 半形：`Han.UNICODE.kana.half`
- 小寫：`Han.UNICODE.kana.base`
- 符號：`Han.UNICODE.kana.mark`

#### 假名表達式
- 字符：`Han.TYPESET.char.kana`
- 字符組：`Han.TYPESET.group.kana`

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

### 諺文區段  <!-- #unicode-eonmun -->
#### 基本諺文
- `Han.UNICODE.hangul.base`
- 半形：`Han.UNICODE.hangul.half`
- 字母：`Han.UNICODE.hangul.letter`

#### 諺文表達式
- 字符：`Han.TYPESET.char.hangul`
- 詞組：`Han.TYPESET.group.hangul`

<div class="info">

亦可使用`eonmun`替代`hangul`鍵名。
</div>

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

### 注音符號區段  <!-- #unicode-zhuyin -->
#### 基本注音符號（國語及方言音）
- 全部：`Han.UNICODE.zhuyin.base`
- 聲母：`Han.UNICODE.zhuyin.initial`
- 介音：`Han.UNICODE.zhuyin.medial`
- 韻母：`Han.UNICODE.zhuyin.final`

#### 聲調
- 平上去聲：`Han.UNICODE.zhuyin.tone`（包含國語四聲及輕聲）
- 入聲：`Han.UNICODE.zhuyin.ruyun`

#### 注音拼式表達式
- 整體：`Han.TYPESET.zhuyin.form`
- 聲調：`Han.TYPESET.zhuyin.diao`

</section>
