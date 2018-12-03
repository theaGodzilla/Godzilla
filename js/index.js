
//获取cookie
console.log(document.cookie);
var name1=document.cookie.split('=')[1];
console.log(name1);
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



$('.NavDTwoUllisOne').mouseover(function() {
	$('#NavDTwoUllisOneD').show();
})
$('.NavDTwoUllisOne').mouseleave(function() {
	$('#NavDTwoUllisOneD').hide();
})

$('.NavDTwoUllisTwo').mouseover(function() {
	$('#NavDTwoUllisTwoD').show();
})
$('.NavDTwoUllisTwo').mouseleave(function() {
	$('#NavDTwoUllisTwoD').hide();
})

$('.NavDTwoUllisThree').mouseover(function() {
	$('#NavDTwoUllisThreeD').show();
})
$('.NavDTwoUllisThree').mouseleave(function() {
	$('#NavDTwoUllisThreeD').hide();
})

$('.NavDTwoUllisFour').mouseover(function() {
	$('#NavDTwoUllisFourD').show();
})
$('.NavDTwoUllisFour').mouseleave(function() {
	$('#NavDTwoUllisFourD').hide();
})

$('.NavDTwoUllisFive').mouseover(function() {
	$('#NavDTwoUllisFiveD').show();
})
$('.NavDTwoUllisFive').mouseleave(function() {
	$('#NavDTwoUllisFiveD').hide();
})

$('.NavDTwoUllisSix').mouseover(function() {
	$('#NavDTwoUllisSixD').show();
})
$('.NavDTwoUllisSix').mouseleave(function() {
	$('#NavDTwoUllisSixD').hide();
})

$('.NavDTwoUllisSeven').mouseover(function() {
	$('#NavDTwoUllisSevenD').show();
})
$('.NavDTwoUllisSeven').mouseleave(function() {
	$('#NavDTwoUllisSevenD').hide();
})

$('.NavDTwoUllisEight').mouseover(function() {
	$('#NavDTwoUllisEightD').show();
})
$('.NavDTwoUllisEight').mouseleave(function() {
	$('#NavDTwoUllisEightD').hide();
})

//轮播图

var BannerD = document.getElementById('BannerD');
var Bannerlis = document.querySelectorAll('.BannerDUl>li');
var Bannerbtn = document.querySelectorAll('.BannerDOl>li');
//console.log(Bannerbtn);
var len = Bannerbtn.length;
var now = 0;
tab();
for(let i = 0; i < len; i++) {
	Bannerbtn[i].onmouseover = function() {
//		console.log(i)
		now = i;
		tab();
	}
}

function tab() {
	for(let j = 0; j < len; j++) {
		Bannerbtn[j].className = '';
		Bannerlis[j].style.display = 'block';
		startMove(Bannerlis[j], {
			'opacity': 0
		}, function() {
			Bannerlis[j].style.display = 'none';
		})
	}
	Bannerbtn[now].className = 'selected';
	startMove(Bannerlis[now], {
		'opacity': 100
	});
}

function next() {
	now++;
	if(now == len) {
		now = 0;
	}
	tab();
}

var timer = setInterval(next, 2000);
BannerD.onmouseover = function() {
	clearInterval(timer);
}
BannerD.onmouseout = function() {
	timer = setInterval(next, 2000);
}

//公告
$(function() {
	$('#BannerDTwoD').Marquee({
		distance: 28, //移动步长
		time: 3, //移动时间
		direction: 'up', //方向向上
		duration: 100, //缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
	})
})

$('.MainOneDimgO').mouseover(function() {
	$('.MainOneDimgO').css('opacity', '.8');
})
$('.MainOneDimgO').mouseleave(function() {
	$('.MainOneDimgO').css('opacity', '1');
})

$('.MainOneDimgT').mouseover(function() {
	$('.MainOneDimgT').css('opacity', '.8');
})
$('.MainOneDimgT').mouseleave(function() {
	$('.MainOneDimgT').css('opacity', '1');
})
$('.MainOneDimgTH').mouseover(function() {
	$('.MainOneDimgTH').css('opacity', '.8');
})
$('.MainOneDimgTH').mouseleave(function() {
	$('.MainOneDimgTH').css('opacity', '1');
})

