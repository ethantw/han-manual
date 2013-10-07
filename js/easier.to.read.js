

(function($){

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





























