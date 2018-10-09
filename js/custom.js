(function( $ ){
  "use strict";
	$(document).ready(function() {

		/*-------- Smooth scroll css ------------*/

		var header_height = $('nav').height();
		$('a[href^="#"]').click(function () {
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);

	    return false;
		});

		/*----------- Counter js----------------*/

		$('.counter').counterUp({
		    delay: 10,
		    time: 2000
		  });
	});
	$(window).scroll(function() {
		var header_height = $('nav').height();
		if($(window).scrollTop()>=header_height){
			$('nav').addClass("fixed-header");
		}
		else {
			$('nav').removeClass("fixed-header");
		}
	});

})( jQuery );