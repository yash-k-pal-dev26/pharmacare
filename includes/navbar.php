<?php
// includes/navbar.php - Navigation Bar
$base_url = $base_url ?? '';
$current_page = basename($_SERVER['PHP_SELF']);
?>
<nav class="main-navbar">
  <button class="mobile-nav-toggle" id="mobileNavToggle">
    <i class="fa-solid fa-bars"></i> Menu
  </button>

  <ul class="nav-links" id="navLinks">
    <li class="nav-item">
      <a href="<?= $base_url ?>dashboard.php" class="nav-link <?= ($current_page == 'dashboard.php') ? 'active' : '' ?>">
        <i class="fa-solid fa-chart-line"></i> Dashboard
      </a>
    </li>

    <!-- Medicines Dropdown -->
    <li class="nav-item">
      <a href="#" class="nav-link <?= (strpos($_SERVER['PHP_SELF'], 'medicines') !== false) ? 'active' : '' ?>">
        <i class="fa-solid fa-pills"></i> Medicines <i class="fa-solid fa-caret-down" style="font-size: 0.75rem;"></i>
      </a>
      <div class="nav-dropdown">
        <a href="<?= $base_url ?>medicines/index.php"><i class="fa-solid fa-list"></i> Medicine Inventory</a>
        <a href="<?= $base_url ?>medicines/add.php"><i class="fa-solid fa-plus"></i> Add New Medicine</a>
        <a href="<?= $base_url ?>medicines/categories.php"><i class="fa-solid fa-tags"></i> Categories</a>
      </div>
    </li>

    <!-- Sales Dropdown -->
    <li class="nav-item">
      <a href="#" class="nav-link <?= (strpos($_SERVER['PHP_SELF'], 'sales') !== false) ? 'active' : '' ?>">
        <i class="fa-solid fa-cart-shopping"></i> Sales <i class="fa-solid fa-caret-down" style="font-size: 0.75rem;"></i>
      </a>
      <div class="nav-dropdown">
        <a href="<?= $base_url ?>sales/new-sale.php"><i class="fa-solid fa-cash-register"></i> New POS Sale</a>
        <a href="<?= $base_url ?>sales/history.php"><i class="fa-solid fa-receipt"></i> Sales History</a>
      </div>
    </li>

    <!-- Purchases Dropdown -->
    <li class="nav-item">
      <a href="#" class="nav-link <?= (strpos($_SERVER['PHP_SELF'], 'purchases') !== false) ? 'active' : '' ?>">
        <i class="fa-solid fa-truck-ramp-box"></i> Purchases <i class="fa-solid fa-caret-down" style="font-size: 0.75rem;"></i>
      </a>
      <div class="nav-dropdown">
        <a href="<?= $base_url ?>purchases/index.php"><i class="fa-solid fa-boxes-packing"></i> Purchase History</a>
        <a href="<?= $base_url ?>purchases/add.php"><i class="fa-solid fa-cart-plus"></i> Add Purchase</a>
      </div>
    </li>

    <!-- Suppliers Dropdown -->
    <li class="nav-item">
      <a href="#" class="nav-link <?= (strpos($_SERVER['PHP_SELF'], 'suppliers') !== false) ? 'active' : '' ?>">
        <i class="fa-solid fa-building-user"></i> Suppliers <i class="fa-solid fa-caret-down" style="font-size: 0.75rem;"></i>
      </a>
      <div class="nav-dropdown">
        <a href="<?= $base_url ?>suppliers/index.php"><i class="fa-solid fa-address-book"></i> View Suppliers</a>
        <a href="<?= $base_url ?>suppliers/add.php"><i class="fa-solid fa-user-plus"></i> Add Supplier</a>
      </div>
    </li>

    <li class="nav-item">
      <a href="<?= $base_url ?>customers/index.php" class="nav-link <?= (strpos($_SERVER['PHP_SELF'], 'customers') !== false) ? 'active' : '' ?>">
        <i class="fa-solid fa-users"></i> Customers
      </a>
    </li>

    <li class="nav-item">
      <a href="<?= $base_url ?>prescriptions/index.php" class="nav-link <?= (strpos($_SERVER['PHP_SELF'], 'prescriptions') !== false) ? 'active' : '' ?>">
        <i class="fa-solid fa-file-prescription"></i> Prescriptions
      </a>
    </li>

    <li class="nav-item">
      <a href="<?= $base_url ?>reports/sales.php" class="nav-link <?= (strpos($_SERVER['PHP_SELF'], 'reports') !== false) ? 'active' : '' ?>">
        <i class="fa-solid fa-chart-pie"></i> Reports
      </a>
    </li>
  </ul>
</nav>
