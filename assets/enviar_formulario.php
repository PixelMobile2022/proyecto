<?php
// Obtener datos del formulario
$nombre = htmlspecialchars($_POST['nombre']);
$email = htmlspecialchars($_POST['email']);
$telefono = htmlspecialchars($_POST['telefono']);
$mensaje = htmlspecialchars($_POST['mensaje']);

// Configuración del correo
$to = 'alexandertulcaal@gmail.com'; // Cambia esto a tu dirección de correo
$subject = 'Nuevo mensaje de contacto';
$body = "Nombre: $nombre\nCorreo: $email\nTeléfono: $telefono\nMensaje:\n$mensaje";
$headers = "From: $email\r\n";

// Enviar correo
if (mail($to, $subject, $body, $headers)) {
    header('Location: ../page/gracias.html'); // Redirige a una página de agradecimiento
    exit();
} else {
    echo 'Error al enviar el correo.';
}
ini_set('display_errors', 1);
error_reporting(E_ALL);

?>
