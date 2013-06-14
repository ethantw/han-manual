<style scoped>
#download_button {
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 20px;
        -moz-border-radius: 20px;
    box-shadow:             #fff 0 1px 2px inset;
        -moz-box-shadow:    #fff 0 1px 2px inset;
        -webkit-box-shadow: #fff 0 1px 2px inset;
     color: #666;
    font-weight: inherit;
    letter-spacing: .15em;
    margin: 0 3px;
    padding: 7px 10px;
}

#download_button:hover {
    border-color: #999;
}

#download_button:active {
    box-shadow:             #ccc 0 1px 2px inset;
        -moz-box-shadow:    #ccc 0 1px 2px inset;
        -webkit-box-shadow: #ccc 0 1px 2px inset;
}
</style>


下載與套用 { #xiazai_yu_taoyong }
===

你可以直接[下載最新版本][download]，或[在[[GitHub]]{:en-GB}上[[Fork]]{:en-GB}「_漢_{.pn}字標準格式」][fork-on-github]。

[download]: https://github.com/ethantw/Han/zipball/master {#download_button .no-externalicon}
[fork-on-github]: https://github.com/ethantw/Han/



設置步驟 { #shezhi_buzou }
---

**[CSS]: Cascading Style Sheets { :en }

1. 在欲套用「_漢_{.pn}字標準格式」|CSS|框架的網頁中、所有樣式宣告*之前*導入下列外連樣式表：

    	<link rel="stylesheet" media="all" href="./css/han.css">

2. 同上，再加入以下[[JavaScript]]{:en-GB}語法：

    	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js></script>
    	<script src="./han.js"></script>

3. 留意`<html>`標籤上是否設置了正確的語言屬性`lang`。此框架多數功能僅支援中文`zh-*`及日語`ja`。

4. 在瀏覽器中開啓已套用本框架的網頁測試是否正確運作。



### 啓用注音符號支援 { #qiyong_zhuyin_fuhao_zhiyuan }

由於使用頻率較低，「_漢_{.pn}字標準格式」將`<ruby>`中的「直式注音符號支援」同主程式分離，需另行啓用方可正確顯示此功能之效果。

1. 開啓`han.zhuyin.css`，將「xx、xx行」的`../fonts/zhuyin.ttf`及`../fonts/zhuyin.eot`重新定向至正確的檔案路徑。

    **請注意：**此處使用的注音符號字體係由_中華民國教育部_{.pn}所研發的「[教育部標準楷書][kai]」，並**採[創用CC「姓名標示–禁止改作–3.0_台灣_{.pn}版」][cc]授權**。若你有著作權的疑慮，請直接刪除上述提及之二行代碼及檔案，_漢_{.pn}字標準格式將自動[[fallback]]{:en-GB}至使用者作業系統的_漢_{.pn}字手寫字體。

2. 開啓`han.css`，將「xxx行至xxx行」的代碼由註解範圍*更改*為一般代碼格式。

3. 在瀏覽器中開啓內含`<ruby class="zhuyin"> … </ruby>`元素的網頁進行測試。


[kai]: http://www.edu.tw/treasure/filedown.aspx?Node=1123&Index=2&WID=c5ad5187-55ef-4811-8219-e946fe04f725
[cc]: http://creativecommons.org/licenses/by-nd/3.0/tw/


