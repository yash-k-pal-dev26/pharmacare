<?php
// reports/sales.php - Sales Analytics Report
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$page_title = 'Sales Analytics Report';
include __DIR__ . '/../includes/header.php';

$total_revenue = 0.00;
$total_orders = 0;
$sales_by_payment = [];

if ($pdo) {
    try {
        $total_revenue = $pdo->query("SELECT COALESCE(SUM(total_amount), 0) FROM sales")->fetchColumn();
        $total_orders = $pdo->query("SELECT COUNT(*) FROM sales")->fetchColumn();
        $sales_by_payment = $pdo->query("SELECT payment_type, COUNT(*) as count, SUM(total_amount) as total FROM sales GROUP BY payment_type")->fetchAll();
    } catch (\PDOException $e) {
        $error = $e->getMessage();
    }
} else {
    $total_revenue = 170.00;
    $total_orders = 2;
    $sales_by_payment = [
        ['payment_type' => 'Cash', 'count' => 1, 'total' => 70.00],
        ['payment_type' => 'UPI', 'count' => 1, 'total' => 100.00]
    ];
}
?>

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
  <div>
    <h1 style="font-size: 1.6rem; font-weight: 700;">Sales & Revenue Analytics</h1>
    <p style="color: var(--text-secondary); font-size: 0.9rem;">Overview of total sales revenue, order volumes, and payment breakdown.</p>
  </div>
  <button onclick="window.print();" class="btn btn-primary"><i class="fa-solid fa-file-export"></i> Export Report</button>
</div>

<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-icon icon-green"><i class="fa-solid fa-indian-rupee-sign"></i></div>
    <div class="stat-details">
      <span class="stat-value">&#8377;<?= number_format($total_revenue, 2) ?></span>
      <span class="stat-label">Total Revenue Generated</span>
    </div>
  </div>

  <div class="stat-card">
    <div class="stat-icon icon-blue"><i class="fa-solid fa-receipt"></i></div>
    <div class="stat-details">
      <span class="stat-value"><?= number_format($total_orders) ?></span>
      <span class="stat-label">Total Sales Invoices</span>
    </div>
  </div>
</div>

<div class="dashboard-card">
  <div class="card-title">
    <span><i class="fa-solid fa-wallet"></i> Payment Method Breakdown</span>
  </div>
  <div class="table-responsive">
    <table class="custom-table">
      <thead>
        <tr>
          <th>Payment Mode</th>
          <th>Total Transactions</th>
          <th>Total Amount Collected</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($sales_by_payment as $row): ?>
          <tr>
            <td><strong><?= htmlspecialchars($row['payment_type']) ?></strong></td>
            <td><?= $row['count'] ?> orders</td>
            <td><strong>&#8377;<?= number_format($row['total'], 2) ?></strong></td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</div>

<?php include __DIR__ . '/../includes/footer.php'; ?>
