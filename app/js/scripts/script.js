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
	$(".js-menu-link").click(function(){
		var all = $(".js-menu-child");
		var child = $(this).parent().find(".js-menu-child");
		if(child.hasClass("open")){
			child.removeClass("open").slideUp();
		}
		else{
			all.removeClass("open").slideUp();
			child.removeClass("open").slideUp();
			child.addClass("open").slideDown();
		}
		return false;
	});
	$('.js-menu-btn').click(function(){
		$('.js-menu').slideToggle();
	});
});