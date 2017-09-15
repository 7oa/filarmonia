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

	$('.js-select').click(function(){
		$(this).children(".js-select-opt").slideToggle();
	});

	$('.js-select-opt li').click(function(){
		var item = $(this).text();
		$(this).parents('.js-select').next('.js-select-input').val(item);
	});

	$('.js-dd').click(function(){
		$(this).next('.js-dd-body').slideToggle();
	});

	$('.js-dd-item').click(function(){
		$(this).toggleClass('selected');
		var option_all = $(this).parents('.js-dd-body').find(".js-dd-item.selected").map(function () {
			return $(this).text();
		}).get().join('\n');
		$(this).parents('.js-dd-body').children('.js-dd-input').val(option_all);
	});
});