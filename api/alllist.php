<?php
	header("content-type:text/html;charset=utf-8");
	include 'connect.php';

	$page = isset($_GET['page']) ? $_GET['page'] : '';
	$qty = isset($_GET['qty']) ? $_GET['qty'] : '';
//	echo $page.' '.$qty;
//写查询语句
//if($page && $qty)
	$page1=($page-1)*$qty;
	$sql = "select *from `list` limit $page1,$qty";
	$res = $conn->query($sql);
	$row = $res->fetch_all(MYSQLI_ASSOC);
	
	
	$sql1 = "select *from `list`";
	$res1 =	$conn->query($sql1);
	$row1 = $res1->num_rows;
	
	
	$sql2 = "SELECT *FROM `list` ORDER BY xianjia DESC LIMIT $page1,$qty";
	$res2 = $conn->query($sql2);
////	var_dump($res2);
	$row2 = $res2->fetch_all(MYSQLI_ASSOC);
	
	
//	echo json_encode($row,JSON_UNESCAPED_UNICODE);
	$datalist=array(
		'total' =>$row1,
		'list' => $row,
		'page'  => $page,
		'qty'   => $qty,
		'sortdesc' =>$row2
	);
	echo json_encode($datalist,JSON_UNESCAPED_UNICODE);
	
	$res->close();
	$conn->close();

?>