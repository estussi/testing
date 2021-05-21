$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.intro').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.about').click(function(){
    	$('html, body').animate({
    		scrollTop:1500
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.platform-services').click(function(){
    	$('html, body').animate({
    		scrollTop:2550
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.placing-order').click(function(){
    	$('html, body').animate({
    		scrollTop:3000
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.preparing-food').click(function(){
    	$('html, body').animate({
    		scrollTop:3500
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.waiting').click(function(){
    	$('html, body').animate({
    		scrollTop:4000
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.picking-up-food').click(function(){
    	$('html, body').animate({
    		scrollTop:4500
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.ride').click(function(){
    	$('html, body').animate({
    		scrollTop:5000
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.safety').click(function(){
    	$('html, body').animate({
    		scrollTop:5500
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.customer-interacttion').click(function(){
    	$('html, body').animate({
    		scrollTop:6000
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.food-consumption').click(function(){
    	$('html, body').animate({
    		scrollTop:6500
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
     $('a.food-waste').click(function(){
    	$('html, body').animate({
    		scrollTop:7000
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
      $('a.reflections').click(function(){
    	$('html, body').animate({
    		scrollTop:7500
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#content').css('left',(0-(scrolled*1.25))+'px');
	$('#getfucked').css('left',(0-(scrolled*1.25))+'px');
  $('#pizza').css('left',(0-(scrolled*.8))+'px');
  $('#ride').css('left',(0-(scrolled*-2))+'px');    
	$('#parallax-bg1').css('left',(0-(scrolled*.5))+'px');
	$('#parallax-bg2').css('left',(0-(scrolled*.8))+'px');
	$('#parallax-bg3').css('left',(0-(scrolled*.83))+'px');
	$('#parallax-bg4').css('left',(0-(scrolled*2))+'px');
	$('#parallax-bg5').css('left',(0-(scrolled*-2))+'px');
	$('#parallax-bg6').css('left',(0-(scrolled*1.25))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#intro').offset().left + 1000;
	var section3Top =  $('#about').offset().left +3000;
	var section4Top =  $('#platform-services').offset().left +4000;
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.intro').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.about').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.latform-services').addClass('active');
	} else if ($(document).scrollTop() >= section4Top){
		$('nav#primary a.about').addClass('active');
	}
	
}
