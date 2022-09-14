<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include_once "connection.php";


$sql = "SELECT full_name, email, phone, message FROM messages";

$statement = $connection->prepare($sql);
$statement->execute();
$data_array = $statement->get_result();

$response = [];

while ($row = $data_array->fetch_assoc()) {
    $response[] = $row;
}

echo json_encode($response);

$statement->close();
$connection->close();