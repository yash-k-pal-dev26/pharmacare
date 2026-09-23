<?php
// includes/header.php - Global Header & Top Announcement Bar
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/db.php';

$base_url = $base_url ?? '';
$user = get_logged_user();

// Fetch low stock count dynamically from DB if connected
$low_stock_count = 0;
$unread_notif_count = 3;

if ($pdo) {
    try {
        $stmt = $pdo->query("SELECT COUNT(*) FROM medicines WHERE quantity <= reorder_level");
        $low_stock_count = $stmt->fetchColumn();

        $stmtNotif = $pdo->query("SELECT COUNT(*) FROM notifications WHERE is_read = 0");
        $unread_notif_count = $stmtNotif->fetchColumn();
    } catch (\PDOException $e) {
        $low_stock_count = 8;
    }
} else {
    $low_stock_count = 8;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PharmaCare - Pharmacy Management System</title>
  
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Google Fonts (Inter) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- CSS Stylesheets -->
  <link rel="stylesheet" href="<?= $base_url ?>css/style.css">
  <link rel="stylesheet" href="<?= $base_url ?>css/dashboard.css">
  <link rel="stylesheet" href="<?= $base_url ?>css/forms.css">
  <link rel="stylesheet" href="<?= $base_url ?>css/tables.css">
  <link rel="stylesheet" href="<?= $base_url ?>css/responsive.css">
</head>
<body>

  <!-- Top Announcement Bar (As inspired by your reference) -->
  <div class="announcement-bar">
    <div class="announcement-content">
      <i class="fa-solid fa-capsules"></i>
      <span><strong>Pharmacy Management System:</strong> <?= $low_stock_count ?> medicines require stock attention</span>
    </div>
    <a href="<?= $base_url ?>medicines/index.php" class="announcement-link">View Details &rarr;</a>
  </div>

  <!-- Header Section -->
  <header class="main-header">
    <a href="<?= $base_url ?>dashboard.php" class="brand-logo">
      <i class="fa-solid fa-prescription-bottle-medical"></i>
      <span>PHARMACARE</span>
    </a>

    <div class="header-search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" id="globalSearchInput" placeholder="Search medicines, inventory, invoice...">
    </div>

    <div class="header-actions">
      <!-- Dark Mode Switcher -->
      <button class="icon-btn" id="themeToggle" title="Toggle Light/Dark Theme">
        <i class="fa-solid fa-moon"></i>
      </button>

      <!-- Notification Bell -->
      <button class="icon-btn" id="notifBtn" title="Notifications">
        <i class="fa-regular fa-bell"></i>
        <?php if ($unread_notif_count > 0): ?>
          <span class="badge-count"><?= $unread_notif_count ?></span>
        <?php endif; ?>
      </button>

      <!-- User Profile -->
      <div class="user-profile" id="userProfile">
        <div class="avatar"><?= strtoupper(substr($user['name'], 0, 1)) ?></div>
        <div class="user-info">
          <span class="user-name"><?= htmlspecialchars($user['name']) ?></span>
          <span class="user-role"><?= htmlspecialchars($user['role']) ?></span>
        </div>
        <i class="fa-solid fa-chevron-down" style="font-size: 0.75rem; color: var(--text-secondary);"></i>

        <!-- Profile Dropdown -->
        <div class="profile-dropdown" id="profileDropdown">
          <a href="#"><i class="fa-regular fa-user"></i> My Profile</a>
          <a href="#"><i class="fa-solid fa-gear"></i> Settings</a>
          <hr style="border: 0; border-top: 1px solid var(--border-color);">
          <a href="<?= $base_url ?>logout.php" style="color: #ef4444;"><i class="fa-solid fa-right-from-bracket"></i> Logout</a>
        </div>
      </div>
    </div>
  </header>

  <!-- Include Horizontal Navigation -->
  <?php include __DIR__ . '/navbar.php'; ?>

  <!-- Main Content Body Wrapper -->
  <main class="app-container">
