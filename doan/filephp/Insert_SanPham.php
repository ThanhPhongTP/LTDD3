<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
  $obj = json_decode($json,true);

  $mapb = $obj["Ma"];
 $tenpb =$obj["Ten"];
  $Sql_Query = "INSERT INTO phong (`id` ,  `MaPB` ,  `TenPB` ) 
 VALUES (null,'$mapb','$tenpb')";
 
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

