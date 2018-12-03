<?php
	header("content-type:text/html;charset=utf-8");
	
    include 'connect.php';
    

    $sql="SELECT *FROM `list` ORDER BY xianjia DESC LIMIT 0,4";
    $res=$conn->query($sql);
    $row=$res->fetch_all(MYSQLI_ASSOC);
    
    $sql1="SELECT *FROM `list` ORDER BY sold DESC LIMIT 0,4";
    $res1=$conn->query($sql1);
    $row1=$res1->fetch_all(MYSQLI_ASSOC);
    
    $sql2="SELECT *FROM `list` ORDER BY pingjianum DESC LIMIT 0,4";
    $res2=$conn->query($sql2);
    $row2=$res2->fetch_all(MYSQLI_ASSOC);
    
    $datalist=array(
		'xianjiaphb' => $row,
		'soldphb'  => $row1,
		'pingjiaphb'   => $row2
	);
	echo json_encode($datalist,JSON_UNESCAPED_UNICODE);
	
	$res->close();
	$conn->close();
    
//  var_dump($row);

//  echo json_encode($row);
?>