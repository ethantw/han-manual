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
    <meta name="dcterms.modified" content="2013-06-10">

    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
    <script src="../js/han.js"></script>
    <script src="../js/easier.to.read.js"></script>
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

