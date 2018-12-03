<?php
	
	include 'connect.php';
	
	$qua=isset($_GET['qua']) ? $_GET['qua'] : '';
	$id=isset($_GET['id']) ? $_GET['id'] : '';
	
	$sql="UPDATE `cart` SET qua='$qua' WHERE id='$id'";
	
	$res=$conn->query($sql);
	
	if( $res ){
        echo 'ok';
    }else{
        echo 'no';
    }
?>