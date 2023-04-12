<?php

$host = "localhost";
$login = "login"; // FTP-Benutzername einsetzen
$password = "password_of_database"; // Passwort der Datenbank einsetzen
$database = 'name_of_database'; // Namen der Datenbank einsetzen
$connection = mysqli_connect($host,$login,$password,$database);

if(mysqli_connect_errno())
{
	echo 'Die Verbindung zur Datenbank konnte nicht aufgebaut werden.<br>Fehler: '.mysqli_connect_error();
}

mysqli_set_charset($connection, 'utf8');

?>