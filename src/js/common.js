jQuery(function($){
	// 封装子菜单显示或隐藏
	$.fn.showDiv = function(){
		$(this).on('mouseover',function(){
			$(this).find('div').show();
			$(this).find('span').css({'transform':'rotate(180deg)'});
		}).on('mouseleave',function(){
			$(this).find('div').hide();
			$(this).find('span').css({'transform':'rotate(0deg)'});
		})
		return this;
	}
	// 执行函数
	$('.box').showDiv();


	// logo置顶
	var isHeight = true;
	function logoToTop(){
		$(window).on('scroll',function(){
			var scroll = $(window).scrollTop();
			var left = ($(window).width() - $('.logo').outerWidth())/2;
			if(scroll>=900){
				$('.logo').css({
					'position':'fixed',
					'top':0,
					'left':left,
					'height':90,
					'box-shadow':'0 1px 1px 1px #ccc',
					'zIndex':5
				});
				if(isHeight){
					$('.logo').height(0);
					$('.logo').animate({height:90},600,function(){
						logoToTop();
					});
					$(window).off('scroll');
					isHeight = false;
				}
					
			}else{
				$('.logo').css({
					'position':'',
					'box-shadow':'0 0 0 0 #fff',
					'zIndex':0
				});
				isHeight = true;
			}
		});	
	}
	logoToTop();


	// 导航栏的小条
	$('.bannerList li').hover(function(){
		$('.borderSpan').show();
		var width = $(this).width();
		var left = $(this).offset().left-width;	
		if($(this).index()==0){
			$('.borderSpan').animate({left:289,width:width},300);
		}else{
			$('.borderSpan').animate({left:left,width:width},300);
		}
	},function(){
		$('.borderSpan').hide();
	});
	


	// getCookieData
	function getCookieData(){
		var cookie = document.cookie;
		var arr = cookie.split('; ');
		for(var i in arr){
			if(arr[i].indexOf('goods=')==0){
				var goodsinfo = arr[i].slice(6);
				goodsinfo = JSON.parse(goodsinfo);
				$('.acounts').html(goodsinfo[0].count);
				return goodsinfo;
			}
		}
		for(var attr in arr){
			if(arr[attr].indexOf('login=')==0){
				console.log(loginName)
				var loginName = arr[attr].slice(6);
				$('.firstline>span>a').html(loginName);
				return loginName;
				console.log($('.firstline>span>a'))
			}
		}
	}
	getCookieData();


});



