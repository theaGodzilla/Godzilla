<?php
	include 'connect.php';
	
	$id=isset($_GET['id']) ? $_GET['id'] : '';
	$pinpai=isset($_GET['pinpai']) ? $_GET['pinpai'] : '';
	$name=isset($_GET['name']) ? $_GET['name'] : '';
	$spec=isset($_GET['spec']) ? $_GET['spec'] : '';
	$xianjia=isset($_GET['xianjia']) ? $_GET['xianjia'] : '';
	$qua=isset($_GET['qua']) ? $_GET['qua'] : '';
	$img=isset($_GET['img']) ? $_GET['img'] : '';
	$username=isset($_GET['username']) ? $_GET['username'] : '';
	$bianhao=isset($_GET['bianhao']) ? $_GET['bianhao'] : '';
	
	$sql="SELECT *FROM `cart` WHERE id='$id' AND username='$username'";
	
	$res=$conn->query($sql);
	
//	var_dump($res);
	
	if($res->num_rows>0){
		$sql1="UPDATE `cart` SET qua=qua+$qua WHERE id=$id";
		$res1=$conn->query($sql1);
	}else{
		$sql1="insert into cart(id,name,pinpai,spec,xianjia,qua,img,username,bianhao) values('$id','$name','$pinpai','$spec','$xianjia','$qua','$img','$username','$bianhao')";
		$res1=$conn->query($sql1);
	}
	if($res1){
		echo '插入成功';
	}else{
		echo '插入失败';
	}
?>