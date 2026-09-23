<?php
// medicines/delete.php - Delete Medicine record handler
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$id = intval($_GET['id'] ?? 0);

if ($pdo && $id > 0) {
    try {
        $stmt = $pdo->prepare("DELETE FROM medicines WHERE id = ?");
        $stmt->execute([$id]);
        header('Location: index.php?success=' . urlencode('Medicine record deleted successfully.'));
        exit;
    } catch (\PDOException $e) {
        header('Location: index.php?error=' . urlencode('Could not delete medicine record. It may be linked to active sales or purchases.'));
        exit;
    }
} else {
    header('Location: index.php?success=' . urlencode('Medicine record deleted (Demo).'));
    exit;
}
?>
