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


var detid=location.search.split('?')[1].split('=')[1];
//console.log(detid);

var DetConD=document.getElementById('DetConD');
//console.log(DetConD);
var CsAddcart=document.getElementById('CsAddcart');
//console.log(CsAddcart);
function detdata(arr){
	var html='';
	var htmlspr='';
	var littimgs=JSON.parse(arr[0].xtuxilie);
		html=`
			
					<div class="DetConDfl fl">
						<div class="DetConDflO">
							<div class="ssAndrmD">
								<img class="ssAndrm" src="../img/list/${arr[0].xsAndsp}"/>
							</div>
							<!--商品大图-->
							<div class="magnifier" id="magnifier1">
								<div class="DetConDflOimg magnifier-container" >
									<div class="images-cover"></div>
									<div class="move-view"></div>
								</div>
								<a href="" class="DetConsear">
									<img src="../img/detail/search.PNG"/>
								</a>
								<dl class="DetConpinp">
									<dd>
										<img src="${arr[0].brandimg}"/>${arr[0].brandguozi}
									</dd>
									<dd>
										<img src="../img/detail/45d954f097d557085ffa9cb3110cf5d753118162.png"/>热卖中
									</dd>
									<dd>
										<img src="../img/detail/927b1d631101309f5b7290337c803b4f1bca2fcb.png"/>好评中
									</dd>
								</dl>
								<div style="clear:both;"></div>
							
							
								<div class="DetConlistimg magnifier-assembly">
									<div class="listimgfl fl listimgs magnifier-btn">
										<span class="magnifier-btn-left iconfont icon-sanjiaoleft"></span>
										<span class="magnifier-btn-right iconfont icon-sanjiaoright"></span>
									</div>
									<div class="listimgcenter fl magnifier-line">
										<ul class="clearfix animation03">
											<li class="listimgcenAc">
												<div class="small-img">
													<img src="../img/list/${littimgs[0]}" />
												</div>
											</li>
											<li>
												<div class="small-img">
													<img src="../img/list/${littimgs[1]}" />
												</div>
											</li>
											<li>
												<div class="small-img">
													<img src="../img/list/${littimgs[2]}" />
												</div>
											</li>
											<li>
												<div class="small-img">
													<img src="../img/list/${littimgs[3]}" />
												</div>
											</li>
											<li>
												<div class="small-img">
													<img src="../img/list/${littimgs[4]}" />
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div class="magnifier-view"></div>
							</div>
							
						</div>
					</div>
					<div class="DetConDfr fr">
						<div class="DetConDfrDo">
							<i class="icon66">${arr[0].area.trim().split(" ")[0]}</i>
							<i class="icon66">${arr[0].area.trim().split(" ")[1]}</i>
							<i class="icon66">${arr[0].area.trim().split(" ")[2]}</i>
							<a href="">${arr[0].brand}</a>
							${arr[0].series} ${arr[0].name}(${arr[0].spec})      
						</div>
						<!--价格-->
						<div class="DetConDfrDt">
							<span><b>￥${arr[0].xianjia}</b></span>
							<span><del>市场价￥${arr[0].yuanjia}</del></span>
							<span><i>${arr[0].discount}折</i></span>
						</div>
						<!--满减区域-->
						<div class="DetConDfrDth">
							<div class="">
								<i style="background-color:#c69a62;color:#ffffff;">直降</i>
								已优惠￥47.0
							</div>
							<div class="">
								<i style="background-color:#71D2C3;color:#FFFFFF;">订单促销</i>
								香港特快直送商品满￥288 免邮
							</div>
							<div class="">
								<i style="background-color:#71D2C3;color:#FFFFFF;">订单促销</i>
								香港特快直送商品满￥144减运费￥45
							</div>
						</div>
						<!--配送服务具体方式-->
						<div class="DetConDfrDfo">
							<ul class="dispatching">
								<li>
									<span class="yi">配送</span>
									<span class="er">${arr[0].peisong}</span>
								</li>
								<li>
									<span class="yi">运费</span>
									<span class="er">${arr[0].yunfei}</span>
								</li>
								<li>
									<span class="yi">税费</span>
									<span class="er" style="color: #EC3E7C;">本商品包税，无需再额外缴纳。</span>
									如有疑问，请联系客服咨询。
								</li>
								<li>
									<span class="yi">服务</span>
									<span class="er san"><img src="../img/detail/dui-biaozhi.PNG"/>30日退换保证</span>
									<span class="er san"><img src="../img/detail/dui-biaozhi.PNG"/>正品保障</span>
									<span class="er san"><img src="../img/detail/dui-biaozhi.PNG"/>价格承诺</span>
								</li>
							</ul>
						</div>
						<!--购买区域-->
						<div class="DetConDfrDBuy">
							<div class="theyy one">
								<label class="fl">数量：</label>
								<input type="button" name="" class="fl onebtn btndecrease" id="" value="-" />
								<input type="text" name="" class="fl onetex quantityinput" id="" value="1" />
								<input type="button" name="" class="fl onebtn btnincrease" id="" value="+" />
							</div>
							<div style="clear: both;"></div>
							<div class="theyy two">
								<input type="button" id="" class="twobtn" value="加入购物车" />
								<span id="ewmCart">
									扫扫即加入购物车 
									<i class="iconfont icon-erweima"></i>
									<i class="iconfont icon-shang"></i>
									<div class="erweima">
										<img src="../img/detail/c784eee6b7b746c5473ffe7d7d10b8a2b3155bb8.png"/>
									</div>
								</span>
							</div>
						</div>
						<!--评分区域-->
						<div class="DetConDfrScore">
							<label>评&nbsp;分</label>
							<span id="">(${arr[0].pingjianum}人评分)</span>
						</div>
						<!--收藏/分享区域-->
						<div class="DetConDfrShare">
							<div class="Collect fl">
								<i class="iconfont icon-aixin"></i>收藏
							</div>
							<div class="Share fr">
								<ul>
									<li>分享到：</li>
									<li><a style="background-position: 0px -100px;" href=""></a></li>
									<li><a style="background-position: 0px -80px;" href=""></a></li>
									<li><a style="background-position: 0px -60px;" href=""></a></li>
									<li><a style="background-position: 0px -40px;" href=""></a></li>
									<li><a style="background-position: 0px -20px;" href=""></a></li>
									<li><a style="background-position: 0px 0px;" href=""></a></li>
								</ul>
							</div>
						</div>
					</div>
			
		`;
		htmlspr=`<b class="fl f24">￥${arr[0].xianjia}</b>
				<a class="addcbtn" href="javascript:;">加入购物车</a>`;
		
		DetConD.innerHTML=html;
		CsAddcart.innerHTML=htmlspr;
		
		
		
			var magnifierConfig = {
				magnifier : "#magnifier1",//最外层的大容器
				width : 300,//承载容器宽
				height : 300,//承载容器高
				moveWidth : 100,//如果设置了移动盒子的宽度，则不计算缩放比例
				zoom : 5//缩放比例
			};
		var _magnifier = magnifier(magnifierConfig);
}

