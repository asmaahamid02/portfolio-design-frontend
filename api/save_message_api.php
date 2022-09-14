<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include_once "connection.php";

if (isset($_POST['fullName']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['message'])) {
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
}