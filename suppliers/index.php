<?php
// suppliers/index.php - Suppliers Management List
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$page_title = 'Suppliers Directory';
include __DIR__ . '/../includes/header.php';

$suppliers = [];
if ($pdo) {
    try {
        $suppliers = $pdo->query("SELECT * FROM suppliers ORDER BY name ASC")->fetchAll();
    } catch (\PDOException $e) {
        $error = $e->getMessage();
    }
} else {
    $suppliers = [
        ['id' => 1, 'name' => 'Rajesh Pharma Supplies', 'company' => 'Apex Healthcare Pvt Ltd', 'phone' => '+91 98765 43210', 'email' => 'sales@apexpharma.com', 'address' => '102 Industrial Zone, New Delhi'],
        ['id' => 2, 'name' => 'MediWorld Traders', 'company' => 'Global LifeSciences Inc', 'phone' => '+91 91234 56789', 'email' => 'contact@mediworld.com', 'address' => '45 Healthcare Avenue, Mumbai']
    ];
}
?>

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
  <div>
    <h1 style="font-size: 1.6rem; font-weight: 700;">Suppliers Directory</h1>
    <p style="color: var(--text-secondary); font-size: 0.9rem;">Manage medicine wholesale suppliers and pharmaceutical distributors.</p>
  </div>
  <a href="add.php" class="btn btn-primary">
    <i class="fa-solid fa-user-plus"></i> Add New Supplier
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
          <th>Supplier ID</th>
          <th>Contact Person</th>
          <th>Company Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($suppliers as $sup): ?>
          <tr>
            <td>#<?= $sup['id'] ?></td>
            <td><strong><?= htmlspecialchars($sup['name']) ?></strong></td>
            <td><?= htmlspecialchars($sup['company']) ?></td>
            <td><?= htmlspecialchars($sup['phone']) ?></td>
            <td><?= htmlspecialchars($sup['email'] ?? 'N/A') ?></td>
            <td><?= htmlspecialchars($sup['address'] ?? 'N/A') ?></td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</div>

<?php include __DIR__ . '/../includes/footer.php'; ?>
