<?php
 include 'DBConfig.php';
 $conn = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
  $obj = json_decode($json,true);
if ($conn->connect_error) { 
 die("Connection failed: " . $conn->connect_error);
} 
 $id = $obj["id"];
 $MaPB = $obj["MaPB"];
 $TenPB = $obj["TenPB"];
 
  $Sql_Query = "UPDATE phong SET `MaPB` = '$MaPB', `TenPB` = '$TenPB' WHERE `id` = '$id'"; 
 
 $result = $conn->query($Sql_Query);
 if(mysqli_query($conn,$Sql_Query)){
 $MSG = 'Successfully' ;

 $json = json_encode($MSG);
 echo $json ; 
 }
 else{
 
 echo 'Wrong';
 
 }
 mysqli_close($conn);
 
?>