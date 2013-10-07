
「漢字標準格式」使用手冊
======


這是一分專為「漢字標準格式」（Han.css）所撰寫的說明文件，自「漢字標準格式」2.0版本起開始線上提供。這分文件內含Han.css、Han.js等串流式樣式表（CSS）及JavaScript檔的各種說明及使用方式。

開發者及設計師可以搭配檔案原始碼一同閱讀，以增進對「漢字標準格式」排版框架的瞭解。由於此分說明手冊多着重於基礎使用方式，對開發、設計時常見的問題或錯誤鮮少提及，故在實際測試時，我們建議使用瀏覽器的「DOM檢測工具」進行除錯。

需要多加注意的是，「漢字標準格式」不同於多數排版框架，使用諸多元素的組合、前後排列或語言、類別等屬性來分化不同的使用情境和專用樣式，在遇到樣式無法正確覆寫的情況時，請留意上述提及各項元素及屬性的繼承順序，加入相應的繼承類別或元素名稱即可。


#### 範例

  
    article blockquote i {
        font-family: 'Gill Sans', sans-serif;
    }

上述代碼無法覆蓋文章內引用區塊下的變音元素之字體，經「DOM檢測工具」檢測後發現，`han.css`中對此使用情境加入語言限定，故加入語言屬性即可正確指定字體，

    article blockquote i:lang(zh) {
        font-family: 'Gill Sans', sans-serif;
    }



目前這分使用手冊的最新版本係「v2.1.0」，相對應「漢字標準格式」的「v2.1.*」版本。過往的版本可[在GitHub上獲得][releases]。

[releases]: https://github.com/ethantw/Manual-of-Han/releases



***

這分使用手冊以修改後的[Markdown Extra]格式撰寫，所有的說明文件皆置於「`documentation/`」資料匣內，使用PHP 5.3以上版本，並修改`MODIFY.htaccess`內的路徑，將其重新命名為伺服器支援的「[超文本文件目錄][htaccess]」檔名，方可於瀏覽器上正確瀏覽使用手冊。

[Markdown Extra]: http://michelf.ca/projects/php-markdown/extra
[htaccess]: https://zh.wikipedia.org/wiki/.htaccess


這分使用手冊仍有許多尚稱不足的之處，歡迎你的協作，一同完善這些缺失。


















