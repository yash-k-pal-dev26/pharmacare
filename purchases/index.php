<?php
// purchases/index.php - Purchase History
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$page_title = 'Purchase History';
include __DIR__ . '/../includes/header.php';

$purchases = [];
if ($pdo) {
    try {
        $stmt = $pdo->query("SELECT p.*, s.name as supplier_name, s.company FROM purchases p LEFT JOIN suppliers s ON p.supplier_id = s.id ORDER BY p.purchase_date DESC");
        $purchases = $stmt->fetchAll();
    } catch (\PDOException $e) {
        $error = $e->getMessage();
    }
} else {
    $purchases = [
        ['id' => 1, 'purchase_number' => 'PUR-2026-001', 'supplier_name' => 'Rajesh Pharma Supplies', 'company' => 'Apex Healthcare Pvt Ltd', 'total_amount' => 12500.00, 'purchase_date' => '2026-09-01 10:30:00']
    ];
}
?>

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
  <div>
    <h1 style="font-size: 1.6rem; font-weight: 700;">Stock Purchases</h1>
    <p style="color: var(--text-secondary); font-size: 0.9rem;">Record new inventory purchases from distributors and suppliers.</p>
  </div>
  <a href="add.php" class="btn btn-primary">
    <i class="fa-solid fa-plus"></i> Record New Purchase
  </a>
</div>

<div class="dashboard-card">
  <div class="table-responsive">
    <table class="custom-table">
      <thead>
        <tr>
          <th>Purchase No.</th>
          <th>Supplier Name</th>
          <th>Company</th>
          <th>Total Amount</th>
          <th>Date Recorded</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($purchases as $p): ?>
          <tr>
            <td><strong style="color: var(--primary-color);"><?= htmlspecialchars($p['purchase_number']) ?></strong></td>
            <td><?= htmlspecialchars($p['supplier_name']) ?></td>
            <td><?= htmlspecialchars($p['company']) ?></td>
            <td><strong>&#8377;<?= number_format($p['total_amount'], 2) ?></strong></td>
            <td><?= date('d M Y, h:i A', strtotime($p['purchase_date'])) ?></td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</div>

<?php include __DIR__ . '/../includes/footer.php'; ?>
