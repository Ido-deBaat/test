// vars
var scrolled;
var st_last = 0;
var scroll_direction;
var scroll_delta = 24;
var height_navbar = $('.menu-container').outerHeight();

$(window).scroll(function(event) {scrolled = true;});

// funs
setInterval(function() {

    if (scrolled) {
        set_scroll_dir();
        scrolled = false;
    }

}, 250);


function heads_up() {    
    
    console.log(scroll_direction);
    $('header').removeClass('nav-down').addClass('nav-up');
    
};

function heads_down() {    
    
    console.log(scroll_direction);
    $('header').removeClass('nav-up').addClass('nav-down');
    
};

function set_scroll_dir() {

    var st_current = $(this).scrollTop();

    if (Math.abs(st_current - st_last) >= scroll_delta) {

        if (st_current > st_last && scroll_direction != 'down' &&
            st_current > 0) {

            scroll_direction = 'down';
            heads_down();

        } else if (st_current < st_last && scroll_direction != 'up') {

            scroll_direction  = 'up';
            heads_up();

        }

    };

    st_last = st_current;

};

//function scroll_action() {
//    
//    var st_current = $(this).scrollTop();
//    
//    if (Math.abs(st_last - st_current) <= scroll_delta) {
//        
//        if (st_current > st_last && 
//            st_current > height_navbar) {
//            
//            $('header').removeClass('nav-up').addClass('nav-down');
////            alert('down');
//            
//        } else {
//            
//            if (st_current + $(window).height() <  $(document).height()) {
////                $('header').removeClass('header-up').addClass('header-down');
//                $('header').removeClass('nav-down').addClass('nav-up');
////                alert('up');
//            }
//            
//        }
//        
//    }
//    
//    st_last = st_current;
//    
//}










