<?php 
 $mail = $_POST['mail'];
 $name = $_POST['name'];
 $password = $_POST['password'];
 $gender = $_POST['gender'];

//  database connection
$conn= new mysqli('localhost','root','','web');
if($conn->connect_error){
    die('Connection Failed : ' .$conn->connect_error);
}
else{
    $stmt = $conn->prepare("insert into registration(mail, name, password, gender) 
          values(?, ?, ?, ?)");
    $stmt->bind_param("ssss",$mail, $name, $password, $gender);
    $stmt->execute();
    echo "registration success";
    $stmt->close();
    $conn->close();
}
?> 