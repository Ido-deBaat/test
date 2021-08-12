$(document).ready(function() {

    var menu_container = $('#menu');
    var menu_bar = $('#menu-bar')

    menu_click();
    // Opening the menu
    function menu_click(){
        $(menu_bar).on('click', function(e) {
            e.preventDefault();
            toggle_menu();
            $(this).off();
        });
    }

    // Closing the menu
    $('#menu_close, .menu_overlay').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        toggle_menu();
        menu_click();
    });

    function toggle_menu() {

        $(menu_container).toggleClass('expand');
        $(menu_bar).toggleClass('expand');
        $(menu_bar).children().toggleClass('expand');
        $('.navTrigger').toggleClass('active');
        $('.content-container').toggleClass('expand');

    };

});