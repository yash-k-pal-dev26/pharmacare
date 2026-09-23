<?php
// sales/history.php - Sales Transaction History
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$page_title = 'Sales History';
include __DIR__ . '/../includes/header.php';

$sales = [];
if ($pdo) {
    try {
        $stmt = $pdo->query("SELECT s.*, c.name as customer_name, u.name as cashier_name FROM sales s LEFT JOIN customers c ON s.customer_id = c.id LEFT JOIN users u ON s.user_id = u.id ORDER BY s.sale_date DESC");
        $sales = $stmt->fetchAll();
    } catch (\PDOException $e) {
        $error = $e->getMessage();
    }
} else {
    $sales = [
        ['id' => 1, 'invoice_number' => 'INV-000124', 'customer_name' => 'Rahul Sharma', 'total_amount' => 70.00, 'payment_type' => 'Cash', 'sale_date' => '2026-09-03 22:30:00', 'cashier_name' => 'Yash Kumar Pal'],
        ['id' => 2, 'invoice_number' => 'INV-000125', 'customer_name' => 'Priya Verma', 'total_amount' => 100.00, 'payment_type' => 'UPI', 'sale_date' => '2026-09-03 21:15:00', 'cashier_name' => 'Yash Kumar Pal']
    ];
}
?>

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
  <div>
    <h1 style="font-size: 1.6rem; font-weight: 700;">Sales Transaction History</h1>
    <p style="color: var(--text-secondary); font-size: 0.9rem;">View past sales billing records and printable receipts.</p>
  </div>
  <a href="new-sale.php" class="btn btn-primary">
    <i class="fa-solid fa-plus"></i> Create New Sale
  </a>
</div>

<div class="dashboard-card">
  <div class="table-responsive">
    <table class="custom-table">
      <thead>
        <tr>
          <th>Invoice No.</th>
          <th>Customer</th>
          <th>Cashier / Staff</th>
          <th>Total Amount</th>
          <th>Payment Type</th>
          <th>Date & Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($sales as $sale): ?>
          <tr>
            <td><strong style="color: var(--primary-color);"><?= htmlspecialchars($sale['invoice_number']) ?></strong></td>
            <td><?= htmlspecialchars($sale['customer_name'] ?? 'Walk-in Customer') ?></td>
            <td><?= htmlspecialchars($sale['cashier_name'] ?? 'Staff') ?></td>
            <td><strong>&#8377;<?= number_format($sale['total_amount'], 2) ?></strong></td>
            <td><span class="badge badge-info"><?= htmlspecialchars($sale['payment_type']) ?></span></td>
            <td><?= date('d M Y, h:i A', strtotime($sale['sale_date'])) ?></td>
            <td>
              <a href="invoice.php?id=<?= $sale['id'] ?>" class="btn btn-secondary" style="padding: 4px 10px; font-size: 0.8rem;">
                <i class="fa-solid fa-print"></i> View Invoice
              </a>
            </td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</div>

<?php include __DIR__ . '/../includes/footer.php'; ?>
