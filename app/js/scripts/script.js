// js jquery
$(document).ready(function() {
	var swiper = new Swiper('.slider', {
		pagination: '.slider__pagination',
		paginationClickable: true,
		preventClicks: false,
		preventClicksPropagation: false
	});
	if($(window).width()>=1240){
		var swiper = new Swiper('.news-slider', {
			slidesPerView: 3,
			spaceBetween: 60,
			nextButton: '.news-slider__next',
			prevButton: '.news-slider__prev',
			preventClicks: false,
			preventClicksPropagation: false
		});
	}
});