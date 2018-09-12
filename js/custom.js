// Preloader 

// makes sure the whole site is loaded
jQuery(window).on('load', function () {
    jQuery(".loader-text").fadeOut();
    jQuery("body").addClass("loaded");
    jQuery(".pk-loader").fadeOut("slow", function () {
        jQuery(this).remove();
    });
});



jQuery(document).ready(function () {

    jQuery("nav > ul > li > a").append("<span class='bottom-line'></span>");


    jQuery(".user_view").click(function () {
        jQuery(".view_links").toggle();
    });



    jQuery(function () {
        jQuery("#datepicker, #datepicker1, #datepicker2").datepicker();
    });
    
    
    jQuery(".withdraw-btn").click(function () {
        jQuery(this).parent().parent().parent().remove();
        jQuery( ".fund-account" ).show();
    });
    

});
