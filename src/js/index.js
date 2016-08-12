jQuery(function($){
	// 鼠标指向侧导航栏，显示详细导航
	$('.menus').hover(function(){
		var index = $(this).index();
		var height = $(this).height() * index;
		$('.hideBox').css({'display':'none'});
		$('.hideBox').eq(index).css({
			'display':'block',
			'top':height
		});
	},function(){
		var index = $(this).index();
		$('.hideBox').eq(index).hover(function(){
			$(this).css({'display':'block'});
		},function(){
			$('.hideBox').css({'display':'none'});
		});
		
	});



	// Banner轮播图
	var img = $('.bannerPic').find('a');
	var index = 0;
	var num = $('.num');
	num.eq(index).css({'backgroundColor':'#f28d01'});
	function shufflingImg(){
		img.eq(index).fadeOut(700);
		num.eq(index).css({'backgroundColor':'#000'});
		index==img.length-1 ? index=0 : index++
		img.eq(index).fadeIn(700);
		num.eq(index).css({'backgroundColor':'#f28d01'});
	}
	var timer1 = setInterval(shufflingImg,3000);
	// 鼠标悬停在1、2按钮进行切换
	num.hover(function(){
		clearInterval(timer1);
		img.hide();
		img.eq($(this).index()-2).show();
		num.css({'backgroundColor':'#000'});
		$(this).css({'backgroundColor':'#f28d01'});
	},function(){
		timer1 = setInterval(shufflingImg,3000);
	});



	// Floor3右侧圆形按钮悬停切换div
	var goodSelling = $('.goodSelling').find('div');
	var idx = 0;
	var btn = $('.F3rightBtn').find('a');
	btn.eq(idx).addClass('on');
	function goodSellingShow(){
		goodSelling.fadeOut(700);
		btn.removeClass('on');
		idx==goodSelling.length-1 ? idx=0 : idx++;
		goodSelling.eq(idx).fadeIn(700);
		btn.eq(idx).addClass('on');
	}
	var timer2 = setInterval(goodSellingShow,6000);
	$('.F3rightBtn').on('mouseenter','li',function(){
		clearInterval(timer2);
		idx = $(this).index();
		goodSelling.hide();
		goodSelling.eq($(this).index()).show();
		btn.removeClass('on');
		$(this).find('a').addClass('on');
	}).on('mouseleave','a',function(){
		timer2 = setInterval(goodSellingShow,6000);
	});



	// 4~10F的div切换功能
	//清除bd的浮动
	var clear = $('<div/>').addClass('clear')
	$('.bd').after(clear);
	//设置第一个分类的背景颜色
	
	$('.labelList').each(function(idx,item){
		var color = $(this).parents('.contents').css('borderTopColor');
		$(this).find('a:first').css({
			backgroundColor:color,
			color:'#fff',
			fontWeight:'bold'
		});
	})
	var i;
	var color;
	$('.labelList').on('mouseenter','li',function(){
		//把所有颜色的都清除
		$(this).parents('.labelList').find('a').css({
			backgroundColor:'#fff',
			color:'#000',
			fontWeight:'normal'
		});
		var index = $(this).index();
		i=index;
		console.log(i)
		//显示对应的foods
		var divs = $(this).parents('.labelList').siblings('div');
		divs.hide().eq(index).show();
		//改变指向的按钮的样式
		color = $(this).parents('.contents').css('borderTopColor');
		console.log(color)
		$(this).find('a').css({
			backgroundColor:color,
			color:'#fff',
			fontWeight:'bold'
		});
	}).on('mouseleave','li',function(){
		//清除样式
		$(this).parents('.labelList').find('a').css({
			backgroundColor:'#fff',
			color:'#000',
			fontWeight:'normal'
		});
		console.log(i,color)
		//给最后指向的按钮，附上样式
		$(this).parents('.labelList').find('a').eq(i).css({
			backgroundColor:color,
			color:'#fff',
			fontWeight:'bold'
		});
	});








});



