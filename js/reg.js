window.onload=function(){
	//验证账号
	var username=document.getElementById('username');
	var nameok=document.getElementById('nameok');
	var sqlok=document.getElementById('sqlok');
	var ok1=false;
	var oksql=false;
	username.onblur=function(){
		var val1=username.value; //464843022@qq.com
		var res1=checkReg.trim(val1);
		if( val1 && checkReg.tel(res1) || checkReg.email(res1)) {
			nameok.innerHTML='ok';
			nameok.style.color='green';
			ok1=true;
			if( ok1 ){
				var url='../api/checkname.php';
				var data=`username=${res1}`;
				ajax('GET',url,data,function(str){
//					console.log(str);
					if( str=='0' ){
						sqlok.innerHTML='已存在';
                        sqlok.style.color='red';
                    }else{
                        sqlok.innerHTML='可以注册';
                        sqlok.style.color='green';
                        oksql=true;
                    }
				})
			}
		}else{
			nameok.innerHTML='no';
			nameok.style.color='red';
		}
	}
	
	//密码正则
	var password=document.getElementById('password');
	var passok=document.getElementById('passok');
	var ok2=false;
	password.onblur=function(){
		var val2=password.value;
		var res2=checkReg.trim(val2);
		if( val2 && checkReg.psweasy(res2) ){
			passok.innerHTML='ok';
			passok.style.color='green';
			ok2=true;
		}else{
            passok.innerHTML='no';
            passok.style.color='red';
        }
	}
	
	//验证密码
	var passagan=document.getElementById('passagan');
	var aganok=document.getElementById('aganok');
	var ok3=false;
	passagan.onblur=function(){
		var val3=passagan.value;
		var res3=checkReg.trim(val3);
		var val2=password.value;
		var res2=checkReg.trim(val2);
		if( val3 && checkReg.pwwagain(res3,res2) ){
			aganok.innerHTML='ok';
            aganok.style.color='green';
            ok3=true;
        }else{
            aganok.innerHTML='no';
            aganok.style.color='red';
        }
	}
	
	//验证码
		$.idcode.setCode();
		$("#Txtidcode").blur(function (){
			var IsBy = $.idcode.validateCode();
//			console.log(IsBy);
		});
	
	//注册信息加入数据库并成功跳转
	var regbtn=document.getElementById('regbtn');
	regbtn.onclick=function(){
		var IsBy = $.idcode.validateCode();
//		console.log(IsBy);
		var val1=username.value.trim();
		var val2=password.value.trim();
		var chenkok1=$("#okshasha").prop("checked");//获取同意莎莎的布尔值
//		console.log(chenkok1);
		var chenkok2=$("#noshasha").prop("checked");
//		console.log(chenkok2);
		if( oksql && ok2 && ok3 && IsBy && chenkok1 && !chenkok2 ){
			var url='../api/reg.php';
			var data=`username=${val1}&password=${val2}`;
			ajax('POST',url,data,function(str){
				console.log(str);
				if( str=='yes' ){
					var res1=confirm('注册成功');
					kong();
                    if( res1 ){
                        location.href='login.html';
                    }
				}else{
					 	alert('注册失败');
				}
			})
		}
	}
	
	function kong(){
		username.value='';
		nameok.innerHTML='';
		sqlok.innerHTML='';
		password.value='';
		passok.innerHTML=''
		passagan.value='';
		aganok.innerHTML='';
	}
	
	
}












