
概述
===

這篇文章介紹了「漢字標準格式」的基本功能與使用方式。通常，在網頁中需要直接引用二個文件來啓用「漢字標準格式」——`han.min.css`（或使用Sass滙入）及`han.min.js`（或使用JavaScript模組框架），後者（腳本文件）可依網站的需求選用。

```html
<link rel="stylesheet" href="path/src/css/han.min.css">
```

可依需求選用的腳本文件，

```html
<script src="path/src/js/han.min.js">
```

**註：**「漢字標準格式」自版本v3.0.0起，不再依賴jQuery庫，得以更快速載入DOM ready渲染。

HTML5文件格式
------------
「漢字標準格式」要求所有網頁使用HTML5標準文件格式或HTML4嚴格模式，並依主要語言及文字變體在根元素中加入相應的語言屬性。

```html
<!DOCTYPE html>
<html lang="語言-文字-地區">
  …
</html>
```

可能的語言屬性値：

- `zh-Hant`
- `zh-Hans`
- `zh`<small>（繁體字優先）</small>
- `ja`
- `zh-Hant-TW`
- `zh-Hant-HK`
- `zh-Hans-CN`
- `zh-cmn-Hans`<small>（現代標準漢語、簡體中文）</small>
- `zh-nan-Hant`<small>（閩南語、繁體中文）</small>
- `zh-yue-Hant`<small>（粵語、繁體中文）</small>
- `zh-TW`<small>（不建議）</small>
- `zh-HK`<small>（不建議）</small>
- `zh-CN`<small>（不建議）</small>

其他有用的語言屬性値：

- `zh-Latn`<small>（中文羅馬拼音）</small>
- `ja-Latn`<small>（日文羅馬拼音）</small>
- `cmn-Latn`<small>（現代標準漢語羅馬拼音）</small>
- `nan-Latn`<small>（閩南語羅馬拼音）</small>

使用中文漢字的網頁或元素，請務必加入包含`zh`、`Hant`或`Hans`三者任一的語言屬性値；使用羅馬拼音者，其語言屬性則需要包含`Latn`。

行動裝置最佳化
-----------
「漢字標準格式」提供專為行動裝置的最佳化，在`<head>`元素中加入下列viewport元信息元素以啓用。

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

DOM ready腳本渲染
----------------
在網頁根元素上加入類別`han-init`以啓用預設的DOM ready腳本渲染。

```html
<html lang="ja" class="han-init">
```

或在單一選定範圍元素中，加入類別`han-init-context`以啓用該範圍下的腳本渲染，惟「漢字標準格式」的類Modernizr功能支援偵測類別仍會加入至根元素中。

```html
<html lang="zh-yue-Hant">
  …
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
</body>
</html>
```

以上範例代碼將只對`<article>`元素進行DOM ready預設腳本渲染，如樣式標準化等。
