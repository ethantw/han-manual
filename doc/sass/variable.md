
## <span lang='en'>Sass</span>變數彙整 <!-- #variable -->

以下是「漢字標準格式」Sass樣式表下所有可調控的變數及其預設値。

### 檔案路徑
Web font路徑，
```scss
$han-font-woff: './font/han.woff';
$han-font-otf:  './font/han.otf';
```

### 元素容器的選用
根元素，依需求可改用`:root`等。
```scss
$han-root: html;
```

文章區塊容器，其他的可能値有`.article`、`.entry`、`#post`……等。
```scss
$han-article: article;
```

「行動裝置模式」的啓用寬度（裝置或瀏覽器視窗），
```scss
$han-mobile-device-width: 480px;
```

### 文字樣式
行高（[全域行高](/manual/yangshi_biaozhunhua#quanyu_ziti_yangshi)、[文章行高](/manual/zhangjie_de_bianpai#wenzhang_de_hanggao)），
```scss
$han-line-height:         1.3;  // 全域行高（設置於根元素）
$han-article-line-height: 1.7;  // 文章行高（設置於文章區塊容器）
```

文章區塊是否使用[齊頭尾文字對齊](/manual/zhangjie_de_bianpai#wenzhang_de_duiqi)。
```scss
$han-article-justify:     true;
```

文章區塊是否啓用「[章節與目錄的計數](/manual/zhangjie_de_bianpai#zhangjie_yu_mulu_de_jishu)」功能。
```scss
$han-section-counter:     false;  // 章節標題計數
$han-section-counter-toc: false;  // 目錄計數
```

[縮進](/manual/zhangjie_de_bianpai#wenzhang_zhangjie_yu_neirong_de_bianjie_tiaozheng)字數，
```scss
$han-indent:    2em;
$han-indent-md: 1em;  // 行動裝置上的縮進
```

[着重號](/manual/yangshi_biaozhunhua#qiangdiao_yu_zhongdian-qiangdiao)相關設定，
```scss
// 遇標點回避與否
$han-text-emphasis-skip: true;

// 着重號形狀
// `none` || `filled` || `open`
$han-text-emphasis-shape: filled;

// 着重號符號
// `dot` || `circle` || `double-circle` || `triangle` || `sesame` || <string>
$han-text-emphasis-mark: circle;

// 着重號位置
// `over` || `under`
$han-text-emphasis-posi: under;

// 着重號顏色
// `inherit` || <color>
$han-text-emphasis-color: inherit;

// 日文着重號樣式設定（同上）
$han-text-emphasis-shape-ja: filled;
$han-text-emphasis-mark-ja:  sesame;
$han-text-emphasis-posi-ja:  over;
$han-text-emphasis-color-ja: inherit;
```

### 文字設計
字集相關設定（[漢字](/manual/wenzisheji#zhongwen_hanzi_zitiji)、[標點](http://localhost:9999/manual/wenzisheji#biaodian_yangshi_xiuzheng-zhongwen_biaodian_liebiao)），
```scss
// 繁體中文字體變體
// `default` || `CNS` || `GB`
$han-glyph-set-hant: default;

// 繁體中文標點字體
// `default` || `Pro` || `CNS` || `GB`
$han-biaodian-hant: default;

// 簡體中文字體變體
// `default` || `GB`
$han-glyph-set-hans: GB;

// 簡體中文標點字體
// `default` || `Pro` || `CNS` || `GB`
$han-biaodian-hans: GB;
```

西文預設字體，
```scss
// 無襯線
$han-sans:  'Helvetica Neue', Helvetica, Arial;
// 襯線
$han-serif: Georgia, 'Times New Roman';
// 等寬
$han-mono:  Menlo, Courier;
```

中文預設字體（不建議使用），
```scss
$han-sans-zh:    ''
$han-serif-zh:   ''
$han-cursive-zh: ''
$han-mono-zh:    $han-sans-zh
```
