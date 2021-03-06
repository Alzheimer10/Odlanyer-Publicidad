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


contactForm = function(){
	$('form').submit(function( event ) {
	  	event.preventDefault();
		$.ajax({
			method: "POST",
			url: "controllers/mail.php",
	    	data: $("form").serializeArray(), 
	    	success: function(data){
	    		document.getElementById("form-contact").reset();
	    		console.log(data);
				alertify.set('notifier','position', 'top-right');
				alertify.notify('Mensaje Enviado', 'success', 55, function(){  console.log('dismissed'); });
	    	},
			error: function(data) {
				alertify.error('Error al enviar el correo');
	    		console.log('error');
			}
		});
	});
}

/* PRUEBA DEL NOTIFITER
$('.box-contact').on('click', function(){
	alertify.set('notifier','position', 'top-right');
	alertify.notify('sample', 'success', 55, function(){  console.log('dismissed'); });
});
*/

$('#header').css("height",$(window).height()/1.5+'px');
loaderPage();
goToTop();
