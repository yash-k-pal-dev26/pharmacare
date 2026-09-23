<?php
// customers/index.php - Customers Management List
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$page_title = 'Customers Directory';
include __DIR__ . '/../includes/header.php';

$customers = [];
if ($pdo) {
    try {
        $customers = $pdo->query("SELECT c.*, COUNT(s.id) as total_purchases FROM customers c LEFT JOIN sales s ON c.id = s.customer_id GROUP BY c.id ORDER BY c.name ASC")->fetchAll();
    } catch (\PDOException $e) {
        $error = $e->getMessage();
    }
} else {
    $customers = [
        ['id' => 1, 'name' => 'Rahul Sharma', 'phone' => '+91 99887 76655', 'email' => 'rahul@gmail.com', 'address' => 'Sector 15, Chandigarh', 'total_purchases' => 1],
        ['id' => 2, 'name' => 'Priya Verma', 'phone' => '+91 98112 23344', 'email' => 'priya@yahoo.com', 'address' => 'MG Road, Bengaluru', 'total_purchases' => 1]
    ];
}
?>

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
  <div>
    <h1 style="font-size: 1.6rem; font-weight: 700;">Customer Database</h1>
    <p style="color: var(--text-secondary); font-size: 0.9rem;">View registered pharmacy patients and purchase history.</p>
  </div>
  <a href="add.php" class="btn btn-primary">
    <i class="fa-solid fa-user-plus"></i> Add New Customer
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
          <th>Customer ID</th>
          <th>Full Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
          <th>Total Purchases</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($customers as $c): ?>
          <tr>
            <td>#<?= $c['id'] ?></td>
            <td><strong><?= htmlspecialchars($c['name']) ?></strong></td>
            <td><?= htmlspecialchars($c['phone']) ?></td>
            <td><?= htmlspecialchars($c['email'] ?? 'N/A') ?></td>
            <td><?= htmlspecialchars($c['address'] ?? 'N/A') ?></td>
            <td><span class="badge badge-info"><?= $c['total_purchases'] ?> Orders</span></td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</div>

<?php include __DIR__ . '/../includes/footer.php'; ?>
