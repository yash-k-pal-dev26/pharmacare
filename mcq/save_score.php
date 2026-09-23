<?php
header('Content-Type: application/json');

// Connect to the database
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'mcq_quiz';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed']));
}

// Get JSON data
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $score = $conn->real_escape_string($data['score']);
    $correct = $conn->real_escape_string($data['correct']);
    $wrong = $conn->real_escape_string($data['wrong']);
    $skipped = $conn->real_escape_string($data['skipped']);
    $time_taken = $conn->real_escape_string($data['time_taken']);

    $sql = "INSERT INTO results (score, correct, wrong, skipped, time_taken) VALUES ('$score', '$correct', '$wrong', '$skipped', '$time_taken')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true, 'message' => 'Score saved successfully!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error saving score: ' . $conn->error]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid data']);
}

$conn->close();
?>
