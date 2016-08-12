jQuery(function($){
	var isTrue = true;


	// 手机号码的验证
	$('.teleNum').blur(function(){
		var $teleNum = $('.teleNum').val();
		if(/^1\d{10}$/.test($teleNum)){
			$('.teleNumTips').html('可用~').css({color:'#b1dc04'});
		}else{
			isTrue = false;
			$('.teleNumTips').html('请输入有效的手机号码！');
			$('.teleNum').css({'background':'url(../img/index/icon.png) -190px -100px;'})
		}
	});


	// 验证验证码
	$('.picCaptCha').blur(function(){
		var $picCaptCha = $('.picCaptCha').val();
		var reg = new RegExp('^ga7j$','i');
		if(reg.test($picCaptCha)){
			$('.codeTips').html('正确~').css({color:'#b1dc04'});
		}else{
			isTrue = false;
			$('.codeTips').html('请输入有效的验证码！');
		}
	});


	// 验证短信验证码
	$('.messageChec').blur(function(){
		var $messageChec = $('.messageChec').val();
		if(/^\d{6}$/.test($messageChec)){
			$('.messagesTips').html('正确~').css({color:'#b1dc04'});
		}else{
			isTrue = false;
			$('.messagesTips').html('请输入有效的短信验证码！');
		}
	});

	// 验证密码
	$('.pass1').keyup(function(){
		var $pass1 = $('.pass1').val();
		if(/^\w{8,16}$/.test($pass1)){
			$('.pass1Tips').html('正确~').css({color:'#b1dc04'});
		}else{
			isTrue = false;
			$('.pass1Tips').html('请输入8~16位密码！');
		}
	});

	// 验证密码2
	$('.pass2').keyup(function(){
		var $pass1 = $('.pass1').val();
		var $pass2 = $('.pass2').val();
		if($pass1 == $pass2){
			$('.pass2Tips').html('正确~').css({color:'#b1dc04'});
		}else{
			isTrue = false;
			$('.pass2Tips').html('两次输入的密码不一致！');
		}
	});

	if(isTrue){
		$('.toLogin').click(function(){
			window.open('register.html');
			//将注册信息存储
			var date = new Date();
			date.setDate(date.getDate()+15);
			date = date.toGMTString();
			document.cookie = "id"+$('.teleNum').val()+"="+$('.teleNum').val()+";expires="+date+";path=/";
			document.cookie = "pass"+$('.teleNum').val()+"="+$('.pass1').val()+";expires="+date+";path=/";
		});
	}
});