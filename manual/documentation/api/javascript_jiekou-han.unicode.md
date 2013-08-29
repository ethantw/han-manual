
JavaScript接口[[・]]{.middle-dot}[[han.unicode\[ {range} \]]] { #javascript_jiekou .han-support-feature }
===

<dfn class="initial">han.unicode\[ {range} \]</dfn>是一個包含着「[_拉丁_{.pn}字母](api/javascript\_jiekou-han.unicode#latin\_zimu)、[_漢_{.pn}字](api/javascript\_jiekou-han.unicode#hanzi)、[注音符號](api/javascript\_jiekou-han.unicode#hanzi-zhuyin\_fuhao)、標點符號」等萬國碼區段字元集的正則表達式陣列。

**[API]: Application Programming Interface { :en-GB }
**[HTML]: HyperText Markup Language { :en-GB }
**[CSS]: Cascading Style Sheets { :en-GB }
**[DOM]: Document Object Model { :en-GB }

---


拉丁字母 { #latin_zimu }
---

包含了_阿拉伯_{.pn}數字的_拉丁_{.pn}字母集。藉呼叫陣列集`han.unicode['latin'][0]`，將得到下列各萬國碼區段字元的正則表達式。

區段名稱 | 正則表達式
-- | --
基本_拉丁_{.pn}字母 | `a-z`
_阿拉伯_{.pn}數字 | `0-9`
_拉丁_{.pn}字母補充-1 | `[\u00C0-\u00FF]`
_拉丁_{.pn}字母擴展-A區 | `[\u0100-\u017F]`
_拉丁_{.pn}字母擴展-B區 | `[\u0180-\u024F]`
_拉丁_{.pn}字母附加區 | `[\u1E00-\u1EFF]`
空白 | `[\s]`



### 標點符號 { #latin_zimu-biaodian_fuhao }

呼叫`han.unicode['latin']['punc']`可得到，

區段名稱 | 正則表達式 | 陣列名稱
-- | --
符號 | [[`[&;=_\.\,\$\%\^\*\-\+\/]`]] { :en } | `han.unicode['latin']['punc'][0]`
開括／引號 | [[`[\(\[\'"<‘“]`]] { :en } | `han.unicode['latin']['punc']['open']`
關括／引號 | [[`[\)\]\'">”’]`]] { :en } | `han.unicode['latin']['punc']['close']`



漢字 { #hanzi }
---

呼叫`han.unicode['hanzi']`可得到以下區段，


區段名稱 | 正則表達式 | 備註
-- | -- | --
CJK一般 | `[\u4E00-\u9FFF]`
CJK擴展-A區 | `[\u3400-\u4DB5]`
CJK擴展-B區 | `[\u20000-\u2A6D6]`
CJK Unicode 4.1 | `[\u9FA6-\u9FBB][\uFA70-\uFAD9]`
CJK Unicode 5.1 | `[\u9FBC-\u9FC3]`
CJK擴展-C區 | `[\u2A700-\u2B734]`
CJK擴展-D區 | `[\u2B740-\u2B81D]` | 急用_漢_{.pn}字
數字「〇」 | `[\u3007]` | _則天_{.pn}文字，位所有_漢_{.pn}字區段之外
_日_{.pn}文假名 | `[\u3040-\u309E][\u30A1-\u30FA][\u30FD\u30FE]` | 排除片假名中點、長音符


下列區段*尚未*或*不支援*，

區段名稱 | 正則表達式 | 備註
-- | -- | --
CJK擴展-E區 | `[\u2B820-\u2F7FF]` | 暫未完成
CJK擴展-F區 | 尚無 | 暫未完成
CJK相容表意文字 | `[\uF900-\uFAFF]` | 不使用


### 標點符號 { #hanzi-biaodian_fuhao }

呼叫`han.unicode['biaodian']`可得到，

區段名稱 | 正則表達式 | 陣列名稱
-- | --
符號 | [[`[·・︰、，。：；？！—⋯…．·]`]] { :en } | `han.unicode['biaodian'][0]`
開括／引號 | [[`[「『（〔【《〈“‘]`]] { :en } | `han.unicode['biaodian']['open']`
關括／引號 | [[`[」』）〕】》〉’”]`]] { :en } | `han.unicode['biaodian']['close']`


### 注音符號 { #hanzi-zhuyin_fuhao }

國語注音符號，

區段名稱 | 正則表達式 | 陣列名稱及備註
-- | --
國語注音符號 | `[\u3105-\u312D]` | `han.unicode['bopomofo']['mps'][0]`<br>共40字元
聲母 | `[\u3105-\u3119\u312A-\u312C]` | `han.unicode['bopomofo']['mps']['shengmu']`
介音 | `[\u3105-\u3119\u312A-\u312C]` | `han.unicode['bopomofo']['mps']['jieyin']`
韻母 | `[\u311A-\u3126\u312D]` | `han.unicode['bopomofo']['mps']['yunmu']`
國語五聲調 | `[\u02D9\u02CA\u02C5\u02C7\u02CB]` | `han.unicode['bopomofo']['tone']['five']`<br> 一聲無字符，三聲有2個符號可表示，故共有5字元


_台灣_{.pn}<wbr>_漢_{.pn}語方言音擴充集，

區段名稱 | 正則表達式 | 陣列名稱
-- | --
擴充集 | `[\u31A0-\u31BA]` | `han.unicode['bopomofo']['extend']`
擴充聲調 | `[\u02EA\u02EB]` | `han.unicode['bopomofo']['tone']['extend']`


#### 注意事項 { #attention }

擴充集的正則表達式*皆不*包含（國語）注音符號的原始字元。你必需同時呼叫二陣列方可取得所有字元。如下列範例可獲取所有注音符號（「40個國語注音字元」加「24個擴充字元」）。

	var mps = [
			han.unicode['bopomofo']['mps'][0],
			han.unicode['bopomofo']['extend']
		].join('');

***


#### 小提示 { #tip }

[善用`.join()`方法（[[method]]{:en-GB}）][join-mdn]，可將多個子陣列合併，方便取用。

[join-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join






