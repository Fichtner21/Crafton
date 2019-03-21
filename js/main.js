$(document).ready(function(){	

	$('.header__slider').bxSlider({
        speed: 1000,
        slideMargin: 0,
        auto: true,
        autoStart: true,
        controls: true,
        adaptiveHeight: true,
        nextSelector: '.yel-next',
        prevSelector: '.yel-prev',
        nextText: '',
        prevText: '',
        onSliderLoad: function() {
          $('.bx-pager-link, .bx-prev, .bx-next').attr('tabindex', '-1');
        }    
    });		

  	var stickyNavTop = $('.header-nav').offset().top;
  	console.log(stickyNavTop);
  	timeout = '';

  	function stickyNav(){
  		var scrollTop = $(window).scrollTop();
  		//console.log(scrollTop);
  		if (scrollTop > stickyNavTop) {
  			$('.header-nav').addClass('sticky');
  			$('.logo').removeClass('logo').addClass('logo-animate');
  			$('.nav .ul-nav li').removeClass('margin-top30');  			
  		} else {  			
			$('.header-nav').removeClass('sticky').addClass('trans');  			
  		}
  		if (scrollTop == 0){
			$('.logo-animate').removeClass('logo-animate').addClass('logo');			
		}
  	}

  	stickyNav();
	
	$(window).scroll(function() {
		stickyNav();
	});		

	var $animation_elements = $('article');
	
	var $window = $(window);

	//$window.on('scroll', check_if_in_view);
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.css({"display":"flex"}).animate({
      	opacity: 1      	
      }, 1000); //addClass('in-view');
    } else {
      //$element.removeClass('in-view');
    }
  });
}

$('.logo a').animate({
	scrollTop: ($('.header').offset().top)
},1500);

	var menu_button = $('#menuToggle');
	var menu_ul = $('.ul-nav');
	var menu_li = menu_ul.children();
	var nav = $('.nav');
	var x = false;

	menu_button.on('click', function(){
		if(x !== true) {
			menu_ul.fadeIn(1000);
			nav.addClass('navBG');
			menu_li.on('click',function(){
				menu_ul.fadeOut();
				nav.removeClass('navBG');
			});		
			x = true;
		} else {
			menu_ul.fadeOut(1000);
			nav.removeClass('navBG');
			x = false;
		}
	})


});