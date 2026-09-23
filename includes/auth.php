<?php
// includes/auth.php - Session management & security guards

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/**
 * Checks if user is authenticated. If not, redirects to login page.
 */
function check_auth() {
    if (!isset($_SESSION['user_id'])) {
        header('Location: login.php');
        exit;
    }
}

/**
 * Helper to retrieve currently logged in user info.
 */
function get_logged_user() {
    return [
        'id' => $_SESSION['user_id'] ?? null,
        'name' => $_SESSION['user_name'] ?? 'Yash Kumar Pal',
        'email' => $_SESSION['user_email'] ?? 'admin@pharmacare.com',
        'role' => $_SESSION['user_role'] ?? 'Admin'
    ];
}
?>
