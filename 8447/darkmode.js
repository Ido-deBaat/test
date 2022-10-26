$(document).ready(function() {
    
    var dm_toggle = $('#darkmode-toggle');
//    var cc_mode = $('html').attr('color-mode');
    
//    function toggle_mode() {
//        
//        var nc_mode = null;
//        
//        if(dm_toggle.is(':checked')) {
//            nc_mode = 'dark';
//        } else {
//            nc_mode = 'light';
//        }
//        
//        $('html').attr('color-mode', nc_mode);
//    };
    
    dm_toggle.click(function() {
        
        var nc_mode = null;
        
        if(dm_toggle.is(':checked')) {
            nc_mode = 'dark';
        } else {
            nc_mode = 'light';
        }
        
        $('html').attr('color-mode', nc_mode);
        
    });
    
});