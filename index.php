<!DOCTYPE HTML><?php


require('../req/navigator.php');



# Install PSR-0-compatible class autoloader
spl_autoload_register(function($class){
    require '../req/' . preg_replace('{\\\\|_(?!.*\\\\)}', DIRECTORY_SEPARATOR, ltrim($class, '\\')) . '.php';
});

# Get Markdown class
use \Michelf\MarkdownCrema;


# Get some information needed
$domain = $_SERVER['HTTP_HOST'];
$self = $_SERVER['PHP_SELF'];
$url = $_SERVER["REQUEST_URI"];
$dir = preg_replace('{index\.php(/)?}xs', '', $self);

$base = 'http://' . $domain . $dir;

# Read file and pass content through the Markdown praser
$id = ( isset($_GET['id']) ) ? $_GET['id'] : preg_replace('{^' . $dir . '}xs', '', $_SERVER["REQUEST_URI"]);
$id = preg_replace('{/$}xs', '', $id);


foreach ( $menu['index'] as $sub_dir => $zh ) {
    if ( $id === $sub_dir )
        $id = $sub_dir . '/index';
}

$path = './documentation/' . (( $id != '' ) ? $id : 'jianjie') . '.md';
$error_msg = './documentation/error.md';

//print $base; die;

@$markdown = file_get_contents($path);
@$markdown = ( $markdown == "" ) ? file_get_contents($error_msg) : $markdown;

$article = MarkdownCrema::defaultTransform($markdown);
$article = preg_replace_callback(
    '{<p>\[sectional\:[ ]?(.*)\]</p>}xs',
    'sectional',
    $article);

?><html lang="zh-hant-TW" class="han-biaodian-pro han-la">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>漢字標準格式・使用手冊</title>

    <base href="<?=$base;?>">

    <link rel="stylesheet" href="../css/han.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/manual.css">

    <link rel="shortcut icon" href="../img/favicon.png">

    <meta name="author" content="Chen Yijun (@ethantw)">
    <meta name="dcterms.created" content="2011-09-11">
    <meta name="dcterms.modified" content="2013-07-16">

    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script src="../js/han.js"></script>
    <script src="../js/easier.to.read.js"></script>


    <script>
(function($){

    var url = document.URL,
    title = document.title;


    $(document).bind('ready', function(){
        var classes, id, cat, manual;


        manual = ( url.match(/.*\/(quanyu_shiyong_de_css_reset|hanzi_biaozhun_geshi|api|appendix).*/) ) ? 
        url.replace(/.*\/(quanyu_shiyong_de_css_reset|hanzi_biaozhun_geshi|api|appendix).*/ig, '$1') : 'jianjie';

        $('body').addClass(manual);


        if (url.match(/\/manual\/$/)) {
            id = 'jianjie';
        } else {
            classes = url.replace(/(.*)manual\//, '').replace(/\/$/, '').split('/').reverse(),
            id = ( classes[0].match(/^javascript_jiekou\-/) ) ? 'javascript_jiekou' : classes[0],
            cat = classes[1];
        }


        $('nav#sidebar').find( 'a.' + id ).each(function(){
            $(this)
            .addClass('current')
            .parents( 'ol.' + cat ).prev( 'a.' + cat ).addClass('current');
        });


        $('article header h1:eq(0)').each(function(){
            var heading = $(this).html(),
            heading_for_title = $(this).text(),
            anchor;

            anchor = $('<a>').html( heading ).attr({
                'href': url
            });

            $(this).html( anchor );

            document.title = heading_for_title + ' — ' + title;
        });

    });
})(jQuery);
    </script>
</head>


<body>

<nav id="sidebar" class="on">
    <header>
        <h1><a href="http://css.hanzi.co/">漢字標準格式</a></h1>
        <p class="des">印刷品般的<u class="pn">漢</u>字網頁排版框架</p>
    </header>

    <button id="for-sidebar-nav" title="側邊選單開關">側邊欄開關</button>

    <?=nav($menu);?>
 
</nav>

<a id="fork" href="https://github.com/ethantw/Han">在GitHub上Fork這個專案</a>

<article>
<?=$article;?>
</article>



<script>
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-18673404-2']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
</script>

</body>
</html>