//每日必看渲染
var MainEveryContentUl = document.getElementById('MainEveryContentUl');
var html = '';
var url = 'api/page.php';
var data=`qty=0&page=8`
ajax('GET', url,data, function(str) {
	var data = JSON.parse(str);
	var data1=data.list;
//	console.log(data1);
	for(var i = 0; i < data1.length; i++) {
		html += `
			<li>
				<div id="EveryUlisD">
					<img class="fl" src="${data1[i].img}"/>
								<div id="" class="EveryUlisDOne fl">
									<p>${data1[i].name}</p>
									<p>${data1[i].title}</p>
									<p>${data1[i].subtit}</p>
									<span id="">立即疯抢</span>
								</div>
							</div>
						</li>
		`;
	}
	MainEveryContentUl.innerHTML=html;
})


//限时特卖
var FlashSaleUl=document.getElementById('FlashSaleUl');
//console.log(FlashSaleUl);
var html1='';
var url1 = 'api/page.php';
var data1=`qty=8&page=10`;
ajax('GET',url1,data1,function(str){
	var data0=JSON.parse(str);
//	console.log(data0);
	var data3=data0.list;
	for( var i=0;i<data3.length;i++ ){
		html1+=`
			<li>
							<div id="" class="FlashSaleUlYY">
								<i class="zhekou"><span>${data3[i].discount}</span>折</i>
								<img class="fl" src="${data3[i].img}"/>
								<div id="" class="FlashSaleUlcon fl">
									<div id="time" class="time">剩余
										<span id="hour"></span>：
										<span id="minute"></span>：
										<span id="second"></span>
									</div>
									<div id="" class="con">
										<span id="">“</span>
										${data3[i].content}
									</div>
									<div id="" class="contitle">
										<b>香港特快直送 零扣关 包税 </b>${data3[i].name}               
									</div>
									<div id="" class="conprice">
										<span id="">￥</span>
										<span id="">${data3[i].price}</span>
										<span id="">￥${data3[i].Orig}</span>
									</div>
									<div id="" class="consale">
										<span id="" class="fl">已售${data3[i].sold}件</span>
										<input type="button" class="fr" id="" value="马上抢" />
									</div>
								</div>
							</div>
						</li>
		`;
	}
	FlashSaleUl.innerHTML=html1;
	var hei=386*data3.length;
	FlashSaleUl.style.height=hei+'px';
});
FlashSaleUl.style.height=3860+'px';

function times(days){
	var timer=null;
	var day=days*24*60*60;//一天的所有秒
	timer=setInterval(function(){
		var hour=0;
		minute=0; 
		second=0; //定义时间
		if( days>0 ){
			day--;
			hour=Math.floor(day/60/60);  //倒计时小时
			minute=Math.floor(60-(days*24*60-day/60)); //倒计时分钟
    		if (hour <= 9) hour = '0' + hour;  //小时补零
    		if (minute <= 9) minute = '0' + minute;  //分钟补零
			if((days*24*60*60-day)%60 == 0){
				second=0
				if (second <= 9) second = '0' + second;  //秒补零
//				console.log(hour+'小时'+minute+'分'+second+'秒');
				
			}else{
				second=60-((days*24*60*60-day)%60);
				if (second <= 9) second = '0' + second;
//				console.log(hour+'小时'+minute+'分'+second+'秒');//倒计时秒
			}
		}
		$(document).ready(function(){
					$('.time').find('#hour').html(hour);
					$('.time').find('#minute').html(minute);
					$('.time').find('#second').html(second);
				})
			
	},1000);
	
	
	
}
times(1);

//置顶
var GoTotop=document.getElementById('Totop');
Totop(GoTotop);

//边框
$('.ChartsMainb').children().click(function(){
	$(this).addClass('phbacti').siblings().removeClass('phbacti')
})

