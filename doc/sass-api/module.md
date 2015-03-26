
 模組 <!-- #module -->
-----
一般情況下，直接在Sass樣式表中匯入`han-css/index.scss`即可使用「漢字標準格式」的所有功能；然而，亦可依據網站需求，載入需要的Sass模組。

直接匯入「漢字標準格式」所有模組，

```scss
@import '[node_modules]/han-css/index';
```

匯入需要的Sass模組，

```scss
// 「漢字標準格式」必要檔案
@import '[node_modules]/han-css/src/sass/var';
@import '[node_modules]/han-css/src/sass/api';

// Normalize.css
@import '[node_modules]/han-css/src/sass/locale/normalize';

// 本地樣式標準化模組
@import '[node_modules]/han-css/src/sass/locale';

// 文字設計模組
@import '[node_modules]/han-css/src/sass/typography';

// 高級排版功能模組（章節的編排、行的組成）
@import '[node_modules]/han-css/src/sass/typeset';
```
