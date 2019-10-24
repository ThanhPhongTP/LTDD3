<?php
include 'DBConfig.php';
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName); 
$json = file_get_contents('php://input');
$obj = json_decode($json,true);
if ($conn->connect_error) { 
 die("Connection failed: " . $conn->connect_error);
} 
 $MaPB = $obj["Ma"];
$sql = "SELECT * FROM `dsNhanVien` WHERE `MaPB` LIKE '$MaPB'";
// WHERE `MaPb` LIKE '$MaPb'
 
$result = $conn->query($sql);
 
if ($result->num_rows >0) { 
 
 while($row[] = $result->fetch_assoc()) {
 
 $tempt = $row;
 
 $json = json_encode($tempt);
 
 
 }
 
} else {
 echo "No Results Found.";
}
 echo $json;
$conn->close();
?>