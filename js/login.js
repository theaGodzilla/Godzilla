
window.onload=function(){
	//验证码
		$.idcode.setCode();
		$("#Txtidcode").blur(function (){
			var IsBy = $.idcode.validateCode();
//			console.log(IsBy);
		});
		
		var username=document.getElementById('username');
		var password=document.getElementById('password');
		var Logbtn=document.getElementById('Logbtn');
		Logbtn.onclick=function(){
			var val1=username.value;
			var val2=password.value;
			var IsBy = $.idcode.validateCode();
			console.log(IsBy);
			var remberok=$("#remberme").prop("checked");
			console.log(remberok);
			if( IsBy ){
				var url='../api/login.php';
				var data=`username=${val1}&password=${val2}`;
				ajax('POST',url,data,function(str){
					console.log(str);
					if( str=='yes' ){
						var res=confirm('登录成功');
							if(res && remberok){
								var now=new Date();
								now.setDate(now.getDate()+999999);
								document.cookie='usname='+val1+';expries='+now+';path=/shasha';
								location.href='../index.html';
							}else if( res ){
								location.href='../index.html';
							}
					}else{
								alert('登录失败');
							}
				})
			}
		}
}
