var parallax_window = function(){
	$('.parallax-window').parallax();
},

// Loading page
loaderPage = function() {
	$(window).load(function(){
		$('body').removeClass('ac-scroll-loader');
		$(".ac-loader").fadeOut("slow");
	});
},

// GO-TOP
goToTop = function() {
	$(window).scroll(function(){
		if ($(window).scrollTop() > 400)
			$('.ac-gototop').addClass('active');
		else
			$('.ac-gototop').removeClass('active');
	});
};

$('#header').css("height",$(window).height()/1.5+'px');
loaderPage();
goToTop();