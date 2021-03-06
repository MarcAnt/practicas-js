<?php


if (isset($_POST)) {

	error_reporting(0); #Para ocultar las respuestas de error  

	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$comments = $_POST['comments'];

	$domain = $_SERVER["HTTP_HOST"]; #Para obtener de donde viene el correo
	$to = "blackiron662@gmail.com"; 	
	$subject = "Contacto dese el formulario del sitio $domain: $subject"; 
	$message = "
		<p>
			Datos enviados dese el formulario del sitio <b>$domain</b>

		</p>
		<ul>
		    <li>Nombre: $name</li>
		    <li>Email: $email</li>
		    <li>Asunto: $subject</li>
		    <li>Comentario: $comments</li>
		</ul>
	"; 

	## Este correo solo se puede enviar desede un servidor, no en local. 


	$headers = "MIME-Version 1.0\r\n"."Content-Type: text/html; charset=utf-8\r\n"."From: Envío automático, no responder <no-replay@$domain>"; 

	$send_mail = mail($to, $subject, $message, $headers); 

	if ($send_mail) {

		$res = [
			"err" => false,
			"message" => "tus datos han sido enviados"
		];

	}else {

		$res = [
			"err" => true,
			"message" => "Error al enviar tus datos. Intenta nuevamente"
		];
	}
	# Con esta cabecera ser permiten hacer peticones desde cualquier origen (con el * o con x dominio)
	header('Access-Control-Allow-Origin: *');  

	header('Content-Type: application/json'); 

	echo json_encode($res); 	
}