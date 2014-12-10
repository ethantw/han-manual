
 安裝與啓用
==========

這分使用手冊介紹了「漢字標準格式」（當前版本v{{han-version}}）的基本功能與使用方式。以下是基本的安裝與啓用步驟。

 引用文件 <!-- #yinyong_wenjian -->
--------
通常，一般網頁需要引用二個文件來啓用「漢字標準格式」——`han.min.css`（或使用Sass滙入）及`han.min.js`（或使用JavaScript模組框架），後者（腳本文件）可依網站的需求選用。

```html
<link rel="stylesheet" href="path/src/css/han.min.css">
```

可依需求選用的腳本文件，

```html
<script src="path/src/js/han.min.js"></script>
```
<div class='info'>

**註：**「漢字標準格式」自版本v{{han-version}}起，不再依賴jQuery庫，得以更快速完成DOM ready渲染。
</div>


### 套件管理工具 <!-- #package-manager -->
使用套件管理工具（package manager）來安裝，
- NPM `npm install --save han-css`
- Bower `bower install --save Han`
- Component `component install ethantw/Han`

### CDN服務 <!-- #cdn -->
若毋須使用Sass變數的定製功能，你也可以直接使用以預設値編譯的CDN外連樣式表、腳本及網頁字體，以求高速下載及快取。[此服務由cdnjs.com提供][cdnjs]。

[cdnjs]: http://cdnjs.com/libraries/han

````html
<link rel="stylesheet" media="all" href="//cdnjs.cloudflare.com/ajax/libs/Han/{{han-version}}/han.min.css">
````

JavaScript腳本，

````html
<script src="//cdnjs.cloudflare.com/ajax/libs/Han/{{han-version}}/han.min.js"></script>
````

 HTML5文件格式 <!-- #html5_wenjian_geshi -->
--------------
「漢字標準格式」要求所有網頁使用HTML5標準文件格式或HTML4嚴格模式，並依主要語言及文字變體在根元素中加入相應的語言屬性。

```html
<!DOCTYPE html>
<html lang="[巨集]-[語言]-[文字及變體]-[地區]">
  …
</html>
```

*可能*的語言屬性値：

- `zh-Hant`
- `zh-Hans`
- `zh`
- `ja`
- `zh-Hant-TW`
- `zh-Hant-HK`
- `zh-Hans-CN`
- `zh-cmn-Hans`<small>（現代標準漢語〔國語／普通話〕、簡體中文）</small>
- `zh-nan-Hant`<small>（閩南語、繁體中文）</small>
- `zh-yue-Hant`<small>（廣州話〔粵語〕、繁體中文）</small>
- `zh-TW`<small>（不建議）</small>
- `zh-HK`<small>（不建議）</small>
- `zh-CN`<small>（不建議）</small>

其他有用的語言屬性値：

- `zh-Latn`<small>（中文羅馬拼音）</small>
- `ja-Latn`<small>（日文羅馬拼音）</small>
- `cmn-Latn`<small>（現代標準漢語〔國語／普通話〕羅馬拼音）</small>
- `nan-Latn`<small>（閩南語羅馬拼音）</small>
- `yue-Latn`<small>（廣州話〔粵語〕羅馬拼音）</small>
- `hak-Latn`<small>（客家語羅馬拼音）</small>
- `wuu-Latn`<small>（吳語羅馬拼音）</small>

<div class='info'>

使用中文漢字的網頁或元素，請務必加入包含`zh`、`zh-Hant`或`zh-Hans`三者任一的語言屬性値；使用羅馬拼音者，其語言屬性則需要包含`Latn`。
</div>

 彈性設計 <!-- #rwd -->
--------
「漢字標準格式」提供專為行動裝置最佳化的彈性設計（<span lang='en'>responsive web design</span>），在`<head>`元素中加入下列viewport元信息元素以啓用。

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

 DOM ready腳本渲染 <!-- #dom-ready-js -->
------------------
### 以套用類別來啓用
#### 全頁渲染
在網頁根元素上加入類別`han-init`以啓用預設的DOM ready腳本渲染。

```html
<html lang="ja" class="han-init">
```

#### 以指定的單一元素為範圍渲染
亦可在單一選定範圍元素中，加入類別`han-init-context`以啓用該範圍下的腳本渲染，惟「漢字標準格式」的類Modernizr功能支援偵測類別仍會加入至根元素中。

```html
<!DOCTYPE html>
<html lang="zh-yue-Hant" class="[類Modernizr功能支援偵測]">
<head>
  …
  <link rel="stylesheet" href="path/src/css/han.min.css">
  …
</head>
<body>
  <article class="han-init-context">
    …
  </article>

  <nav>
    <ul>
      <li><a href="/">首頁</a>
      <li><a href="/archive">彙整</a>
      <li><button>登入</button>
    </ul>
  </nav>

  <script src="path/src/js/han.min.js"></script>
</body>
</html>
```

以上範例代碼將只對第一個設有`han-init-context`類別的容器（在此為`<article>`元素）進行DOM ready預設腳本渲染，如樣式標準化……等。

### 使用JavaScript來啓用
#### 全頁渲染

```javascript
Han( document.body ).render()
```

或使用全頁渲染（初始化）的簡寫形式，

```javascript
Han.init()
```

#### 以指定的單一元素為範圍渲染

```javascript
Han( document.getElementById( 'entry' )).render()
```
更詳盡的說明，請見「[JavaScript腳本·Han構造函數][js-han]」一節。

[js-han]: /manual/js-api#han
