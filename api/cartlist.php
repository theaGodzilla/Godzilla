<?php
	//SELECT *FROM `cart` WHERE username=18177260834 AND pinpai='SNP'
	header("content-type:text/html;charset=utf-8");
	
    include 'connect.php';
    
	$username = isset($_GET['username']) ? $_GET['username'] : '';
	
    $sql="SELECT *FROM `cart` WHERE username='$username' AND bianhao=1 ORDER BY time DESC";
    $res=$conn->query($sql);
    $row=$res->fetch_all(MYSQLI_ASSOC);
    
    $sql1="SELECT *FROM `cart` WHERE username='$username' AND bianhao=2";
    $res1=$conn->query($sql1);
    $row1=$res1->fetch_all(MYSQLI_ASSOC);
    
    
    $datalist=array(
		'xianggang' => $row,
		'baoshui'  => $row1
	);
	echo json_encode($datalist,JSON_UNESCAPED_UNICODE);
	
	$res->close();
	$conn->close();
	
?>