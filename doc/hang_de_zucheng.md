
行的組成
=======
 概述 <!-- #gaishu -->
------
「行的組成」屬於漢字標準格式的高級排版功能，藉由行內文字、標點符號等基本組成元素的調整，提升頁面整體的可讀性。

 漢字－西文混排間隙 <!-- #hanzi-xiwen_hunpai_jianxi -->
-----------------
現代排版中，漢字常同其他文字混排，其中最廣泛者即拉丁字母，此外，希臘字母、西里爾字母等亦時有所見，在漢字同這些字母文字混排時，由於字形特徵迥異，需在二者間加入間隙以達平滑過渡。「漢字標準格式」提供「漢字－西文混排間隙」功能（需配合JavaScript腳本），預設在「漢字－拉丁字母」「漢字－希臘字母」「漢字－西里耳字母」間自動加入寬為0.25em的間隙（可能隨字元對齊致寬度偶有差異）。

### 示例 <!-- #hanzi-xiwen_hunpai_jianxi-shili -->

<div class='example'>

#### 拉丁字母及數字
研究發現，全球狂銷的蘋果iPad超省電。根據非營利組織<abbr lang="en" title="Electric Power Research Institute">EPRI</abbr>（電力研究中心），iPad一年電費只需1.36美刀（U.S. Dollar）。

***
#### 希臘字母
游離輻射可以區分為高能粒子流與高能電磁波，其中高能粒子流包含α粒子、β粒子（+/−）與中子，高能電磁波包含γ射線、X射線與特定波長的紫外線。

***
#### 西里爾字母
我有學過<span lang="uk">українська мова</span>，所以<span lang="ru">русский язык</span>我可以稍微看得懂。
</div>

關於本節的詳盡示例，請見[測試範例頁·漢字－西文混排間隙][hws]。

[hws]: http://ethantw.github.io/Han/latest/hws.html

### 作用範圍 <!-- #hanzi-xiwen_hunpai_jianxi-zuoyong_fanwei -->
漢字－西文混排間隙預設作用範圍為文件內容`body`元素，遇下列元素將自行規避。

- 文字輸入區塊`textarea`元素
- 計算機相關文本，如`code, kbd, samp, pre`等元素

### 停用方式 <!-- #hanzi-xiwen_hunpai_jianxi-tingyong_fangshi -->
#### 在特定DOM範圍內停用漢字－西文混排間隙
以下示例使用CSS將類別為`.warning`的容器下的漢字－西文混排間隙隱藏。

```css
.warning hws {
  display: none;
}
```

或是使用JavaScript來清除漢字－西文混排間隙`hws`元素節點。

```javascript
var warning = document.querySelectorAll( '.warning' )
var ahws = [].slice.call( warning.querySelectorAll( 'hws' ))

ahws
.forEach(function( hws ) {
	warning.removeChild( hws )
})
```

#### 停用JS腳本內的.renderHWS()渲染
目前`han.js`尚未提供定義預設渲染途徑的方法，通過規避`renderHWS()`，即可停用漢字－西文混排間隙功能。

```javascript
Han()
.initCond()
.renderElem()
.renderJiya()
//.renderHWS()
.correctBasicBD()
.substCombLigaWithPUA()
```

或，

```javascript
Han().setRoutine([
  'initCond', 'renderElem', 'renderJiya',
  // 'renderHWS',
  'correctBasicBD', 'substCombLigaWithPUA'
]).render()
```

 標點擠壓 <!-- #biaodian_jiya -->
--------- 
漢字排版中，幾乎所有的標點符號皆佔一個漢字的空間，其中，日式點號、括號等符號位在靠近受標漢字一側，保留了半個漢字寬度的空白空間，連續使用多個符號時，字與字間將出現一個漢字寬度的空隙，不甚美觀。「漢字標準格式」提供「標點擠壓」功能（需配合JavaScript腳本），妥善縮減連續標點的多餘空間。

<div class='example'>
<style scoped>
.reset char {
letter-spacing: normal !important;
margin-left: 0 !important;
}
</style>

<div class='reset'>

#### 調整前
何謂「標點『擠壓』」呢？  
讓我來告訴你何謂「『標點』擠壓」。
</div>

***
#### 調整後
何謂「標點『擠壓』」呢？  
讓我來告訴你何謂「『標點』擠壓」。
</div> 

關於本節的詳盡示例，請見[測試範例頁·標點擠壓][jiya]。

[jiya]: http://ethantw.github.io/Han/latest/jiya.html

### 停用方式 <!-- #biaodian_jiya-tingyong_fangshi -->
#### 停用JS腳本內的.renderJiya()渲染
目前`han.js`尚未提供定義預設渲染途徑的方法，通過規避`renderJiya()`，即可停用標點擠壓功能。

```javascript
Han()
.initCond()
.renderElem()
//.renderJiya()
.renderHWS()
.correctBasicBD()
.substCombLigaWithPUA()
```

或，

```javascript
Han().setRoutine([
  'initCond', 'renderElem', 
  // 'renderJiya',
  'renderHWS', 'correctBasicBD', 'substCombLigaWithPUA'
]).render()
```

 字元的替換 <!-- #ziyuan_de_tihuan --> 
----------
「漢字標準格式」腳本包含二種字元替換的模式——着重字體效果的「異體字顯示」與着重語意的「訛字（符）修正」（皆需配合JavaScript）。前者不更動DOM的原始文字，僅在顯示時使用異體字或PUA字元；後者則直接替換原始字元，確保語意正確的字符被使用。

**請見[測試範例頁·字元的替換][subst]。**

[subst]: http://ethantw.github.io/Han/latest/subst.html

