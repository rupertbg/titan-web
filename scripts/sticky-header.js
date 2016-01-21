// Sticky header menu (tablet & desktop)

(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 445) {
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
            if ($(this).scrollTop() > 0) {
                $('nav').addClass('sticky-nav');
            } else {
                $('nav').removeClass('sticky-nav');
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
    