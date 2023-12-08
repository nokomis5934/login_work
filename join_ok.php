<?php 
include('./connect.php');
// if($con) echo "OK\n";
// else echo "Fail\n";
	
$userName = $_POST['userName'];
$userId = $_POST['userId'];
$userPw = $_POST['userPw'];
$userAddr = $_POST['userAddress'];
$userPhone = $_POST['userPhone'];
$userEmail = $_POST['userEmail'];
$userDate = date('Y-m-d H:i:s');

$salt = '$5$QOPrAVIK'."$userId".'$';
$hashPw = crypt($userPw, $salt);

$sql = " INSERT INTO userTB
        (userId, userPw, userName, userAddress, userPhone, userEmail, userDate)
        VALUES('$userId', '$hashPw', '$userName', '$userAddr', '$userPhone','$userEmail','$userDate')
";

$rst = mysqli_query($con, $sql);

if($rst){
    echo"
        <script>
            alert(\"Member registration complete!!\");
            location.href = \"./index.html\";
        </script>
    ";
}else{
    echo " 
	    <script>
            alert(\"Member registration Fail!!!\");
            history.back();
        </script>
	";
   exit;
}

?>