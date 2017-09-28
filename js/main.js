// Loading page
var loaderPage = function() {
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


loaderPage();
goToTop();