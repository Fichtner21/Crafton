$(document).ready(function(){
	//SLIDER

	$(function(){
      	$('.bxslider').bxSlider({
	        mode: 'fade',
	        captions: true,
	        slideWidth: 600
      	});
  	});

  	var marker = new google.maps.Marker({
      	position: map.getCenter(),
      	icon: 'images/pin-maker.png',
      	map: map
    });

});