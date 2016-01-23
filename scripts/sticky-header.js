// Sticky header menu (tablet & desktop)

(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 520) {
                $('.searchbar').addClass('sticky-search');
            } else {
                $('.searchbar').removeClass('sticky-search');
            }
        });
    });
})(jQuery);

(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 445) {
                $('.nav-container').addClass('relatch-nav');
                $('.nav-container').removeClass('sticky-nav');
            }
            if ($(this).scrollTop() < 445) {
                $('.nav-container').addClass('sticky-nav');
                $('.nav-container').removeClass('relatch-nav');
            }
        });
    });
})(jQuery);

// Scroll spin
          
/*
$('document').ready(function() {
             $(document).scroll(function(){
             if(document.documentElement.clientHeight + 
             $(document).scrollTop() >= document.body.offsetHeight )$(document).scrollTop(0);
             });
          }); 
          
*/
    