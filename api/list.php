<?php
	
	header("content-type:text/html;charset=utf-8");
	
    include 'connect.php';

    $sql="select * from everyday";

    $res=$conn->query($sql);

    $row=$res->fetch_all(MYSQLI_ASSOC);
    
//  var_dump($row);

    echo json_encode($row);
?>