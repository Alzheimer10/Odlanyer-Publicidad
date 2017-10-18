<?php 
// if(isset($_POST['name'])){
// 	$time=$_POST['name'];
// }
	$to = "carlosanselmi2@gmail.com";
	$subject = isset($_POST['subject'];
	$message = isset($_POST['message'];
	$headers = "From: carlosanselmi3@hotmail.com";
 
	mail($to, $subject, $message, $headers);
?>