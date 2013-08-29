<?php


# navigator menu
$menu = array(
    'jianjie' => '簡介',
    'index' => array(
        '0' => '<!--not-a-link-->使用手冊',

        'quanyu_shiyong_de_css_reset' => array(
            '0' => '全域適用的<span lang="en-GB">CSS Reset</span>',
        ),

        'hanzi_biaozhun_geshi' => array(
            '0' => '<u class="pn">漢</u>字標準格式',

            'dixian' => array(
                '0' => '底線',

                'zhuji_yuansu' => '註記元素',
                'lianjie_charu_deng_yuansu' => '連結、插入等元素'
            ),
            'wenzhang_nei_duanluo' => array(
                '0' => '文章內段落',

                'qingdan' => '清單',
                'shipian' => '詩篇'
            ),
            'han-la_jianxi' => '<u class="pn">漢</u><u class="pn">拉</u>間隙',
            'biaodian_fuhao_yangshi' => '標點符號樣式',
            'shuminghao' => '書名號',
            'zhuozhonghao' => '着重號',
            'bianyin_wenzi' => '變音文字',
            'wenzhang_nei_zhongdian' => '文章內重點',
            'yinyong' =>  array(
                '0' => '引用',

                'hangnei_yinyan' => '行內引言',
                'qukuai_yinyong' => '區塊引用'
            ),
            'hanzi_zhuyin' => '<u class="pn">漢</u>字註音',
            'daima_yuansu_li_de_hanzi' =>'代碼元素裡的<u class="pn">漢</u>字',
        ),

        'api' => array(
            '0' => '開放接口及其他',

            'gelei_ziti_yu_zitiji' => '各類字體及字體集',
            'modernizr_buchongji' => '<span lang="en">Modernizr</span>補充集',
            'javascript_jiekou' => array(
                '0' => '<span lang="en-GB">JavaScript</span>接口',

                'han.characterize' => '<code>han.characterize()</code>',
                //'han.convert' => '<code>han.convert( <b>html</b> )</code>',
                'han.support.feature' => '<code>han.support.<b>[feature]</b></code>',
                'han.support.font' => '<code>han.support.font( \'<b>[font]</b>\' )</code>',
                'han.unicode' => '<code>han.unicode[ <b>{range}</b> ]</code>'
            ),
        ),

        'appendix' => array(
            '0' => '附錄',

            //'markdown-crema' => '<span lang="en-GB">Markdown: Créma</span>',
            'terminology' => '詞彙'
        ),
    ),
    'download' => '下載與套用',
    'browser-support' => '適用環境',
    'license' => '授權許可',
);



function un_or_list( $type = 'ul', $end = false ) {
    $end = ( $end ) ? '/' : '';

    return '<' . $end . (( $type === 'ul' ) ? 'ul>' : 'ol>');
};


function nav( $nav , $list_type = 'ul' ) {

    global $menu;
    $result = un_or_list( $list_type );

    foreach ( $menu as $i => $title ) {
        if ( !is_array($title) )
            $result .= '<li><a class="' . $i . '" href="' . $i . '">' . $title . '</a></li>';
        else {
            $sub = $title;
            $index = $i;

            foreach ( $sub as $j => $title ) {
                if ( $j == '0' ) {
                    $not_a_link = ( preg_match('(^\<\!--not-a-link\-->)', $title) ) ? true : false;

                    $link = '<a class="' . $i . '" href="' . $index . '">'. $title . '</a>';
                    $span = '<span class="not-a-link ' . $i . '">'. $title . '</span>';

                    $result .= '<li>' . (( $not_a_link ) ? $span : $link);
                    $result .= ( !next($sub) ) ? '</li>' : '<ol class="' . $i . '">';
                } else {
                    $index = $j . '/';
                    $lists = $title;

                    foreach ( $lists as $k => $title ) {
                        if ( $k == '0' ) {
                            $result .= '<li><a class="' . $j . '" href="' . $index . '">' . $title . '</a>';
                            $result .= ( !next($lists) ) ? '</li>' : '<ol class="' . $j . '"">';

                        } else {
                            $title = ( is_array($title) ) ? $title['0'] : $title;
                            $result .= '<li><a class="' . $k . '" href="' . $index . $k . '">' . $title . '</a></li>';
                        }
                        if ( $k != '0' && !next($lists) )
                            $result .= '</ol></li>';
                    }
                }


                if (  $j != '0' && !next($sub) )
                    $result .= '</ol></li>';
            }
        }
    }

    $result .= un_or_list( $list_type, true );

    return $result;
};


function sectional( $matches ) {

    global $menu;

    $name = htmlspecialchars_decode(str_replace('&#95;', '_', $matches[1]));
    $list_type = 'ol';

    $content = $menu['index'][$name];
    $result = '<' . $list_type .  ' class="manual-index">';


    foreach ( $content as $i => $title ) {
        $hash = ( $name !== 'api') ? '#' : '-';

        if ( $i == '0' )
            continue;
        if ( !is_array($title) ) 
            $result .= '<li><a href="' . $name . '/' . $i . '">' . $title . '</a>';
        else {
            $sub = $title;

            foreach ( $sub as $j => $title ) {
                if ( $j == '0' ) {
                    $result .= '<li><a href="' . $name . '/' . $i . '">' . $title . '</a>';
                    $result .= ( !next($sub) ) ? '</li>' : '<ol>';
                } else
                    $result .= '<li><a href="' . $name . '/' . $i . $hash . $j . '">' . $title . '</a></li>';

                if ( $j != '0' && !next($sub) )
                    $result .= '</ol></li>';
            }
        }

        if ( !next($content) )
            $result .= un_or_list( $list_type, true );
    }


    return $result;
};


?>