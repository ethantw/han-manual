

(function($){

    var lang = {
        domain: document.domain,
        location: window.location.toString(),
        external: '這是一個外部連結'
    },


    resizr = function() {
        var width = $(window).width();

        if ( width < 1050 && $('nav#sidebar').hasClass('on') ) {
            $('nav#sidebar').removeClass('on').addClass('off');

        } else if ( width >= 1050 && $('nav#sidebar').hasClass('off') )
            $('nav#sidebar').removeClass('off').addClass('on');
    };




    $(document).bind('ready', function(){

        // highlights all external links.
        $('a[href]').each(function(){
            var href = this.href.replace(/^http:\/\//, '').replace(/^https:\/\//, '');

                if ( $(this).hasClass('no-externalicon') )  return;

                $(this).addClass(function(){
                    return (( href.indexOf(lang.domain) != 0 ) ? 'external ' : '') +
                        (( $(this).find('img').length > 0 ) ? 'img' : 'text');
                });
        });



        $(window).bind('resize ready', resizr);


        $('button#for-sidebar-nav').bind('click', function(){

            if ( $('nav#sidebar').hasClass('off') ) {
                $('nav#sidebar').removeClass('off').addClass('on');
            } else {
                $('nav#sidebar').removeClass('on').addClass('off');
            }
        });



        $('body > article > h1').each(function(){
            var id = $(this).attr('id');

            $(this)
            .removeAttr('id')
            .wrap( $('<header class="manual">').attr('id', id) );
        });

    });

})(jQuery);





























