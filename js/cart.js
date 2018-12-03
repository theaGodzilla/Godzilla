window.onload=function(){
	//	console.log(document.cookie);
	var name1=document.cookie.split('=')[1];
	//	console.log(name1);
	var topwel=document.getElementById('topwel');
	var topwel2=document.getElementById('topwel2');
	var namess=document.getElementById('namess');
	var quit=document.getElementById('quit');
	if(document.cookie){
		topwel.style.display='none';
		topwel2.style.display='block';
		namess.innerHTML='您好！'+name1;
	}
	//点击退出
	quit.onclick=function(){
		var res=confirm('您确定退出吗？')
		if( res ){
			Cookie.remove('usname');
			topwel.style.display='block';
			topwel2.style.display='none';
		}
	}
	
	var Baoshui=document.getElementById('Baoshui');
	var Xianggang=document.getElementById('Xianggang');
	
	function BSlist(bs){
		var html='';
		for( var i=0;i<bs.length;i++ ){
			var total=(bs[i].xianjia)*(bs[i].qua);
			html+=`
					<tr class="${bs[i].id}">
	    					<td>
	    						<div class="CartPcheckbox fl">
	    							<input type="checkbox" name="" class="bsxuan" value="" />
	    						</div>
	    						<div class="CartPimg fl">
	    							<img class="Pimgs" src="../img/list/${bs[i].img}"/>
	    						</div>
	    					</td>
	    					<td>
	    						<div class="">
	    							<a href="">${bs[i].pinpai} ${bs[i].name} <span>${bs[i].spec}<span></a>
	    						</div>
	    						<div class="CartTablespec">${bs[i].spec}</div>
	    						<div class="CartTablepromotions">
	    							<i>直降</i>&nbsp;直降活动
	    						</div>
	    					</td>
	    					<td>${bs[i].xianjia}</td>
	    					<td>
	    						<input type="button" name="" id="jia" class="jian hao" value="-" />
	    						<input type="text" name="" id="quantity" class="quantity" value="${bs[i].qua}" />
	    						<input type="button" name="" id="jian" class="jia hao" value="+" />
	    					</td>
	    					<td>${total}</td>
	    					<td class="del">删除</td>
	    				</tr>
			`;
		}
		Baoshui.innerHTML=html;
	}
	
	function XGlist(xg){
		var html1='';
		for( var i=0;i<xg.length;i++ ){
			var total=(xg[i].xianjia)*(xg[i].qua);
			html1+=`
					<tr class="${xg[i].id}">
	    					<td>
	    						<div class="CartPcheckbox fl">
	    							<input type="checkbox" name="" class="xgxuan" value="" />
	    						</div>
	    						<div class="CartPimg fl">
	    							<img class="Pimgs" src="../img/list/${xg[i].img}"/>
	    						</div>
	    					</td>
	    					<td>
	    						<div class="">
	    							<a href="">${xg[i].pinpai} ${xg[i].name} <span>${xg[i].spec}<span></a>
	    						</div>
	    						<div class="CartTablespec">${xg[i].spec}</div>
	    						<div class="CartTablepromotions">
	    							<i>直降</i>&nbsp;直降活动
	    						</div>
	    					</td>
	    					<td>${xg[i].xianjia}</td>
	    					<td>
	    						<input type="button" name="" id="jia" class="jian hao" value="-" />
	    						<input type="text" name="" id="quantity" class="quantity" value="${xg[i].qua}" />
	    						<input type="button" name="" id="jian" class="jia hao" value="+" />
	    					</td>
	    					<td>${total}</td>
	    					<td class="del">删除</td>
	    				</tr>
			`;
		}
		Xianggang.innerHTML=html1;
	}
	
	var url='../api/cartlist.php';
	var data=`username=${name1}`;
	ajax('GET',url,data,function(str){
//		console.log(str);
//		console.log(JSON.parse(str));
		var bs=JSON.parse(str).baoshui;
		console.log(bs);
		BSlist(bs);
		var xg=JSON.parse(str).xianggang;
		console.log(xg);
		XGlist(xg);
		
		//减数量
		$('.shuju').on('click','.jian',function(){
			var val=$(this).next().val();
			val--;
			if(val<=1){
				val=1;
			}
			$(this).next().val(val);
			xjtotal($(this));
			alltotal();
			console.log($(this).parent().parent().attr('class'))
			var id=$(this).parent().parent().attr('class');
			var url='../api/selectcart.php';
			var data=`qua=${val}&id=${id}`;
			ajax('GET',url,data,function(str){
				console.log(str);
			})
		})
		//加数量
		$('.shuju').on('click','.jia',function(){
			var val=$(this).prev().val();
			val++;
			$(this).prev().val(val);
			xjtotal($(this));
			alltotal();
			var id=$(this).parent().parent().attr('class');
			var url='../api/selectcart.php';
			var data=`qua=${val}&id=${id}`;
			ajax('GET',url,data,function(str){
				console.log(str);
			})
		})
		
		//小计
		function xjtotal(now){
			var num=now.parent().find('.quantity').val();
//			console.log(num);
			var price=now.parent().prev().text();
//			console.log(price);
			price=$.trim(price);
			var xjprice=price*num;
			now.parent().next().html(xjprice);
		}
		
		//删除当行
		$('.shuju').on('click','.del',function(){
			var theok=confirm('主人，您确定不要我了嘛QAQ？');
//			console.log($(this).parent().attr('class'));
			var id=$(this).parent().attr('class');
			console.log(id);
			var url='../api/delcart.php';
			var data=`id=${id}`;
			ajax('GET',url,data,function(str){
				console.log(str);
			})
			if( theok ){
				$(this).parent().remove();
			}
		})
		
		//全选
		//保税仓
		var isok=true;
		$('.bsallcheck').on('click',function(){
			if(isok){
				$(this).parent().find('.bsquanxuan').prop('checked','checked');
				console.log($(this).parent().find('.bsquanxuan'));
				$('.baoshui .CartPcheckbox input').prop('checked','checked');
				console.log($('.baoshui .CartPcheckbox input'));
			}else{
				$(this).parent().find('.bsquanxuan').removeAttr('checked');
				$('.baoshui .CartPcheckbox input').removeAttr('checked');
			}
			isok = !isok;
			alltotal()
		})
		//香港
		var istrue=true;
		$('.xgallcheck').on('click',function(){
			if(istrue){
				$(this).parent().find('.xgquanxuan').prop('checked','checked');
				$('.xianggang .CartPcheckbox input').prop('checked','checked');
			}else{
				$(this).parent().find('.xgquanxuan').removeAttr('checked');
				$('.xianggang .CartPcheckbox input').removeAttr('checked');
			}
			istrue = !istrue;
			alltotal()
		})
		
//		总复选框被勾选
		$('.shuju').on('click','.CartPcheckbox',function(){
			//香港
//			console.log($('.xianggang').children().size());
			var xgsize=$('.xianggang').children().size();
			var arr1=[];
			for( var i=0;i<xgsize;i++ ){
				if( $('.xianggang .CartPcheckbox').children().eq(i).prop('checked') ){
					arr1.push(i);
				}
			}
			if( arr1.length==xgsize ){
				$('.xgquanxuan').prop('checked','checked');
				istrue=false;
			}else{
				$('.xgquanxuan').removeAttr('checked');
				istrue=true;
			}
			//保税
//			var bssize=$('.baoshui').children().size();
////			console.log(bssize);
//			var arr2=[];
//			for( var i=0;i<bssize;i++ ){
//				if( $('.baoshui .CartPcheckbox').children().eq(i).prop('checked') ){
//					arr2.push(i);
//				}
//			}
//			console.log(arr2.length);
//			if( arr2.length==bssize ){
//				$('.baoshui').prop('checked','checked');
//				isok=false;
//			}else{
//				$('.baoshui').removeAttr('checked');
//				isok=true;
//			}
			
			alltotal();
		})

//		console.log($('.CartPcheckbox input').size());
//		console.log($('.shuju').children().eq(0).children().eq(4).text());
		
		//总数量和总价格
		var arr=[];
		function alltotal(){
			arr.length=0;
			var len=$('.CartPcheckbox input').size();
			//把已经被勾选的那一行的下标存进数组里面
			for( var i=0;i<len;i++ ){
				if( $('.CartPcheckbox input').eq(i).prop('checked') ){
					arr.push(i);
				}
			}
			
			var num = arr.length;
			var allprice=0;
			for( var i=0;i<arr.length;i++ ){
				var price1=$('.shuju').children().eq(arr[i]).children().eq(4).text();
				price1=$.trim(price1);
				allprice+=Number(price1);
			}
			console.log(num);
			console.log(allprice);
			$('#quaspan').html(num);
			$('#totalPrice').html('￥'+allprice);
		}
//		console.log($('#quaspan').html());
//		console.log($('#totalPrice').html());
		
		//全删除
		$('.alldel').on('click',function(){
			var delnum=$('.shuju').children().size();
			console.log(delnum);
//			console.log($('.shuju').children().eq(0).remove());
			var okdel=confirm('您确定要清空购物车吗？');
			if(okdel){
				for(var i=delnum-1;i>=0;i--){
					$('.shuju').children().eq(i).remove();
				}
				var url='../api/alldelcart.php';
				ajax('GET',url,'',function(str){
					console.log(str);
				})
			}
		})
		
		
	})
}
