$(document).ready(function (){
	$('.carousel__worcks').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		autoplay: false,
		nextArrow: document.querySelector('#my-arrow-next'),
		prevArrow: document.querySelector('#my-arrow-prev')
	});
	$('.carousel__contributor').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		nextArrow: document.querySelector('#my-arrow-next_1'),
		prevArrow: document.querySelector('#my-arrow-prev_2')
	});

	 //табы  

	$('ul.tabs__caption').on('click', 'li:not(.active)', function (e) {
		e.preventDefault();
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

})


 