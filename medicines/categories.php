<?php
// medicines/categories.php - Medicine Categories Management
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$page_title = 'Medicine Categories';
include __DIR__ . '/../includes/header.php';

$categories = [];
if ($pdo) {
    try {
        $categories = $pdo->query("SELECT c.*, COUNT(m.id) as medicine_count FROM categories c LEFT JOIN medicines m ON c.id = m.category_id GROUP BY c.id ORDER BY c.name ASC")->fetchAll();
    } catch (\PDOException $e) {
        $error = $e->getMessage();
    }
} else {
    $categories = [
        ['id' => 1, 'name' => 'Analgesic / Pain Relief', 'description' => 'Medicines used to relieve pain and reduce fever.', 'medicine_count' => 2],
        ['id' => 2, 'name' => 'Antibiotics', 'description' => 'Medicines used to treat bacterial infections.', 'medicine_count' => 2],
        ['id' => 3, 'name' => 'Antihistamine / Allergy', 'description' => 'Medicines used to treat allergic conditions.', 'medicine_count' => 1]
    ];
}
?>

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
  <div>
    <h1 style="font-size: 1.6rem; font-weight: 700;">Medicine Categories</h1>
    <p style="color: var(--text-secondary); font-size: 0.9rem;">Organize inventory medicines into therapeutic categories.</p>
  </div>
</div>

<div class="dashboard-card">
  <div class="table-responsive">
    <table class="custom-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Category Name</th>
          <th>Description</th>
          <th>Total Medicines</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($categories as $cat): ?>
          <tr>
            <td>#<?= $cat['id'] ?></td>
            <td><strong><?= htmlspecialchars($cat['name']) ?></strong></td>
            <td><?= htmlspecialchars($cat['description']) ?></td>
            <td><span class="badge badge-info"><?= $cat['medicine_count'] ?> Medicines</span></td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</div>

<?php include __DIR__ . '/../includes/footer.php'; ?>
