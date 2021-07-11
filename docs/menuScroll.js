var scrolled;
var st_last = 0;
var scroll_delta = 5;
var height_navbar = $('.menu-container').outerHeight();

$(window).scroll(function(event) {
    
    scrolled = true;
    
});

setInterval(function() {
    
    if (scrolled) {
        scroll_action();
        scrolled = false;
    }
    
}, 50);

function scroll_action() {
    
    var st_current = $(this).scrollTop();
    
    if (Math.abs(st_last - st_current) <= scroll_delta) {
        
        if (st_current > st_last && 
            st_current > height_navbar) {
            
            $('header').removeClass('nav-up').addClass('nav-down');
//            alert('down');
            
        } else {
            
            if (st_current + $(window).height() <  $(document).height()) {
//                $('header').removeClass('header-up').addClass('header-down');
                $('header').removeClass('nav-down').addClass('nav-up');
//                alert('up');
            }
            
        }
        
    }
    
    st_last = st_current;
    
}