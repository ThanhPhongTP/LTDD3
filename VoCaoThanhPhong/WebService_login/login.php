<?php 

 include 'DBConfig.php';
 $conn = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
  $obj = json_decode($json,true);

// check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$username = $obj['username'];
$password = $obj['password'];

    $sql = "SELECT * FROM account WHERE username='$username' AND password ='$password'";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($result);
    if ($row['username'] != "") {
        if ($row['username'] == $username && $row['password'] == $password){
            echo json_encode("true");
        }
        else {
            echo json_encode("false");
        }
    }
    else {
        echo json_encode('try again');
    }

?>
