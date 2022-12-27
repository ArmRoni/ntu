
jQuery(function(){
	jQuery('#menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});
});

jQuery(".menu_bar").click(function() {
	jQuery('#menu_holder').toggleClass('active-open');
	jQuery(this).toggleClass('menu_bar_active');

});

jQuery(".menu li").click(function() {
    jQuery(this).addClass('active');
    jQuery(this).siblings().removeClass("active");
});





jQuery('.banner_slider').owlCarousel({
	loop: true,
	margin: 0,
	autoplay: true,
	nav: false,
	dot: true,
	responsive:{
	   0:{
	   items: 1,
	   },
       }
});


jQuery('.video_slider').owlCarousel({
	loop: true,
	margin: 25,
	autoplay: true,
	nav: false,
	dot: true,
	responsive:{
	   0:{
	   	items: 1,
	   },
	   768:{
	   	items: 2,
	   },
	   992:{
	   	items: 3,
	   	dotsEach:1,
	   },
       }
});


jQuery('.interview_text_slider').owlCarousel({
	loop: true,
	margin:0,
	autoplay: true,
	animateOut: 'fadeOut',
	nav: true,
	dots: false,
	navText: [
            '<span aria-label="' + 'Previous' + '"><i class="fa ion-ios-arrow-thin-left"></i>Tips to Ace Your Online Interviews</span>',
            '<span aria-label="' + 'Next' + '"> Tips to Ace Your Online Interviews <i class="fa ion-ios-arrow-thin-right"></i> </span>'
        ],
	responsive:{
	   0:{
	   	items: 1,
	        dots: false,

	   },
       }
});


jQuery('.button a').click(function () {
	var Lochref = jQuery(this).attr('href');
	jQuery("html, body").stop().animate({
	scrollTop: jQuery(Lochref).offset().top -0
	}, 1500);
	return false;
});