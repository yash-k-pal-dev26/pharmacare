<?php
// dashboard.php - Main Dashboard Page
require_once __DIR__ . '/includes/auth.php';
check_auth();

$page_title = 'Dashboard';
include __DIR__ . '/includes/header.php';

// Default dynamic stat metrics
$total_medicines = 0;
$low_stock_count = 0;
$expiring_count = 0;
$todays_sales = 0.00;
$low_stock_items = [];
$recent_sales = [];

if ($pdo) {
    try {
        // Total Medicines
        $total_medicines = $pdo->query("SELECT COUNT(*) FROM medicines")->fetchColumn();

        // Low Stock Count
        $low_stock_count = $pdo->query("SELECT COUNT(*) FROM medicines WHERE quantity <= reorder_level")->fetchColumn();

        // Expiring Medicines (within 30 days)
        $expiring_count = $pdo->query("SELECT COUNT(*) FROM medicines WHERE expiry_date <= DATE_ADD(CURDATE(), INTERVAL 30 DAY)")->fetchColumn();

        // Today's Sales
        $todays_sales = $pdo->query("SELECT COALESCE(SUM(total_amount), 0) FROM sales WHERE DATE(sale_date) = CURDATE()")->fetchColumn();

        // Fetch Low Stock Table Data
        $stmtLow = $pdo->query("SELECT m.*, c.name as category_name FROM medicines m LEFT JOIN categories c ON m.category_id = c.id WHERE m.quantity <= m.reorder_level ORDER BY m.quantity ASC LIMIT 5");
        $low_stock_items = $stmtLow->fetchAll();

        // Fetch Recent Sales
        $stmtSales = $pdo->query("SELECT s.*, c.name as customer_name FROM sales s LEFT JOIN customers c ON s.customer_id = c.id ORDER BY s.sale_date DESC LIMIT 5");
        $recent_sales = $stmtSales->fetchAll();
    } catch (\PDOException $e) {
        $db_error = $e->getMessage();
    }
} else {
    // Fallback seed data when database server is starting
    $total_medicines = 1248;
    $low_stock_count = 24;
    $expiring_count = 17;
    $todays_sales = 24580.00;

    $low_stock_items = [
        ['name' => 'Amoxicillin 250mg', 'category_name' => 'Antibiotics', 'quantity' => 8, 'reorder_level' => 15, 'selling_price' => 45.00, 'expiry_date' => '2026-09-15'],
        ['name' => 'Azithromycin 500mg', 'category_name' => 'Antibiotics', 'quantity' => 5, 'reorder_level' => 10, 'selling_price' => 110.00, 'expiry_date' => '2026-09-10'],
        ['name' => 'Ibuprofen 400mg', 'category_name' => 'Analgesic / Pain Relief', 'quantity' => 9, 'reorder_level' => 20, 'selling_price' => 28.00, 'expiry_date' => '2026-09-25'],
    ];

    $recent_sales = [
        ['invoice_number' => 'INV-000125', 'customer_name' => 'Priya Verma', 'total_amount' => 100.00, 'payment_type' => 'UPI', 'sale_date' => date('Y-m-d H:i:s')],
        ['invoice_number' => 'INV-000124', 'customer_name' => 'Rahul Sharma', 'total_amount' => 70.00, 'payment_type' => 'Cash', 'sale_date' => date('Y-m-d H:i:s', strtotime('-1 hour'))]
    ];
}
?>

<div class="dashboard-header">
  <h1 class="welcome-title">Good Evening, <?= htmlspecialchars($user['name']) ?> 👋</h1>
  <p class="welcome-sub">Here's your pharmacy operational overview for today.</p>
</div>

<?php if (isset($db_connection_error)): ?>
  <div class="alert alert-warning">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <span><strong>Notice:</strong> Database server connection pending. Displaying demo overview data. Make sure MySQL is running in XAMPP.</span>
  </div>
<?php endif; ?>

<!-- 4 Top Statistics Cards -->
<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-icon icon-blue">
      <i class="fa-solid fa-capsules"></i>
    </div>
    <div class="stat-details">
      <span class="stat-value"><?= number_format($total_medicines) ?></span>
      <span class="stat-label">Total Medicines</span>
    </div>
  </div>

  <div class="stat-card">
    <div class="stat-icon icon-orange">
      <i class="fa-solid fa-boxes-stacked"></i>
    </div>
    <div class="stat-details">
      <span class="stat-value"><?= number_format($low_stock_count) ?></span>
      <span class="stat-label">Low Stock Items</span>
    </div>
  </div>

  <div class="stat-card">
    <div class="stat-icon icon-red">
      <i class="fa-solid fa-triangle-exclamation"></i>
    </div>
    <div class="stat-details">
      <span class="stat-value"><?= number_format($expiring_count) ?></span>
      <span class="stat-label">Expiring Soon</span>
    </div>
  </div>

  <div class="stat-card">
    <div class="stat-icon icon-green">
      <i class="fa-solid fa-indian-rupee-sign"></i>
    </div>
    <div class="stat-details">
      <span class="stat-value">&#8377;<?= number_format($todays_sales, 2) ?></span>
      <span class="stat-label">Today's Sales</span>
    </div>
  </div>
