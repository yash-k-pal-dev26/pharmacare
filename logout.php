<?php
// logout.php - Session destruction & logout handler
require_once __DIR__ . '/includes/auth.php';

session_unset();
session_destroy();

header('Location: login.php');
exit;
?>
