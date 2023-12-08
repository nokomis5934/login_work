<?php
include('./connect.php');

$userId = $_GET['userId'];
$sql = "select * from userTB where userId='$userId'";
$rst = mysqli_query($con, $sql);
$arr = mysqli_fetch_array($rst);

echo isset($arr['userIdx']) ? "X" : "O";
?>