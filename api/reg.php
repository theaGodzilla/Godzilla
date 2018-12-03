<?php
	
	include 'connect.php';

    $username=isset($_POST['username'])?$_POST['username']:'';
    $password=isset($_POST['password'])?$_POST['password']:'';

    $sql="INSERT INTO user(username,password) VALUES ('$username','$password')";

    $res=$conn->query($sql);

    // var_dump($res);

    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }

    $conn->close();
	
	
?>