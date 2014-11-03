
 辭彙表
=======
## HTML <!-- #html -->
<style scoped>
table.glossary {
  font-size: .85em !important;
}
table.glossary thead th:nth-child(1) {
  width: 7em;
}
table.glossary thead th:nth-child(2) {
  width: 7em;
}
table.glossary td:nth-child(2) {
  font-size: .9em;
}
</style>
<table class='glossary'>
  <thead>
    <th>名稱
    <th>原文／譯文
    <th>定義
  </thead>
  <tr>
    <td>元素
    <td>element
    <td>構成HTML文件的基本組成單位，如文章<code>article</code>元素。
  <tr>
    <td>標籤
    <td>tag
    <td>構成元素的開、閉標籤或空元素標籤的總稱，如<code>&lt;p&gt;</code>、<code>&lt;/p&gt;</code>及<code>&lt;br /&gt;</code>。
  <tr>
    <td>類別
    <td>class
    <td>元素的語意細分。與元素不同，類別多由開發者自行定義，以滿足各種內容形態。
  <tr>
    <td>根元素
    <td>root element
    <td>HTML文件的最上級元素，通常為<code>html</code>。
  <tr>
    <td>章節類元素
    <td>sections
    <td>對文件或內容區分章或節的元素分類。
  <tr>
    <td>內容群組元素
    <td>grouping content
    <td>可對內容群組化的元素分類。
  <tr>
    <td>字級語意元素
    <td>text-level semantics
    <td>為文本文字細分功能或語意的元素分類。
  <tr>
    <td>修訂元素
    <td>edits
    <td>標示文件或內容修訂的元素分類。
  <tr>
    <td>強調
    <td>emphasis
    <td>用於凸顯文本語氣的加重、需要讀者多所留意之處，相應的元素為<code>em</code>，屬字級語意元素。
  <tr>
    <td>重點
    <td>importance
    <td>用於表示文本作為段落甚或全文的重要概念或結論，相應的元素為<code>strong</code>，屬字級語意元素。
  <tr>
    <td>變音文字
    <td>alternative voice
    <td>表示文本作為一段不同於正文的概念、夢境、想法或外來語，在英文中也用於船舶名的標示，相應的元素為<code>i</code>，屬字級語意元素。
  <tr>
    <td>註記元素
    <td>annotation
    <td>表示文本作為專名（中文），亦可用於標示錯誤拼寫或錯別字等，相應的元素為<code>u</code>，屬字級語意元素。
  <tr>
    <td>行間注
    <td>interlinear annotation (ruby)
    <td>為正文文本標注細部說明的排版方式，相應的元素為<code>ruby</code>，屬字級語意元素。有「漢字標音」及「雙語對照」二大分類。
  <tr>
    <td>斷行機會元素
    <td>line break opportunity
    <td>置於長字詞的各音節間，提示排版引擎可在需要時斷行之所在，避免文本超出或異常斷行，相應的元素為<code>wbr</code>，屬字級語意元素。
</table>

## 漢字標準格式 <!-- #han-css -->
<table class='glossary'>
  <thead>
    <th>名稱
    <th>原文／譯文
    <th>定義
  </thead>
  <tr>
    <td>樣式標準化或本地化
    <td>normalize or localise
    <td>為各種語言、文字變體或地區分別提供相應的元素基礎樣式，係可獨立的模組。
  <tr>
    <td>文字設計
    <td>typography
    <td>又作字體排印，原指集合了字體設計與排版的各種技術。「漢字標準格式」中，特指在不同元素情境下設定的不同字體、字體集及基型，係可獨立的模組。
  <tr>
    <td>章節的編排
    <td>sectional arrangements (sectional)
    <td>「漢字標準格式」的高級排版功能。為章節情境提供相對位置及樣式的編排等。
  <tr>
    <td>行的組成
    <td>line composition (inline)
    <td>「漢字標準格式」的高級排版功能。用於處理行內文字或元素的排列或分布等。
  <tr>
    <td>類詩篇段落
    <td>poem-like paragraph
    <td>「漢字標準格式」專有的語意類別，指詩篇或類似詩篇的文字段落，可用於文章元素、區塊引用元素、段落元素……等。
  <tr>
    <td>字級選擇器
    <td>character-level selector (charify)
    <td>「漢字標準格式」腳本實作的功能，實現「以字元為單元的選擇器」，提供多項變數方便按需操作。
  <tr>
    <td>漢字西文混排間隙
    <td>Hanzi-Western script mixed spacing, HWS
    <td>「漢字標準格式」腳本實作的功能，在漢字同西文（拉丁字母及數字、希臘字母、西里爾字母等）混排的情況下，加入合適的間隙，以求平滑的視覺過渡。
  <tr>
    <td>回退
    <td>fallback
    <td>遇指定的方案不支援使用者當前環境時，系統或瀏覽器提供的向後降級處理，以求相對完整的資訊展示或功能實現。如為求最大支援程度，而排序多個字體的字體設定，即為回退的一種常見形式。
  <tr>
    <td>專名
    <td>proper noun, PN
    <td>專有名詞。
</table>

## 文字設計 <!-- #typography -->
<table class='glossary'>
  <thead>
    <th>名稱
    <th>原文／譯文
    <th>定義
  </thead>
  <tr>
    <td>基型
    <td>typeface generics
    <td>字體的基本分類，常見有襯線、無襯線、手寫、等寬、裝飾等分類，在CSS中可設置為字體樣式的回退，以求最廣泛的支援程度。文字設計或CSS中，「generics」一詞應作「通用字體」；「漢字標準格式」為明顯區分「字體」與「通用字體」，遂將後者統一稱作「基型」或「字體基型」，以為差異。
  <tr>
    <td>網頁安全字體
    <td>web safe font
    <td>為多數作業系統所支援（預裝）的字體，多用於字體回退。
  <tr>
    <td>四大字體集
    <td>the Four Typefaces
    <td>「黑」「宋」「楷」「仿宋」四大中文印刷體的總稱。
</table>
