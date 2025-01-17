<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "car_sales";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_SERVER['REQUEST_URI'] == '/add_car') {
    $data = json_decode(file_get_contents('php://input'), true);
    $make = $data['make'];
    $model = $data['model'];
    $year = $data['year'];
    $price = $data['price'];

    $stmt = $conn->prepare("INSERT INTO cars (make, model, year, price) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssii", $make, $model, $year, $price);
    $stmt->execute();
    $stmt->close();

    echo json_encode(["status" => "success", "id" => $conn->insert_id]);
}

if ($_SERVER['REQUEST_METHOD'] == 'GET' && $_SERVER['REQUEST_URI'] == '/get_cars') {
    $result = $conn->query("SELECT * FROM cars");
    $cars = [];
    while ($row = $result->fetch_assoc()) {
        $cars[] = $row;
    }
    echo json_encode($cars);
}

$conn->close();
?>
