$(document).ready(function(){	

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

	// $(window).scroll(function(){
	// 	var hT = $('.section').offset().top,
	// 		hH = $('.section').outerHeight(true),
	// 		wH = $(window).height(),
	// 		wS = $(this).scrollTop();
	// 		//console.log('hT: ' + hT + ' hH: ' + hH + ' wH: ' + wH + ' wS: ' + wS);
	// 	if(wS > (hT+hH-wH)){
	// 		$('.img').addClass('scale-plus');
	// 		console.log('doszlo');
	// 	}		
	// });
	

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

var instance = lity('https://www.youtube.com/watch?v=JAHZMMhRNQQ');
 instance.close().then(function() {
    console.log('Lightbox closed');
});
// Bind as an event handler
var o = $('.ytp-button').on('click', lity);

console.log(o);



$('.logo a').animate({
	scrollTop: ($('.header').offset().top)
},1500);

var menu_button = $('#menuToggle');
var menu_ul = $('.ul-nav');
var menu_li = menu_ul.children();
var nav = $('.nav');

var x = false;
menu_button.on('click', function(){
	if(!x){
		menu_ul.fadeIn(1000);
		nav.addClass('navBG');		
		x = true;
	} else {
		menu_ul.fadeOut(1000);
		nav.removeClass('navBG');
		x = false;
	}
	menu_li.on('click',function(){
			menu_ul.fadeOut();
			nav.removeClass('navBG');
		});
})



// menu_ul.children().on('click',function(){
// 	menu_ul.fadeOut();
// 	nav.removeClass('navBG');
// 	menu_button.one('click',function(){
// 		menu_ul.fadeIn();
// 		nav.addClass('navBG');
// 	})
// })

function someFn(){
	console.log('powinno sie schować');
}



});