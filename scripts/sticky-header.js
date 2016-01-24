// Sticky header menu (tablet & desktop)

                   
        $(window).scroll(function(){
            if ($(this).scrollTop() > 520) {
                $('.searchbar').addClass('sticky-search');
            } else {
                $('.searchbar').removeClass('sticky-search');
            }
        });



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

// Scroll spin

/*
$('document').ready(function() {
             $(document).scroll(function(){
             if(document.documentElement.clientHeight +
             $(document).scrollTop() >= document.body.offsetHeight )$(document).scrollTop(0);
             });
          });

*/
