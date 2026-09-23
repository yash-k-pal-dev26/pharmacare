<?php
// includes/db.php - Database connection using PHP PDO

$host = 'localhost';
$db   = 'pharmacy_management';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    // If MySQL connection fails, display user-friendly error message
    // In production/demo, this gives a clear warning to start XAMPP/MySQL
    $db_connection_error = $e->getMessage();
    $pdo = null;
}
?>
