<?php
		
	include 'connect.php';
	
	$id=isset($_GET['id']) ? $_GET['id'] : '';
	
	$sql="DELETE FROM cart WHERE id=$id";
	
	$res=$conn->query($sql);
	
	if( $res ){
        echo 'ok';
    }else{
        echo 'no';
    }

?>