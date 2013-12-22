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


下載與套用 { #download }
===

你可以直接[下載最新版本][download]，或[在[[GitHub]]{:en-GB}上[[Fork]]{:en-GB}「_漢_{.pn}字標準格式」][fork-on-github]。

[download]: https://github.com/ethantw/Han/releases {#download_button .no-externalicon}
[fork-on-github]: https://github.com/ethantw/Han/



設置步驟 { #shezhi_buzou }
---

**[CSS]: Cascading Style Sheets { :en }

1. 在欲套用「漢字標準格式」CSS框架的網頁中、所有樣式宣告*之前*導入下列外連樣式表及JavaScript檔案：

    	<link rel="stylesheet" media="all" href="./css/han.css">
        <script src="./js/jquery-2.0.3.min.js"></script>
    	<script src="./han.js"></script>

3. 留意`<html>`標籤上是否設置了正確的語言屬性`lang`。此框架多數功能僅支援中文`zh-*`及日語`ja`。


* * *

### 在Sass中啓用注音符號 { #zai_sass_zhong_qiyong_zhuyin_fuhao }

由於使用頻率較低，在Sass編程環境下，「_漢_{.pn}字標準格式」中的`<ruby>`「直式注音符號支援」預設關閉，需另行啓用；若你直接使用`han.css`，則*毋須*另行啓用。


#### 步驟

1. 開啓`sass/han.scss`，將「33行」的代碼由註解範圍*更改*為一般代碼格式。

2.  開啓`sass/han/_ff.scss`，將「10、11行」的`$zhuyin_ttf`及`$zhuyin_eot`重新定向至正確的檔案路徑。

3. 在瀏覽器中開啓內含`<ruby class="zhuyin"> … </ruby>`元素的網頁進行測試。



















