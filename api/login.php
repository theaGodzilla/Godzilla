<?php
	
	include 'connect.php';

    $username=isset($_POST['username'])?$_POST['username']:'';
    $password=isset($_POST['password'])?$_POST['password']:'';

    $sql="SELECT * FROM user WHERE username='$username' AND password='$password'";

    $res=$conn->query($sql);

    if( $res->num_rows>0 ){
        echo 'yes';
    }else{
        echo 'no';
    }
?>