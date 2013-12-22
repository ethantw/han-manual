<style scoped>
.lrg {
	font-size: 2em;
}
</style>



漢字註音 { #hanzi_zhuyin }
===

<dfn>漢字註音</dfn>是註記於漢字旁的小字號標音說明。在_中_{.pn}文中，有二大類常見的_漢_{.pn}字註音模式，分別是使用_拉丁_{.pn}字母的「[++_羅馬_{.pn}拼音++][romanisation]」及以_漢_{.pn}字偏旁設計而成的「[++注音符號++][zhuyin]」。

「_漢_{.pn}字標準格式」目前能夠完整支援前者，及「聲母﹣介音﹣韻母」形式的「國語注音符號」，至於使用到擴充符號集與「入聲韻」的「[_台灣_{.pn}方言音符號][fangyanyin-fuhao]」，則會在未來的版本中加入支援。

[romanisation]: hanzi_biaozhun_geshi/hanzi_zhuyin#romanisation
[zhuyin]: hanzi_biaozhun_geshi/hanzi_zhuyin#zhuyin_fuhao
[fangyanyin-fuhao]: http://zh.wikipedia.org/wiki/台灣方言音符號



羅馬拼音 { #romanisation }
---

#### 範例 { #romanisation-example }

<blockquote class="example">
<p markdown="1" class="poem-like">
	<ruby class="reading romanization">
		春光<rt>chūnguāng</rt>好<rt>hăo</rt>，<rt></rt>
		風和<rt>fēnghé</rt>日暖<rt>rìnuăn</rt>春光<rt>chūnguāng</rt>好<rt>hăo</rt>，<rt></rt>
		結伴<rt>jiébàn</rt>遊<rt>yóu</rt>春郊<rt>chūnjiāo</rt>。
	</ruby>

	<br>

	<ruby class="reading romanization">
		你<rt>nĭ</rt>瞧<rt>qiáo</rt>！<rt></rt>
		一彎<rt>yìwān</rt>流水<rt>liúshuĭ</rt>架<rt>jià</rt>小橋<rt>xiăoqiáo</rt>，<rt></rt>
		兩岸<rt>liăng'àn</rt>楊柳<rt>yángliŭ</rt>隨風<rt>suífēng</rt>飄<rt>piāo</rt>。
	</ruby>
</p>
</blockquote>
<p class="cite"><cite class="piece">春光好</cite></p>



下方以「[_台灣_{.pn}<wbr>_閩南_{.pn}語_羅馬_{.pn}字拼音方案][tai-lo]」示例，

[tai-lo]: http://zh.wikipedia.org/wiki/台灣閩南語羅馬字拼音方案


<blockquote>
<p markdown="1" class="poem-like" lang="zh-nan">
	<ruby class="reading romanization">
		我<rt>guá</rt>有<rt>ū</rt>
		一个<rt>tsi̍t ê</rt>朋友<rt>pîng-iú</rt>，<rt></rt>
		伊<rt>i</rt>真有<rt>tsin-ū</rt>志氣<rt>tsì-khì</rt>，
	</ruby>

	<br>
	<ruby class="reading romanization">
		自<rt>tsū</rt>細漢<rt>sè-hàn</rt>就<rt>tō </rt>立志<rt>li̍p-tsì</rt>
		講<rt>kóng</rt>欲<rt>beh</rt>寫歌<rt>siá-kua</rt>唱歌<rt>tshiùnn-kua</rt>趁錢<rt>thàn-tsînn</rt>；
	</ruby>

	<br>

	<ruby class="reading romanization">
		伊<rt>i</rt>逐工<rt>ta̍k-kang</rt>攏咧<rt>lóng-teh</rt>
		痟<rt>siáu</rt>電影<rt>tiān-iánn</rt>，<rt></rt>
		聽<rt>thiann</rt>阿啄仔<rt>a-tok-á</rt>的<rt>ê</rt>
		<abbr lang="en" title="compact disc">CD</abbr>。
	</ruby>
</p>
</blockquote>
<p class="cite" markdown="1">_朱約信_{.pn}<cite class="piece">歡迎來唱我的歌</cite></p>



### 使用方式 { #romanisation-shiyong_fangshi }

請在`<ruby>`元素上套用類別`romaization`或<abbr title="拼音">`pinyin`</abbr>。

	<ruby class="pinyin">
	    一彎<rt>yìwān</rt>
	    流水<rt>liúshuĭ</rt>
	</ruby>

**請注意：**類別`pinyin`僅代表用於拼寫國語（即普通話）_漢_{.pn}字的「[_漢_{.pn}語拼音][pinyin]」。僅管最終所得的顯示結果相同，為了正確地表達語意，其餘形式的_羅馬_{.pn}拼音請使用類別`romanization`。

[pinyin]: http://zh.wikipedia.org/wiki/漢語拼音



注音符號 { #zhuyin_fuhao }
---

#### 範例 { #zhuyin_fuhao-example }


> <ruby class="zhuyin">那美麗的高塔竟在瞬間<!--
	-->化<rt>ㄏㄨㄚˋ</rt>
	作<rt>ㄗㄨㄛˋ</rt>
	齏<rt>ㄐㄧ</rt>
	粉<rt>ㄈㄣˇ</rt>，
	那曾令人<!--
	-->齰<rt>ㄗㄜˊ</rt>
	舌<rt>ㄕㄜˊ</rt>
	的<!--
	-->鬼<rt>ㄍㄨㄟˇ</rt>
	斧<rt>ㄈㄨˇ</rt>
	神<rt>ㄕㄣˊ</rt>
	工<rt>ㄍㄨㄥ</rt>
	只能長存在人們心中。
  </ruby>

與各種字級語意元素共用，

> <ruby class="reading zhuyin">
	我<rt>ㄨㄛ˅</rt>
	的<rt>˙ㄉㄜ</rt>
	朋<rt>ㄆㄥˊ</rt>
	友<rt>ㄧㄡ˅</rt>
	啊<rt>˙ㄚ</rt>——請*要*知道
	——「***[柴<rt>ㄔㄞˊ</rt>
	米<rt>ㄇㄧ˅</rt>
	油<rt>ㄧㄡˊ</rt>
	鹽<rt>ㄧㄢˊ</rt>
	醬<rt>ㄐㄧㄤˋ</rt>
	醋<rt>ㄘㄨˋ</rt>
	茶<rt>ㄔㄚˊ</rt>](https://www.moedict.tw/#柴米油鹽醬醋茶)***」，
	這些都是<rt>ㄕˋ</rt>
	我<rt>ㄨㄛˇ</rt>
	們<rt>˙ㄇㄣ</rt>
	日<rt>ㄖˋ</rt>
	常<rt>ㄔㄤˊ</rt>
	生<rt>ㄕㄥ</rt>
	活<rt>ㄏㄨㄛˊ</rt>
	*必<rt>ㄅㄧˋ</rt>
	備<rt>ㄅㄟˋ</rt>*
	的<rt>˙ㄉㄜ</rt>
	_七<rt>ㄑㄧ</rt>
	樣<rt>ㄧㄤˋ</rt>_
	東<rt>ㄉㄨㄥ</rt>
	西<rt>ㄒㄧ</rt>。
  </ruby>


### 使用方式 { #zhuyin_fuhao-shiyong_fangshi }

1. 參閱〈下載與啓用〉一節，[啓用注音符號支援][active]；

[active]: download#qiyong_zhuyin_fuhao_zhiyuan

2. 直接於`<ruby>`元素上套用`mps`或`zhuyin`類別，

		<ruby class="zhuyin">
			柴<rt>ㄔㄞˊ</rt>
			米<rt>ㄇㄧ˅</rt>
			油<rt>ㄧㄡˊ</rt>
			鹽<rt>ㄧㄢˊ</rt>
			醬<rt>ㄐㄧㄤˋ</rt>
			醋<rt>ㄘㄨˋ</rt>
			茶<rt>ㄔㄚˊ</rt>
		</ruby>


