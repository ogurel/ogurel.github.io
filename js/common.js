$(document).ready(function() {

	$('.main-rate-slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 2000,
		slidesToShow: 12,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 10,
			}
		},
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 8,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 6,
			}
		},
		{
			breakpoint: 920,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 685,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 470,
			settings: {
				slidesToShow: 2,
			}
		},
		]
	});

	$('.faq-item-question').click(function () {
		$(this).toggleClass('active').next().slideToggle();
		$('.faq-item-question').not(this).removeClass('active').next().slideUp();
	});

	$('.toggle-nav').on('click', function() {
		$(this).toggleClass('on');

		var $this = $(this);
		if($this.hasClass('on')){
			$('.mnu-mob-wrapper').animate({
				right: '0'
			}, 200);
			$('body').animate({
				right: '250px'
			}, 200);
		} else {
			$('.mnu-mob-wrapper').animate({
				right: '-250px'
			}, 200);
			$('body').animate({
				right: '0'
			}, 200);
		}
	});

	$('.header-lang > li').hover(function(){
		$(this).children('.header-lang-drop').stop(false, true).fadeIn(300);
	}, function(){
		$(this).children('.header-lang-drop').stop(false, true).fadeOut(300);
	});

	$('.investments-tabs-nav-item').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active').closest('.investments-tabs').find('.investments-tabs-content').removeClass('active').eq($(this).index()).addClass('active');
	});

	$('.account-calc-radio-label').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active').closest('.account-calc').find('.account-calc-tabs-content').removeClass('active').eq($(this).index()).addClass('active');
	});

	$('.reviews-item-wrapper').masonry({
		itemSelector: '.reviews-item',
		columnWidth: '.reviews-item',
		percentPosition: true
	});

	$(".register-form").validate({
		rules: {
			pin: {
				number: true,
			},
		},
		messages:{
			login:{
				required: '',
			},
			email:{
				required: '',
			},
			password:{
				required: '',
			},
			passwordrepeat:{
				required: '',
			},
			pin:{
				required: '',
				number: 'Введите только цифры',
			},
		}
	});

	$('.file-wrapper input[type=file]').change(function(){
		var filename = $(this).val().replace(/.*\\/, "");
		if(filename==''){
			$(this).next().text('Выберите файл');
		}else{
			$(this).next().text(filename);
		}
	});

	$('select').styler();

	new WOW().init();

});

function copy() {
	var copyText = document.getElementById('partnership-link-value');
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand('copy');
}

var scene = document.getElementById('parallax-1');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('parallax-2');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('parallax-3');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('parallax-4');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('parallax-5');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('parallax-6');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('parallax-7');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('parallax-8');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('parallax-9');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('parallax-10');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('parallax-11');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('parallax-12');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('parallax-13');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('parallax-14');
var parallaxInstance = new Parallax(scene);