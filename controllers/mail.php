<?php 
// if(isset($_POST['name'])){
// 	$time=$_POST['name'];
// }
	$to = "carlosanselmi2@gmail.com";
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$headers = "From: ".$_POST['email'];
 
	mail($to, $subject, $message, $headers);
?>