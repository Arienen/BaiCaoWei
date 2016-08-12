jQuery(function($){

	var idx = $('.amount').html();
	

	// 购物车飞入效果
	$('#addCart').click(function(){

		// 生成一张小图片
		var img = $('<img src="'+$('.smallPic>li').eq(0).find('img').attr('src')+'" alt="" />');
		img.css({
			'width':50,
			'height':50,
			'zIndex':5,
			'border':0,
			'position':'absolute',
			'left':50,
			'top':325
		})
		img.appendTo($(this));

		// 获取购物车的位置
		var left = $('.rightSideWrap')[0].offsetLeft - $('.info')[0].offsetLeft;
		var top = $('.shoppingCart')[0].offsetHeight + $(window).scrollTop();
		console.log($('.info')[0].offsetLeft)
		console.log(top)
		img.animate({
			'left':left,
			'top':top-95,
			'width':10,
			'height':10
		},700,function(){
			img.remove();
		});


		// 点击一次acount加1
		var acount = 0;
		acount++;
		
		// 存入cookie
		var date = new Date();
		date.setHours(date.getHours()+5);
		date = date.toGMTString();
		// 计算总商品数
		idx = (Number(idx))+(Number(acount));
		// 存入cookie
		var goodsJSON = [{
			"count":idx,
			"tejia":$('.qianggou').find('span').html(),
			"yuanjia":$('.yuanjia').find('span').html(),
			"proTit1":$('#tit1').html(),
			"proTit2":$('#tit2').html(),
			"suoluetu":$('.proImg>img').attr('src')
		}];
		goodsJSON = JSON.stringify(goodsJSON);
		document.cookie = 'goods='+goodsJSON+';expires='+date+';path=/';
		// 把数量输出到页面
		$('.acounts').html(idx);
		
	});


	// 点击小图显示中图
	$('.smallPic>li').eq(0).addClass('active');
	$('.bigPic>li').hide();
	$('.layoutBig img').hide();
	$('.bigPic>li').eq(0).show();
	$('.layoutBig img').eq(0).show()
	$('.bigBox').css({'background':'url(img/details/1.jpg) no-repeat'});
	$('.smallPic').on('click','li',function(){
		$('.smallPic>li').removeClass('active');
		$(this).addClass('active');
		var index = $(this).index();
		$('.bigPic>li').hide();
		$('.layoutBig img').hide();
		$('.bigPic>li').eq(index).show();
		$('.layoutBig img').eq(index).show();
	});
	//放大镜效果
	$('.bigpic_layer').on('mouseenter',function(){
		var layout = $('.layoutSmall');
		var layoutBig = $('.layoutBig img');
		$('.layoutBig').show();
		layout.show();
		//移动被放大区域
		$('.bigpic_layer').on('mousemove',function(e){
			var pos ={left:e.offsetX,top:e.offsetY};
			//鼠标靠近边缘的情况
			if(pos.left<100){
				pos.left=100;
			}else if(pos.left>300){
				pos.left=300;
			}
			if(pos.top<100){
				pos.top=100;
			}else if(pos.top>300){
				pos.top=300;
			}
			layout.css({left:pos.left-100,top:pos.top-100});
			layoutBig.css({left:-2*(pos.left-100),top:-2*(pos.top-100)})
		})
	}).on('mouseleave',function(){
		var layout = $('.layoutSmall');
		layout.hide();
		var layoutBig = $('.layoutBig');
		layoutBig.hide();
	})
});

