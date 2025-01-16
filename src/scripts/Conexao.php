<?php
//conexão
$server = "localhost";
$username = "root";
$password = '';
$dbname = "restaurante";

$dsn = "mysql:host=$server;dbname=$dbname";

$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

if(!isset($conn)){
    $conn = new PDO($dsn,$username,$password);
}

?>