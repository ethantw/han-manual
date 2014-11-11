
 常見問題
========

## 樣式的覆蓋 <!-- #yangshi_de_fugai -->
「漢字標準格式」不同於多數CSS框架，內含大量針對語言屬性`:lang`的元素樣式修正，可能導致後方樣式無法依預期覆蓋。

### 含語言屬性樣式修正的元素類型： <!-- #yangshi_de_fugai-elem_w_lang -->
- 字級語意元素（text-level semantics）
- 群組元素（grouping content）與其同章節類元素（sections）的組合情境**（僅含字體設定）**
- 根元素`html`**（僅含字體設定）**

### 處理方式 <!-- #yangshi_de_fugai-solution -->
為正確處理樣式的覆蓋，請留意樣式的繼承規則，按需求加入相應的語言屬性、父輩（或其他）元素選擇器等，以提高樣式權重，避免過度使用`!important`宣告，以保持樣式表的可維護性。

必要時，請使用瀏覽器的「元件檢閱器」來瞭解樣式間的繼承、覆蓋關係。

## han.js腳本的運行環境 <!-- #han-js_de_yunxing_huanjing -->
腳本`han.js`須在DOM環境中方可正常運行，亦即瀏覽器等前端環境。若需要在伺服器端使用`han.js`，請導入[jsdom]等類庫。

[jsdom]: https://github.com/tmpvar/jsdom

```javascript
var jsdom = require( 'jsdom' )

jsdom.env(
  '<html lang="zh-Hant"><body>…</body></html>',
  [ '/path/src/han.js' ],
  function ( error, window ) {
    if ( error ) return
    var document = window.document
    var root = document.documentElement
    var body = document.body

    window.Han( body, root ).render()
  }
)
```
