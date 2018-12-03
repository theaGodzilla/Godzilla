
window.onload=function(){
	
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
	
	var ListMainDflBt=document.getElementById('ListMainDflBt');
	var h1s=ListMainDflBt.querySelectorAll('h1');
//	console.log(h1s);
	var is=ListMainDflBt.querySelectorAll('.h1is');
//	console.log(is);
	var uls=ListMainDflBt.querySelectorAll('ul');
//	console.log(uls);
	for( let i=0;i<h1s.length;i++ ){
		h1s[i].isok=true;
		h1s[i].onclick=function(){
			if(this.isok){
				uls[i].style.display='block';
				is[i].style['background-position']='0 0';
				h1s[i].style.background='white';
			}else{
				uls[i].style.display='none';
				is[i].style['background-position']='-16px 0';
				h1s[i].style.background='#e8e6e7';
			}
			this.isok=!this.isok;
		}
	}
	
	//分类
	var ListMainDfrClassify=document.getElementById('ListMainDfrClassify');
	var ClassifyPag=document.getElementById('ClassifyPag');
	var spans=ClassifyPag.querySelectorAll('span');
//	console.log(spans.length);
	ListMainDfrClassify.style.height=32*3+6+'px';
	
	//品牌
	var ListMainDfrBrand=document.getElementById('ListMainDfrBrand');
	var BrandPag=document.getElementById('BrandPag');
	var spans1=ClassifyPag.querySelectorAll('span');
//	console.log(spans1.length);
	ListMainDfrBrand.style.height=32*3+'px';
	
	//功效
	var ListMainDfrEffect=document.getElementById('ListMainDfrEffect');
	var EffectPag=document.getElementById('EffectPag');
	var spans2=ClassifyPag.querySelectorAll('span');
//	console.log(spans2.length);
	ListMainDfrEffect.style.height=32*3+'px';
	
	//分类
	$(function(){
    	$('.ClassifyMore').click(function(){
			if($('#Classifyspans').is(':hidden')){//如果当前隐藏
				$('#Classifyspans').show();//那么就显示div
				$('.Classifyi').removeClass('icon-shang');
				$('.Classifyi').addClass('icon-xia');
				$('.ListMainDfrClassify').css('height','448px');
			}else{
				$('#Classifyspans').hide();//就隐藏div
				$('.Classifyi').removeClass('icon-xia');
				$('.Classifyi').addClass('icon-shang');
				$('.ListMainDfrClassify').css('height','96px');
			}
    	});
    	
    	//品牌
    	$('.BrandMores').click(function(){
			if($('#Brandspans').is(':hidden')){//如果当前隐藏
				$('#Brandspans').show();//那么就显示div
				$('.Brandi').removeClass('icon-shang');
				$('.Brandi').addClass('icon-xia');
				$('.ListMainDfrBrand').css('height','395px');
			}else{
				$('#Brandspans').hide();//就隐藏div
				$('.Brandi').removeClass('icon-xia');
				$('.Brandi').addClass('icon-shang');
				$('.ListMainDfrBrand').css('height','96px');
			}
    	});
    	
    	//功效
    	$('.EffectMore').click(function(){
			if($('#Effectspans').is(':hidden')){//如果当前隐藏
				$('#Effectspans').show();//那么就显示div
				$('.Effecti').removeClass('icon-shang');
				$('.Effecti').addClass('icon-xia');
				$('.ListMainDfrEffect').css('height','395px');
			}else{
				$('#Effectspans').hide();//就隐藏div
				$('.Effecti').removeClass('icon-xia');
				$('.Effecti').addClass('icon-shang');
				$('.ListMainDfrEffect').css('height','96px');
			}
    	});
    	
    	//更多
    	$('.Mores').click(function(){
			if($('.ListMainDfrOther').is(':hidden')){//如果当前隐藏
				$('.ListMainDfrOther').show();//那么就显示div
				$('.Moresiname').removeClass('icon-shang');
				$('.Moresiname').addClass('icon-xia');
			}else{
				$('.ListMainDfrOther').hide();//就隐藏div
				$('.Moresiname').removeClass('icon-xia');
				$('.Moresiname').addClass('icon-shang');
			}
    	});
	});
	
	
	//渲染页面
	var ListContentUl=document.getElementById('ListContentUl');
	var pageview=document.getElementById('pageview');
//	console.log(ListContentUl);
	function cearce(arr){
		var html='';
//		var imgs=JSON.parse(arr.xtuxilie);
		for( var i=0;i<arr.length;i++ ){
			var imgs=JSON.parse(arr[i].xtuxilie);
//			console.log(imgs);
			if(arr[i].brandimg) {
				var a = 'block';
			} else {
				var a = 'none';
			}
			if(arr[i].xsAndsp){
				var b = 'block';
			} else {
				var b = 'none';
			}

				html+=`
							<li>
								<div class="Listxstm" style="display:${b}">
									<img src="../img/list/${arr[i].xsAndsp}"/>
								</div>
								<div class="Listpp" style="display:${a}">
									<img class="fl" src="${arr[i].brandimg}"/>
									<span class="fl f14" id="">${arr[i].brandguozi}</span>
								</div>
								<div class="Listimg">
									<div class="">
										<img class="Listimgac" src="../img/list/${imgs[0]}"/>
									</div>
									<div class="">
										<img src="../img/list/${imgs[1]}"/>
									</div>
									<div class="">
										<img src="../img/list/${imgs[2]}"/>
									</div>
								</div>
								<a href="detail.html?id=${arr[i].id}">
									<img class="Transmit" src="../img/list/${imgs[0]}"/>
								</a>
								<div class="ListConPri">
									<span class="fl">￥${arr[i].xianjia}</span>
									<span class="fl f13"><del>￥${arr[i].yuanjia}</del></span>
									<span class="fr f13">${arr[i].discount}折</span>
								</div>
								<div class="ListConinfo">
									<a href=""><b>${arr[i].area}</b>${arr[i].brand}</a>
									<p class="f13">${arr[i].series}&nbsp;&nbsp;${arr[i].name}</p>
									<p class="f14">${arr[i].spec}</p>
									<div class="Prisorting">
										<span>${arr[i].zhijiang}</span>
										<p class="salenum">${arr[i].sold}</p>
									</div>
									
								</div>
								<div class="btnbuy">
										<span id="ListAddCart">立即抢购</span>
								<div>
							</li>
			`;
		}
		ListContentUl.innerHTML=html;
		ListContentUl.innerHTML += `<li class="last">
								
							</li>`;
		var lis=ListContentUl.querySelectorAll('li');
//		console.log(lis);
		ListContentUl.style.height=lis.length/3*510+'px';
	}
	
//	var html='';
	var url='../api/alllist.php';
	var data=`page=1&qty=8`;
	ajax('GET',url,data,function(str){
//		console.log(str);
		var arr0=JSON.parse(str);
//		console.log(arr0);
//		cearce(arr.list);
		var arr=arr0.list;
		console.log(arr);
		
		cearce(arr);
		
		var num=Math.ceil(arr0.total/arr0.qty);
//		console.log(num);
		var pagehtml='';
		pageview.innerHTML=`<span class="prev"><</span>`;
		for( var n=0;n<num;n++ ){
			pagehtml+=`<a href="javascript:;">${n+1}</a>`;
		}
		pageview.innerHTML+=pagehtml;
		pageview.innerHTML+=`<span class="next">></span>`;
		pageview.children[1].className='pageactive';
		
		//小图盒子出现
		litteimg();
	})
	
	//小图盒子出现
	function litteimg(){
		$('#ListContent ul li').hover(function(){
			$(this).css({
				'box-shadow':'1px 1px 1px #ccc'
			});
			$(this).children().eq(2).css({
				'display': 'block'
			});
			$(this).children().eq(2).animate({
            	'right': '-85px'
			},400);
			$(this).children().eq(4).animate({
            	'width':'308px',
			},400);
			$(this).children().eq(5).animate({
            	'width':'308px',
			},400);
			$(this).children().eq(6).css({
				'display': 'block'
			});
			$(this).children().eq(6).animate({
            	'width':'308px',
            	'height':'59px',
            	'ling-height':'59px'
			},400)
		},function(){
			$(this).children().eq(2).stop(true, true);
			$(this).children().eq(4).stop(true, true);
			$(this).children().eq(5).stop(true, true);
			$(this).children().eq(6).stop(true, true);
			$(this).children().eq(2).css({
				'display': 'none',
                'right': '0px'
			});
			$(this).children().eq(4).css({
				'width': '223px'
			});
			$(this).children().eq(5).css({
				'width': '223px'
			});
			$(this).children().eq(6).css({
				'display': 'none',
				'width': '223px',
				'height':'39px',
            	'ling-height':'39px',
            	'text-align':'center'
			})
			$(this).css({
				'box-shadow':'none'
			});
	})
	}
	//点击页码切换
	
	function fenyedj(){
		var now= 0;
		pageview.onclick=function(ev){
			var ev= ev || window.event;
			if( ev.target.tagName.toLowerCase()=='a' ){
				var pagenum=ev.target.innerText;
	//			console.log(pagenum);
				var url='../api/alllist.php';
				var data=`qty=8&page=${pagenum}`;
				ajax('GET',url,data,function(str){
	//				console.log(str);
					var arr0=JSON.parse(str);
					var arr=arr0.list;
	//				console.log(arr);
					cearce(arr);
					var chis=pageview.querySelectorAll('a');
					console.log(chis);
					for( var i=0;i<chis.length;i++ ){
						chis[i].className='';
					}
					chis[pagenum-1].className='pageactive';
					litteimg();
	//				now=pagenum;
				})
			}
			
			//点击下一页切换
			if( ev.target.className=='next' ){
				
				var chis=pageview.querySelectorAll('a');
				console.log(chis);
				for( var i=0;i<chis.length;i++ ){
					if( chis[i].className=='pageactive' ){
						now=i;
					}
				}
				now++;
				if( now>=2 ){
					now=2;
				}
				console.log(now);
				
				for( var i=0;i<chis.length;i++ ){
					chis[i].className='';
				}
				
				chis[now].className='pageactive';
				
				var url='../api/alllist.php';
				var data=`qty=8&page=${now+1}`;
				ajax('GET',url,data,function(str){
					var arr0=JSON.parse(str);
					var arr=arr0.list;
					console.log(arr);
					cearce(arr);
					litteimg();
				})
			}
			//点击上一页切换
			if( ev.target.className=='prev' ){
		
				var chis=pageview.querySelectorAll('a');
				console.log(chis);
				for( var i=0;i<chis.length;i++ ){
					if( chis[i].className=='pageactive' ){
						now=i;
					}
				}
				now--;
				if( now<=0 ){
					now=0;
				}
				console.log(now);
				
				for( var i=0;i<chis.length;i++ ){
					chis[i].className='';
				}
				
				chis[now].className='pageactive';
				
				var url='../api/alllist.php';
				var data=`qty=8&page=${now+1}`;
				ajax('GET',url,data,function(str){
					var arr0=JSON.parse(str);
					var arr=arr0.list;
					console.log(arr);
					cearce(arr);
					litteimg();
				})
			}
		}
	}
	fenyedj();
	
	//ul左悬浮的那个大的下一页
	function leftnext(){
		ListContentUl.onclick=function(ev){
			var ev = ev || window.event;
			if( ev.target.className=='last' ){
	//			console.log(1111);
				var chis=pageview.querySelectorAll('a');
				console.log(chis);
				for( var i=0;i<chis.length;i++ ){
					if( chis[i].className=='pageactive' ){
						now=i;
					}
				}
				now++;
				if( now>=2 ){
					now=2;
				}
				console.log(now);
				
				for( var i=0;i<chis.length;i++ ){
					chis[i].className='';
				}
				
				chis[now].className='pageactive';
				
				var url='../api/alllist.php';
				var data=`qty=8&page=${now+1}`;
				ajax('GET',url,data,function(str){
					var arr0=JSON.parse(str);
					var arr=arr0.list;
					console.log(arr);
					cearce(arr);
					litteimg();
				})
			}
		}
	}
	leftnext();
	
	//价格排序
	var pagesort=0;
	Pricerank.onclick=function(){
		pagesort++;
		if(pagesort>=3){
			pagesort=3;
		}
		var url='../api/alllist.php';
		var data=`qty=8&page=${pagesort}`;
		ajax('GET',url,data,function(str){
			var arr0=JSON.parse(str);
			var arr=arr0.sortdesc;
//			console.log(arr);
			cearce(arr);
			
			//最大那一页的点击
			ListContentUl.onclick=function(ev){
			var ev = ev || window.event;
			if( ev.target.className=='last' ){
	//			console.log(1111);
				var chis=pageview.querySelectorAll('a');
				console.log(chis);
				for( var i=0;i<chis.length;i++ ){
					if( chis[i].className=='pageactive' ){
						now=i;
					}
				}
				now++;
				if( now>=2 ){
					now=2;
				}
				console.log(now);
				
				for( var i=0;i<chis.length;i++ ){
					chis[i].className='';
				}
				
				chis[now].className='pageactive';
				
				var url='../api/alllist.php';
				var data=`qty=8&page=${now+1}`;
				ajax('GET',url,data,function(str){
					var arr0=JSON.parse(str);
					var arr=arr0.sortdesc;
					console.log(arr);
					cearce(arr);
					litteimg();
				})
			}
		}
		//分页点击
		var now= 0;
		pageview.onclick=function(ev){
			var ev= ev || window.event;
			if( ev.target.tagName.toLowerCase()=='a' ){
				var pagenum=ev.target.innerText;
	//			console.log(pagenum);
				var url='../api/alllist.php';
				var data=`qty=8&page=${pagenum}`;
				ajax('GET',url,data,function(str){
	//				console.log(str);
					var arr0=JSON.parse(str);
					var arr=arr0.sortdesc;
	//				console.log(arr);
					cearce(arr);
					var chis=pageview.querySelectorAll('a');
					console.log(chis);
					for( var i=0;i<chis.length;i++ ){
						chis[i].className='';
					}
					chis[pagenum-1].className='pageactive';
					litteimg();
	//				now=pagenum;
				})
			}
			
			//点击下一页切换
			if( ev.target.className=='next' ){
				
				var chis=pageview.querySelectorAll('a');
				console.log(chis);
				for( var i=0;i<chis.length;i++ ){
					if( chis[i].className=='pageactive' ){
						now=i;
					}
				}
				now++;
				if( now>=2 ){
					now=2;
				}
				console.log(now);
				
				for( var i=0;i<chis.length;i++ ){
					chis[i].className='';
				}
				
				chis[now].className='pageactive';
				
				var url='../api/alllist.php';
				var data=`qty=8&page=${now+1}`;
				ajax('GET',url,data,function(str){
					var arr0=JSON.parse(str);
					var arr=arr0.sortdesc;
					console.log(arr);
					cearce(arr);
					litteimg();
				})
			}
			//点击上一页切换
			if( ev.target.className=='prev' ){
		
				var chis=pageview.querySelectorAll('a');
				console.log(chis);
				for( var i=0;i<chis.length;i++ ){
					if( chis[i].className=='pageactive' ){
						now=i;
					}
				}
				now--;
				if( now<=0 ){
					now=0;
				}
				console.log(now);
				
				for( var i=0;i<chis.length;i++ ){
					chis[i].className='';
				}
				
				chis[now].className='pageactive';
				
				var url='../api/alllist.php';
				var data=`qty=8&page=${now+1}`;
				ajax('GET',url,data,function(str){
					var arr0=JSON.parse(str);
					var arr=arr0.sortdesc;
					console.log(arr);
					cearce(arr);
					litteimg();
				})
			}
		}
			litteimg();
		})
	}
	
	 
	
	
	
	
	
}
