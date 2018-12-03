<?php
//链接数据库
    header("content-type:text/html;charset=utf-8");
	include 'connect.php';

	$page = isset($_GET['page']) ? $_GET['page'] : '';
	$qty = isset($_GET['qty']) ? $_GET['qty'] : '';
//	echo $page.' '.$qty;
//写查询语句
	$sql="select *from `index` limit $qty,$page";
	
	$res=$conn->query($sql);
	
	
	$row=$res->fetch_all(MYSQLI_ASSOC);
	
//	echo json_encode($row,JSON_UNESCAPED_UNICODE);
	$datalist=array(
		'list' => $row,
		'page'  => $page,
		'qty'   => $qty
	);
	echo json_encode($datalist,JSON_UNESCAPED_UNICODE);
	
	$res->close();
	$conn->close();

	
	
	//把字符串json转成数组
	
	
//	var_dump($data);

	//参数一：数组名   参数二：起点坐标    参数三：截取的条数
	
//	$res=array_slice($data,($page-1)*$qty,$qty);
	
//	var_dump($res);

	//将最终的数据转成字符串json传给前端
	
//	$list=json_encode($res,JSON_UNESCAPED_UNICODE);
	
	//格式化数据
	
//	echo count($data);
?>
