//------Funcion para menú pegajoso --------
$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});
 
});

//------Efecto hover en las imagenes --------
$(".hover").mouseleave(
	function () {
	  $(this).removeClass("hover");
	}
  );
  