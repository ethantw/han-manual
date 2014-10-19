
 模組 <!-- #module -->
-----
一般情況下，直接在Sass樣式表中匯入`_han.sass`即可使用「漢字標準格式」；然而，亦可依據網站需求，載入需要的Sass模組。

```scss
// 「漢字標準格式」必要檔案
@import 'han/var';
@import 'han/api';

// Normalize.css
@import 'han/hyu/normalize';

// 樣式標準化模組
@import 'han/locale';

// 文字設計模組
@import 'han/typography';

// 高級排版功能模組（章節的編排、行的組成）
@import 'han/typeset';
```
