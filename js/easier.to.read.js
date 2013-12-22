

;(function($){

    var lang = {
        domain: document.domain,
        location: window.location.toString(),
        external: '這是一個外部連結'
    };



    $(document).on('ready', function(){

        // highlights all external links.
        $('a[href]').each(function(){
            var href = this.href.replace(/^http:\/\//, '').replace(/^https:\/\//, '');

                if ( $(this).hasClass('no-externalicon') )  return;

                $(this).addClass(function(){
                    return (( href.indexOf(lang.domain) != 0 ) ? 'external ' : '') +
                        (( $(this).find('img').length > 0 ) ? 'img' : 'text');
                });
        });

    });

})(jQuery);


(function($){

    var url = document.URL,
    title = document.title;


    $(document).on('ready', function(){
        var classes, id, cat, manual;


        /* =================================================
            將文章標題包裹在`<header>`中
           ================================================= */

        $('body > article > h1').each(function(){
            var id = $(this).attr('id');

            $(this)
            .removeAttr('id')
            .wrap( $('<header class="manual">').attr('id', id) );
        });



        /* =================================================
            Navibar指引樣式、瀏覽器標題更換
           ================================================= */

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
            heading_for_title = $(this).text();

            $(this).html( $('<a>').attr( 'href', url ).html( heading ) );

            document.title = heading_for_title + ' — ' + title;
        });



        /* =================================================
            小視窗環境下的navibar開關
           ================================================= */

        $(window).bind('ready resize', function(){
            var width = $(window).width();

            if ( width < 760 && $('nav#sidebar').hasClass('on') )
                $('nav#sidebar').removeClass('on').addClass('off');

            else if ( width >= 761 && $('nav#sidebar').hasClass('off') )
                $('nav#sidebar').removeClass('off').addClass('on');
        });


        $('button#for-sidebar-nav').on('click', function(){
            if ( $('nav#sidebar').hasClass('off') )
                $('nav#sidebar').removeClass('off').addClass('on');

            else
                $('nav#sidebar').removeClass('on').addClass('off');
        });



        /* =================================================
            避免scrolling衝突
           ================================================= */

        $('html, body').on('mousewheel DOMMouseScroll', function(event){
            $('nav#sidebar ul').on('hover', function(){
                event.preventDefault();
            });
        })


    });
})(jQuery);



















