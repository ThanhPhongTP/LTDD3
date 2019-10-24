<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
  $obj = json_decode($json,true);
  $taikhoan = $obj["TK"];
 $matkhau =$obj["MK"];
  $Sql_Query = "INSERT INTO taiKhoan (`id` ,  `username` ,  `password` ) 
 VALUES (null,' $taikhoan','$matkhau')";
 
 if(mysqli_query($con,$Sql_Query)){
 $MSG = 'Successfully' ;
 $json = json_encode($MSG);
 echo $json ; 
 }
 else{
 
 echo 'Wrong';
 
 }
 mysqli_close($con);
 
?>