jQuery(function($){
	var cookie = document.cookie;
	var arr = cookie.split('; ');
	console.log(arr)
	$('.dengLu').click(function(){
		var $teleNum = $('.teleNum').val();
		var $password = $('.passWord').val();
		for(var i in arr){
			if(arr[i].indexOf("id"+$teleNum+'=')==0){
				var telePhone = arr[i].slice(14);
				console.log(telePhone)
				// 验证密码
				for(var idx in arr){
					if(arr[idx].indexOf("pass"+$teleNum+'=')==0){
					var pass = arr[idx].slice(16);
					console.log(pass)
						if($password!=pass){
							alert('密码错误！');
							return;
						}else{
							//保存登录信息
							var date = new Date();
							date.setDate(date.getDate()+15);
							date = date.toGMTString();
							document.cookie = "login="+$teleNum+";expires="+date+";path=/";
							window.open("../index.html");
							return;
						}
					}
				
				}
			}
		}
		alert('账户错误');
	});
});







/*for(var attr in arr ){
	if(arr[attr].indexOf("id"+username+'=')==0){
		var id = arr[attr].slice(13);
		usertip.html('');
		//验证密码准确性
		for(var idx in arr){
			if(arr[idx].indexOf("pass"+username+'=')==0){
				console.log(arr[attr])
				var pass = arr[idx].slice(16);
				console.log(pass);
				if(passwork!=pass){
					passtip.html('密码错误');
					return;
				}else{
					passtip.html('');
					//保存登录信息
					var date = new Date();
					date.setDate(date.getDate()+15);
					date = date.toGMTString();
					document.cookie = "login="+username+";expires="+date+";path=/";
					window.open("../index.html");
				}
			}
		}
	}else{
		usertip.html('用户名不存在');
	}
}
*/