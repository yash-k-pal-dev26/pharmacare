<?php
// reports/expiry.php - Expiry Tracking & Alerts Report
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$page_title = 'Medicine Expiry Report';
include __DIR__ . '/../includes/header.php';

$expiring_medicines = [];

if ($pdo) {
    try {
        $stmt = $pdo->query("SELECT m.*, c.name as category_name FROM medicines m LEFT JOIN categories c ON m.category_id = c.id WHERE m.expiry_date <= DATE_ADD(CURDATE(), INTERVAL 60 DAY) ORDER BY m.expiry_date ASC");
        $expiring_medicines = $stmt->fetchAll();
    } catch (\PDOException $e) {
        $error = $e->getMessage();
    }
} else {
    $expiring_medicines = [
        ['name' => 'Amoxicillin 250mg', 'category_name' => 'Antibiotics', 'batch_number' => 'BATCH-2026-002', 'quantity' => 8, 'expiry_date' => '2026-09-15'],
        ['name' => 'Azithromycin 500mg', 'category_name' => 'Antibiotics', 'batch_number' => 'BATCH-2026-004', 'quantity' => 5, 'expiry_date' => '2026-09-10'],
        ['name' => 'Ibuprofen 400mg', 'category_name' => 'Analgesic / Pain Relief', 'batch_number' => 'BATCH-2026-005', 'quantity' => 9, 'expiry_date' => '2026-09-25']
    ];
}
?>

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
  <div>
    <h1 style="font-size: 1.6rem; font-weight: 700;">Medicine Expiry Tracking Report</h1>
    <p style="color: var(--text-secondary); font-size: 0.9rem;">Automated classification of medicines near or past expiry dates.</p>
  </div>
</div>

<div class="dashboard-card">
  <div class="table-responsive">
    <table class="custom-table">
      <thead>
        <tr>
          <th>Medicine Name</th>
          <th>Category</th>
          <th>Batch No.</th>
          <th>Stock Quantity</th>
          <th>Expiry Date</th>
          <th>Expiry Classification</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($expiring_medicines as $med): ?>
          <?php
            $exp_time = strtotime($med['expiry_date']);
            $days = round(($exp_time - time()) / (60 * 60 * 24));
          ?>
          <tr>
            <td><strong><?= htmlspecialchars($med['name']) ?></strong></td>
            <td><?= htmlspecialchars($med['category_name'] ?? 'General') ?></td>
            <td><code><?= htmlspecialchars($med['batch_number']) ?></code></td>
            <td><?= $med['quantity'] ?> units</td>
            <td><strong><?= date('d M Y', $exp_time) ?></strong></td>
            <td>
              <?php if ($days < 0): ?>
                <span class="badge badge-danger">EXPIRED (<?= abs($days) ?> days ago)</span>
              <?php elseif ($days <= 7): ?>
                <span class="badge badge-danger">Critical: Expiring in <?= $days ?> days</span>
              <?php elseif ($days <= 30): ?>
                <span class="badge badge-warning">Expiring within 30 days (<?= $days ?> days)</span>
              <?php else: ?>
                <span class="badge badge-info">Expiring within 60 days</span>
              <?php endif; ?>
            </td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</div>

<?php include __DIR__ . '/../includes/footer.php'; ?>
