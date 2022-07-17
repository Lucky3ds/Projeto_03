$(function(){
	var delay = 1000;
	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offseTop = $(href).offset().top;

		$('html,body').animate({'scrollTop':offseTop},delay); 
	})
})