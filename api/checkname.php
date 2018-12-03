<?php
	
	include 'connect.php';
	
	$username = isset($_GET['username']) ? $_GET['username'] : 1 ;
	
//	echo $username;

	$sql="select * from user where username='$username'";
	
	$res=$conn->query($sql);

    // var_dump($res);
    if( $res->num_rows>0 ){
        echo 0;//0意味着存在
    }else{
        echo 1;
    }

    $res->close();
	$conn->close();
?>