</div>

<!-- Main Dashboard Content Grid -->
<div class="dashboard-grid">
  <!-- Left Side: Tables -->
  <div class="dashboard-left">
    
    <!-- Low Stock Attention Table -->
    <div class="dashboard-card">
      <div class="card-title">
        <span><i class="fa-solid fa-triangle-exclamation" style="color: #f59e0b;"></i> Low Stock Attention</span>
        <a href="medicines/index.php" style="font-size: 0.85rem; color: var(--primary-color);">View All Inventory &rarr;</a>
      </div>

      <div class="table-responsive">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <?php if (!empty($low_stock_items)): ?>
              <?php foreach ($low_stock_items as $item): ?>
                <tr>
                  <td><strong><?= htmlspecialchars($item['name']) ?></strong></td>
                  <td><?= htmlspecialchars($item['category_name'] ?? 'General') ?></td>
                  <td style="color: #dc2626; font-weight: bold;"><?= $item['quantity'] ?></td>
                  <td>&#8377;<?= number_format($item['selling_price'], 2) ?></td>
                  <td><span class="badge badge-danger">Low Stock</span></td>
                </tr>
              <?php endforeach; ?>
            <?php else: ?>
              <tr>
                <td colspan="5" style="text-align: center; color: var(--text-secondary);">No low stock items. All inventory levels are optimal!</td>
              </tr>
            <?php endif; ?>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Recent Sales Table -->
    <div class="dashboard-card">
      <div class="card-title">
        <span><i class="fa-solid fa-receipt" style="color: var(--primary-color);"></i> Recent Sales Transactions</span>
        <a href="sales/history.php" style="font-size: 0.85rem; color: var(--primary-color);">View Sales History &rarr;</a>
      </div>

      <div class="table-responsive">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Invoice No.</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <?php if (!empty($recent_sales)): ?>
              <?php foreach ($recent_sales as $sale): ?>
                <tr>
                  <td><a href="sales/invoice.php?id=<?= $sale['id'] ?? 1 ?>" style="font-weight: 600; color: var(--primary-color);"><?= htmlspecialchars($sale['invoice_number']) ?></a></td>
                  <td><?= htmlspecialchars($sale['customer_name'] ?? 'Walk-in Customer') ?></td>
                  <td><strong>&#8377;<?= number_format($sale['total_amount'], 2) ?></strong></td>
                  <td><span class="badge badge-info"><?= htmlspecialchars($sale['payment_type']) ?></span></td>
                  <td><?= date('h:i A', strtotime($sale['sale_date'])) ?></td>
                </tr>
              <?php endforeach; ?>
            <?php else: ?>
              <tr>
                <td colspan="5" style="text-align: center; color: var(--text-secondary);">No transactions recorded today.</td>
              </tr>
            <?php endif; ?>
          </tbody>
        </table>
      </div>
    </div>

  </div>

  <!-- Right Side: Quick Action Panel & System Info -->
  <div class="dashboard-right">
    <div class="dashboard-card">
      <div class="card-title">
        <span><i class="fa-solid fa-bolt" style="color: var(--accent-color);"></i> Quick Actions</span>
      </div>

      <div class="quick-actions">
        <a href="sales/new-sale.php" class="action-link">
          <i class="fa-solid fa-cart-plus" style="color: #10b981;"></i>
          <span>Create New Sale (POS)</span>
        </a>
        <a href="medicines/add.php" class="action-link">
          <i class="fa-solid fa-plus-circle" style="color: #3b82f6;"></i>
          <span>Add New Medicine</span>
        </a>
        <a href="purchases/add.php" class="action-link">
          <i class="fa-solid fa-truck-ramp-box" style="color: #8b5cf6;"></i>
          <span>Record Stock Purchase</span>
        </a>
        <a href="reports/sales.php" class="action-link">
          <i class="fa-solid fa-chart-pie" style="color: #f59e0b;"></i>
          <span>Generate Analytics Report</span>
        </a>
      </div>
    </div>

    <!-- System Details -->
    <div class="dashboard-card" style="background: var(--primary-light); border-color: var(--primary-color);">
      <h4 style="color: var(--primary-color); font-size: 0.95rem; margin-bottom: 8px;">
        <i class="fa-solid fa-circle-check"></i> System Operational Status
      </h4>
      <p style="font-size: 0.85rem; color: var(--text-primary); line-height: 1.4;">
        <strong>PHP Version:</strong> <?= phpversion() ?><br>
        <strong>Database:</strong> MySQL PDO<br>
        <strong>Environment:</strong> XAMPP / Apache<br>
        <strong>Status:</strong> Active & Healthy
      </p>
    </div>
  </div>
</div>

<?php include __DIR__ . '/includes/footer.php'; ?>