var url='../api/detail.php';
var data=`did=${detid}`;
ajax('GET',url,data,function(str){
//	console.log(str);
	var arr=JSON.parse(str);
	console.log(arr);
	detdata(arr);
	
	$('#DetConD').on('click', '.btnincrease', function() {

//		console.log($(this));
//		console.log($(this).prev());
		var val = $(this).prev().val();
		val++;
		$(this).prev().val(val);
	});
	
	$('#DetConD').on('click', '.btndecrease', function() {
		var val = $(this).next().val();
		val--;
		if(val <= 1) { //库存量
			val = 1;
		}
		$(this).next().val(val);
	});
	
	
		$('#DetConD').on('click','.twobtn',function(){
			if( document.cookie ){
				var qua=$(this).parent().prev().prev().children().eq(2).val();
				var id=arr[0].id;
				var pinpai=arr[0].brand;
				var name=arr[0].name;
				var spec=arr[0].spec;
				var xianjia=arr[0].xianjia;
				var img=JSON.parse(arr[0].xtuxilie)[0];
				var username=name1;
				var bianhao=arr[0].bianhao;
				console.log(id,pinpai,name,spec,qua,xianjia,img,username,bianhao);
				var url='../api/addcart.php';
				var data=`id=${id}&pinpai=${pinpai}&name=${name}&spec=${spec}&xianjia=${xianjia}&qua=${qua}&img=${img}&username=${username}&bianhao=${bianhao}`;
				ajax('GET',url,data,function(str){
//					console.log(str);
					if( str == '插入成功' ){
						var okse=confirm('已加入购物车');
					}else{
						var okse=confirm('加入失败');
					}
				})
			}
			else{
				var denglu=confirm('您还未登录');
				if(denglu){
					location.href='../html/login.html';
				}
			}
		})
		
		//第二个加入购物车
	$('#CsAddcart').on('click','.addcbtn',function(){
		if(document.cookie){
			var qua=$('.quantityinput').val();
			var id=arr[0].id;
			var pinpai=arr[0].brand;
			var name=arr[0].name;
			var spec=arr[0].spec;
			var xianjia=arr[0].xianjia;
			var img=JSON.parse(arr[0].xtuxilie)[0];
			var username=name1;
			console.log(id,pinpai,name,spec,qua,xianjia,img,username);
			var url='../api/addcart.php';
			var data=`id=${id}&pinpai=${pinpai}&name=${name}&spec=${spec}&xianjia=${xianjia}&qua=${qua}&img=${img}&username=${username}`;
			ajax('GET',url,data,function(str){
				console.log(str);
				if( str == '插入成功' ){
					var okse=confirm('已加入购物车');
				}
			})
		}else{
			var denglu=confirm('您还未登录');
			if(denglu){
				location.href='../html/login.html';
			}
		}
	})
		
	
})

	//滚动事件
	var oTop = $(".DetConMainfrcs").offset().top;
	var sTop = 0;
	$(window).scroll(function(){
		sTop = $(this).scrollTop();
		if(sTop >= oTop){
			$(".DetConMainfrcs").css({
				"position":"fixed",
				"top":"0",
				'box-shadow':'1px 1px 2px #ccc'
			});
			}else{
			$(".DetConMainfrcs").css({"position":"static",'box-shadow':'none'});
		}
	});
	
	//楼层跳跃
	var timer=null;
	$('.DetConMainfrcs div').click(function(){
		$(this).addClass('CsActive').siblings().removeClass('CsActive');
		var index=$(this).index();
//		console.log(index);
		var top=$('.DetConMainfr').children().eq(index+1).offset().top-50;
		clearInterval(timer);
		var step=0;
		var wintop=$('html').scrollTop();
		console.log(wintop);
		timer=setInterval(function(){
			if( top>wintop ){
				wintop+=18;
				if( wintop>=top ){
					clearInterval(timer);
				}
			}else{
				wintop-=10;
				if( wintop<=top ){
					clearInterval(timer);
				}
			}
			window.scrollTo(0,wintop);
		},50)
		
	})
	

}