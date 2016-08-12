jQuery(function($){
	// 获取cookie并生成Div
	var cookie = document.cookie;
	var arr = cookie.split('; ');
	for(var i in arr){
		if(arr[i].indexOf('goods=')==0){
			var goodsinfo = arr[i].slice(6);
			goodsinfo = JSON.parse(goodsinfo);
			$('<img src="../'+goodsinfo[0].suoluetu+'" alt="" />').addClass('suoluetu').insertBefore($('.miaoshu'));
			console.log(goodsinfo[0])
			$('<p>'+goodsinfo[0].proTit1+'</p>').addClass('proTitle').appendTo($('.miaoshu'));
			$('<span>'+goodsinfo[0].proTit2+'</span>').addClass('discript').appendTo($('.miaoshu'));
			$('<p>'+goodsinfo[0].tejia+'</p>').addClass('proPrice').insertAfter($('.amount_box'));
			$('<p>'+'￥'+Number(goodsinfo[0].tejia)*Number(goodsinfo[0].count)+'</p>').addClass('totalProPrice').insertBefore($('.do'));
			$('.proLists').css({display:'block'});
			$('#J_ItemAmount').val(goodsinfo[0].count);
		}
	}
	$('.isSelected').find('span').html(goodsinfo[0].count);
	$('.totalPrice').find('span').html($('.totalProPrice').html());
	var yuanjia = Number(goodsinfo[0].tejia)*Number(goodsinfo[0].count);
	var tejia = Number(goodsinfo[0].yuanjia)*Number(goodsinfo[0].count);
	$('.hasSave').find('span').html(tejia-yuanjia);
});