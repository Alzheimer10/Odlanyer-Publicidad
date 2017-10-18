<?php   
	    $usuario = $_POST['name'];
	    $subject  = $_POST['subject'];
	    $email  = $_POST['email'];
	    $message  = $_POST['message'];
	    mail("carlosanselmi2@gmail.com","Formulario recibido",$cuerpo); 

/*	    $usuario = $_POST['name'];
	    $subject  = $_POST['subject'];
	    $email  = $_POST['email'];
	    $message  = $_POST['message'];
	    mail("admin@tudominio.com","Formulario recibido",$cuerpo); 
    	echo $usuario . ' ' .$subject. ' ' .$email. ' ' .$message;

	echo "<script language='javascript'>
            alert('fallado');
         </script>";
*/
?>
