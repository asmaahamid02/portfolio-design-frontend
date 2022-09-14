<?php
$hostname = 'localhost';
$dbname = 'contactdb';
$username = 'root';
$password = '1234';

// Create connection
$connection = new mysqli($hostname, $username, $password, $dbname);

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}
// echo "Connected successfully";