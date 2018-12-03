<?php
	
	header("content-type:text/html;charset=utf-8");
	
    include 'connect.php';
    
    $did = isset($_GET['did']) ? $_GET['did'] : '';
	
	$sql="SELECT *FROM list WHERE id=$did";

    $res=$conn->query($sql);

    $row=$res->fetch_all(MYSQLI_ASSOC);

	echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>