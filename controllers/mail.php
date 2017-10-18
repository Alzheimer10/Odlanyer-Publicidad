<?php 
// if(isset($_POST['name'])){
// 	$time=$_POST['name'];
// }
	$to = "carlosanselmi2@gmail.com";
	$subject = "Asunto del email";
	$message = "Este es mi primer envío de email con PHP";
	 
	mail($to, $subject, $message);
?>