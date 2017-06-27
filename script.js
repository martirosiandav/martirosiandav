$(document).ready(function(){
	
	$('#fb_button').mouseenter(function(){
		$('#fb_title').fadeIn('slow');
	});
	$('#fb_button').mouseleave(function(){
		$('#fb_title').fadeOut('slow');
	});

	$('#in_button').mouseenter(function(){
		$('#in_title').fadeIn('slow');
	});
	$('#in_button').mouseleave(function(){
		$('#in_title').fadeOut('slow');
	});

	$('#vk_button').mouseenter(function(){
		$('#vk_title').fadeIn('slow');
	});
	$('#vk_button').mouseleave(function(){
		$('#vk_title').fadeOut('slow');
	});

	$('#g_button').mouseenter(function(){
		$('#g_title').fadeIn('slow');
	});
	$('#g_button').mouseleave(function(){
		$('#g_title').fadeOut('slow');
	});

	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},4000);
	});
});