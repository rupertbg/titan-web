// Sticky header menu (tablet & desktop)

(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 520) {
                $('.sticky-navbar').fadeIn(0);
            } else {
                $('.sticky-navbar').fadeOut(0);
            }
        });
    });
})(jQuery);