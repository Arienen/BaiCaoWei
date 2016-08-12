jQuery(function($){


	// 侧栏
	$('.side').find('div').hover(function(){
		$(this).css({
			'backgroundColor':'#d6362a',
			'opacity':1
		}).animate({marginLeft:0},400);
	},function(){
		$(this).css({
			'backgroundColor':'#000',
			'opacity':0.6
		}).animate({marginLeft:64},400);
	});

	// 点击置顶
	$('.toTop').click(function(){
		$(window).scrollTop(0);
	});


	// 点击跳到相应楼层
	$('.contentFl').on('click','.contentTit>span',function(){
		var index = $(this).index();
		var scrollTop = ($('.contentFl').eq(index))[0].offsetTop;
		$(window).scrollTop(scrollTop);

	})
		
});