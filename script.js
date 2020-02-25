$(function(){
	$('li').hover(function(){
		$(this).find('.box1').slideDown();
	}, function(){
		$(this).find('.box1').slideUp();
	});
});