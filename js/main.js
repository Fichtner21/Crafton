$(document).ready(function(){
	//SLIDER

	$(function(){
      	$('.bxslider').bxSlider({
	        mode: 'fade',
	        captions: true,
	        slideWidth: 600
      	});
  	});

  	var stickyNavTop = $('.header-nav').offset().top;
  	console.log(stickyNavTop);
  	timeout = '';

  	function stickyNav(){
  		var scrollTop = $(window).scrollTop();
  		//console.log(scrollTop);
  		if (scrollTop > stickyNavTop) {
  			$('.header-nav').addClass('sticky');
  			
  			//if(timeout){
  				//clearTimeout(timeout);
  				//timeout = null;
  			//}
  			//console.log('dodalo klasy sticky');
  		} else {
  			//timeout = setTimeout(function(){
  				$('.header-nav').removeClass('sticky').addClass('trans');
  				
  			//},1000);
  			
  			//console.log('usunieto klase sticky');
  		}
  	}

  	stickyNav();
	// and run it again every time you scroll
	$(window).scroll(function() {
		stickyNav();
	});

	

	$(window).scroll(function(){
		var hT = $('.section').offset().top,
			hH = $('.section').outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();
			console.log('hT: ' + hT + ' hH: ' + hH + ' wH: ' + wH + ' wS: ' + wS);
		if(wS > (hT+hH-wH)){
			$('.img').addClass('scale-plus');
			console.log('doszlo');
		} 
		// if (wS > (hT+hH-wH)) {
		// 	$('.img').removeClass('scale-plus');
		// }
		
	})  	

});