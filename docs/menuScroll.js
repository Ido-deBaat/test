var scrolled;
var st_last = 0;
var scroll_direction;
var scroll_delta = 24;
var height_navbar = $('.menu-container').outerHeight();

$(window).scroll(function(event) {scrolled = true;});

setInterval(function() {

    if (scrolled) {
        set_scroll_dir();
        scrolled = false;
    }

}, 250);

function heads_up() {$('header').removeClass('nav-down').addClass('nav-up');};

function heads_down() {
    $('header').removeClass('nav-up').addClass('nav-down');};

function set_scroll_dir() {

    var st_current = $(this).scrollTop();

    if (Math.abs(st_current - st_last) >= scroll_delta) {

        if (st_current > st_last && scroll_direction != 'down' &&
            st_current > 0 && !$('header').hasClass('expand')) {

            heads_down();

        } else if (st_current < st_last && scroll_direction != 'up') {

            heads_up();

        }

    };

    st_last = st_current;

};