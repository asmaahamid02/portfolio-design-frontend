<?php
include_once "connection.php";

$full_name = $_POST['fullName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$sql = "INSERT INTO messages (full_name, email, phone, message) VALUES (?,?,?,?)";

$statement = $connection->prepare($sql);
$statement->bind_param('ssss', $full_name, $email, $phone, $message);
$statement->execute();

$response['status'] = 'success';

echo json_encode($response);

$statement->close();
$connection->close();