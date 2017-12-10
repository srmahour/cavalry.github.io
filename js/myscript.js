jQuery(function($) {

    var $nav = $('#verschwinden');
    var $win = $(window);
    var winH = $win.height();   // Get the window height.

    $win.on("scroll", function () {
        if ($(this).scrollTop() > winH-winH ) {
            jQuery(".inner-page #navigation").addClass("fixed-nav");
			jQuery(".inner-page nav.navbar").css({"padding":"10px 0px"});
			jQuery(".inner-page .navbar-brand > img").css({"width":"130px"});
			jQuery(".inner-page .navbar-nav > li > a").css({"padding-top":"10px"});
        } else {
            jQuery(".inner-page #navigation").removeClass("fixed-nav");
			jQuery(".inner-page nav.navbar").css({"padding":"15px 0px"});
			jQuery(".inner-page .navbar-brand > img").css({"width":"140px"});
			jQuery(".inner-page .navbar-nav > li > a").css({"padding-top":"14px"});
        }
    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
    });

});



$(document).ready(function(){
	$("a.to-top").click(function(e){
		var id    =    $(this).attr("href");
		$("html, body").animate({scrollTop:$(id).offset().top-0},1000);
		e.preventDefault();            
	});
	
	jQuery(window).scroll(function(){
		var scroll = jQuery(window).scrollTop();
		if(scroll>=150){
			jQuery("a.to-top").addClass("active");
		}	
		else{
			jQuery("a.to-top").removeClass("active");
		}	
	});
	
	jQuery(".mobile-btn").click(function(){
		jQuery(".menu-area ul").slideToggle();
	});
	
	
	var mql = window.matchMedia("screen and (max-width: 550px)")
	if (mql.matches){ // if media query matches
		 jQuery("footer h3").click(function(){
			jQuery(this).toggleClass("active");
			jQuery(this).parent(".col-xs-6").siblings(".col-xs-6").children("footer h3").removeClass("active");	
			jQuery(this).next(".footer-content").slideToggle();
			jQuery(this).parent(".col-xs-6").siblings(".col-xs-6").children(".footer-content").slideUp();	
		});
	}
	else{
	 // do something else
	}
	
	
});
