<?php
// medicines/index.php - Medicine Inventory CRUD List
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$page_title = 'Medicine Inventory';
include __DIR__ . '/../includes/header.php';

$medicines = [];

if ($pdo) {
    try {
        $stmt = $pdo->query("SELECT m.*, c.name as category_name, s.name as supplier_name FROM medicines m LEFT JOIN categories c ON m.category_id = c.id LEFT JOIN suppliers s ON m.supplier_id = s.id ORDER BY m.id DESC");
        $medicines = $stmt->fetchAll();
    } catch (\PDOException $e) {
        $error = $e->getMessage();
    }
} else {
    // Fallback seed data
    $medicines = [
        ['id' => 1, 'name' => 'Paracetamol 500mg', 'generic_name' => 'Acetaminophen', 'category_name' => 'Analgesic / Pain Relief', 'batch_number' => 'BATCH-2026-001', 'manufacturer' => 'Cipla Ltd', 'purchase_price' => 12.50, 'selling_price' => 20.00, 'quantity' => 120, 'reorder_level' => 20, 'expiry_date' => '2027-01-10'],
        ['id' => 2, 'name' => 'Amoxicillin 250mg', 'generic_name' => 'Amoxicillin Trihydrate', 'category_name' => 'Antibiotics', 'batch_number' => 'BATCH-2026-002', 'manufacturer' => 'Sun Pharma', 'purchase_price' => 30.00, 'selling_price' => 45.00, 'quantity' => 8, 'reorder_level' => 15, 'expiry_date' => '2026-09-15'],
        ['id' => 3, 'name' => 'Cetirizine 10mg', 'generic_name' => 'Cetirizine Hydrochloride', 'category_name' => 'Antihistamine / Allergy', 'batch_number' => 'BATCH-2026-003', 'manufacturer' => 'Dr. Reddy’s', 'purchase_price' => 20.00, 'selling_price' => 35.00, 'quantity' => 150, 'reorder_level' => 25, 'expiry_date' => '2027-03-01'],
        ['id' => 4, 'name' => 'Azithromycin 500mg', 'generic_name' => 'Azithromycin', 'category_name' => 'Antibiotics', 'batch_number' => 'BATCH-2026-004', 'manufacturer' => 'Zydus Cadila', 'purchase_price' => 70.00, 'selling_price' => 110.00, 'quantity' => 5, 'reorder_level' => 10, 'expiry_date' => '2026-09-10'],
        ['id' => 5, 'name' => 'Ibuprofen 400mg', 'generic_name' => 'Ibuprofen', 'category_name' => 'Analgesic / Pain Relief', 'batch_number' => 'BATCH-2026-005', 'manufacturer' => 'Abbott Pharma', 'purchase_price' => 15.00, 'selling_price' => 28.00, 'quantity' => 9, 'reorder_level' => 20, 'expiry_date' => '2026-09-25']
    ];
}
?>

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
  <div>
    <h1 style="font-size: 1.6rem; font-weight: 700;">Medicine Inventory</h1>
    <p style="color: var(--text-secondary); font-size: 0.9rem;">Manage pharmacy medicine records, stock levels, and batch expiry tracking.</p>
  </div>
  <a href="add.php" class="btn btn-primary">
    <i class="fa-solid fa-plus"></i> Add New Medicine
  </a>
</div>

<?php if (isset($_GET['success'])): ?>
  <div class="alert alert-success">
    <i class="fa-solid fa-circle-check"></i>
    <span><?= htmlspecialchars($_GET['success']) ?></span>
  </div>
<?php endif; ?>

<div class="dashboard-card">
  <div class="table-responsive">
    <table class="custom-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Medicine Name</th>
          <th>Category</th>
          <th>Batch No.</th>
          <th>Manufacturer</th>
          <th>Quantity</th>
          <th>Buy / Sell Price</th>
          <th>Expiry Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($medicines as $med): ?>
          <?php
            $is_low = $med['quantity'] <= $med['reorder_level'];
            $exp_timestamp = strtotime($med['expiry_date']);
            $days_to_exp = round(($exp_timestamp - time()) / (60 * 60 * 24));
          ?>
          <tr>
            <td>#<?= $med['id'] ?></td>
            <td>
              <strong><?= htmlspecialchars($med['name']) ?></strong><br>
              <small style="color: var(--text-secondary);"><?= htmlspecialchars($med['generic_name'] ?? '') ?></small>
            </td>
            <td><?= htmlspecialchars($med['category_name'] ?? 'General') ?></td>
            <td><code><?= htmlspecialchars($med['batch_number']) ?></code></td>
            <td><?= htmlspecialchars($med['manufacturer']) ?></td>
            <td style="font-weight: bold; color: <?= $is_low ? '#dc2626' : 'var(--text-primary)' ?>;">
              <?= $med['quantity'] ?>
            </td>
            <td>
              &#8377;<?= number_format($med['purchase_price'], 2) ?> / <strong style="color: var(--primary-color);">&#8377;<?= number_format($med['selling_price'], 2) ?></strong>
            </td>
            <td>
              <?= date('d M Y', $exp_timestamp) ?>
            </td>
            <td>
              <?php if ($days_to_exp < 0): ?>
                <span class="badge badge-danger">Expired</span>
              <?php elseif ($is_low): ?>
                <span class="badge badge-warning">Low Stock</span>
              <?php else: ?>
                <span class="badge badge-success">In Stock</span>
              <?php endif; ?>
            </td>
            <td>
              <div style="display: flex; gap: 6px;">
                <a href="edit.php?id=<?= $med['id'] ?>" class="table-action-btn" title="Edit Medicine"><i class="fa-solid fa-pen"></i></a>
                <a href="delete.php?id=<?= $med['id'] ?>" class="table-action-btn" style="color: #dc2626;" onclick="return confirm('Are you sure you want to delete this medicine record?');" title="Delete Medicine"><i class="fa-solid fa-trash"></i></a>
              </div>
            </td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</div>

<?php include __DIR__ . '/../includes/footer.php'; ?>
