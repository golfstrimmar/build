<?php

$name= $_POST["name"];
$phone= $_POST["phone"];
$headers = "From: $name\r\nReply-To: $email\r\n$phone";
$success = mail( "yushinbox@gmail.com", $headers,$phone, $name);

// if(!$success -> send()){
// $message ="Ошибка!"
// }else{
// $message ="Данные отправлены!"
// }
//
// $response = [message => $message];
//
// header('Content-Type: application/json')
// echo json_encode($response);




?>