var ChartsMainUl=document.getElementById('ChartsMainUl');
function phblist(arr1){
	var html='';
	for( var i=0;i<arr1.length;i++ ){
		var imgs=JSON.parse(arr1[i].xtuxilie);
		html+=`
				<li>
							<img class="fl" src="img/list/${imgs[0]}"/>
							<div id="" class="fl">
								<div class="theone">
									<a href=""><b>${arr1[i].area}</b>&nbsp;${arr1[i].brand} ${arr1[i].name}</a>
								</div>
								<div class="thetwo">
									<i id=""><b>￥${arr1[i].xianjia}</b><del>￥${arr1[i].yuanjia}</del></i>
								</div>
								<div class="thethree">
									<span id="">评论：${arr1[i].pingjianum}</span>
									<span id="">${arr1[i].sold}</span>
								</div>
							</div>
						</li>
		`;
	}
	ChartsMainUl.innerHTML=html;
}
var url='api/phb.php';
ajax('GET',url,'',function(str){
//	console.log(JSON.parse(str));
	var data=JSON.parse(str);
	var arr1=data.pingjiaphb;
//	console.log(arr1[0]);
	phblist(arr1);
})
$('.hf').click(function(){
	ajax('GET',url,'',function(str){
//	console.log(JSON.parse(str));
	var data=JSON.parse(str);
	var arr1=data.pingjiaphb;
//	console.log(arr1[0]);
	phblist(arr1);
})
})
$('.cz').click(function(){
	ajax('GET',url,'',function(str){
	//	console.log(JSON.parse(str));
		var data=JSON.parse(str);
		var arr1=data.soldphb;
	//	console.log(arr1[0]);
		phblist(arr1);
	})
})
$('.gh').click(function(){
	ajax('GET',url,'',function(str){
	//	console.log(JSON.parse(str));
		var data=JSON.parse(str);
		var arr1=data.xianjiaphb;
	//	console.log(arr1[0]);
		phblist(arr1);
	})
})


//楼层跳跃
$('.indexlouUl').children().click(function(){
	$(this).addClass('indexlouact').siblings().removeClass('indexlouact');
})
var lctop=$('#MainEvery').offset().top;
var xstop=$('#FlashSale').offset().top;
var xiaostop=$('#Charts').offset().top;
console.log(lctop,xstop,xiaostop);
$(window).scroll(function(){
	var wintops=$(this).scrollTop();
//	console.log(wintops);
	if( wintops>=lctop ){
		$('.indexlou').css({
			'position':'fixed',
			'display':'block'
		})
	}else{
		$('.indexlou').css({
			'position':'absolute'
		})
	}if( wintops>=lctop && wintops<=xstop ){
		$('.indexlouUl').children().eq(0).addClass('indexlouact').siblings().removeClass('indexlouact');
	}if( wintops>=xstop && wintops<=xiaostop ){
		$('.indexlouUl').children().eq(1).addClass('indexlouact').siblings().removeClass('indexlouact');
	}if( wintops>=xiaostop ){
		$('.indexlouUl').children().eq(2).addClass('indexlouact').siblings().removeClass('indexlouact');
	}
})


$('.indexlouUl').children().eq(0).click(function(){
	var nowtop=$('html').scrollTop();
	var timer=null;
	timer=setInterval(function(){
		if( nowtop>=lctop ){
			nowtop-=100;
			window.scrollTo(0,nowtop)
			if( nowtop<=lctop ){
				clearInterval(timer);
			}
		}else{
			nowtop+=100;
			window.scrollTo(0,nowtop)
			if( nowtop>=lctop ){
				clearInterval(timer)
			}
		}
	},50)
})

$('.indexlouUl').children().eq(1).click(function(){
	var nowtop=$('html').scrollTop();
	var timer=null;
	timer=setInterval(function(){
		
		if( nowtop>=xstop ){
			nowtop-=100;
			window.scrollTo(0,nowtop)
			if( nowtop<=xstop ){
				clearInterval(timer);
			}
		}else{
			nowtop+=100;
			window.scrollTo(0,nowtop)
			if( nowtop>=xstop ){
				clearInterval(timer)
			}
		}
	},50)
})

$('.indexlouUl').children().eq(2).click(function(){
	var nowtop=$('html').scrollTop();
	var timer=null;
	timer=setInterval(function(){
		if( nowtop>=xiaostop ){
			nowtop-=100;
			window.scrollTo(0,nowtop)
			if( nowtop<=xiaostop ){
				clearInterval(timer);
			}
		}else{
			nowtop+=100;
			window.scrollTo(0,nowtop)
			if( nowtop>=xiaostop ){
				clearInterval(timer)
			}
		}
	},50)
})

