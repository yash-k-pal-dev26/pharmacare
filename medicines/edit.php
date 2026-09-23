<?php
// medicines/edit.php - Edit Existing Medicine Record
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$id = intval($_GET['id'] ?? 0);
$page_title = 'Edit Medicine Record';
$error_msg = '';

$medicine = null;
$categories = [];
$suppliers = [];

if ($pdo && $id > 0) {
    try {
        $stmt = $pdo->prepare("SELECT * FROM medicines WHERE id = ?");
        $stmt->execute([$id]);
        $medicine = $stmt->fetch();

        $categories = $pdo->query("SELECT * FROM categories ORDER BY name ASC")->fetchAll();
        $suppliers = $pdo->query("SELECT * FROM suppliers ORDER BY name ASC")->fetchAll();
    } catch (\PDOException $e) {
        $error_msg = $e->getMessage();
    }
}

if (!$medicine) {
    // Fallback stub for UI demo if DB record unavailable
    $medicine = [
        'id' => $id, 'name' => 'Paracetamol 500mg', 'generic_name' => 'Acetaminophen', 'category_id' => 1, 'supplier_id' => 1,
        'batch_number' => 'BATCH-2026-001', 'manufacturer' => 'Cipla Ltd', 'purchase_price' => 12.50, 'selling_price' => 20.00,
        'quantity' => 120, 'reorder_level' => 20, 'manufacturing_date' => '2025-01-10', 'expiry_date' => '2027-01-10',
        'description' => 'Effective for fever and general body aches.'
    ];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $generic_name = trim($_POST['generic_name'] ?? '');
    $category_id = !empty($_POST['category_id']) ? $_POST['category_id'] : null;
    $supplier_id = !empty($_POST['supplier_id']) ? $_POST['supplier_id'] : null;
    $batch_number = trim($_POST['batch_number'] ?? '');
    $manufacturer = trim($_POST['manufacturer'] ?? '');
    $purchase_price = floatval($_POST['purchase_price'] ?? 0);
    $selling_price = floatval($_POST['selling_price'] ?? 0);
    $quantity = intval($_POST['quantity'] ?? 0);
    $reorder_level = intval($_POST['reorder_level'] ?? 10);
    $manufacturing_date = !empty($_POST['manufacturing_date']) ? $_POST['manufacturing_date'] : null;
    $expiry_date = $_POST['expiry_date'] ?? '';
    $description = trim($_POST['description'] ?? '');

    if ($pdo && $id > 0) {
        try {
            $sql = "UPDATE medicines SET name = ?, generic_name = ?, category_id = ?, batch_number = ?, manufacturer = ?, supplier_id = ?, purchase_price = ?, selling_price = ?, quantity = ?, reorder_level = ?, manufacturing_date = ?, expiry_date = ?, description = ? WHERE id = ?";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$name, $generic_name, $category_id, $batch_number, $manufacturer, $supplier_id, $purchase_price, $selling_price, $quantity, $reorder_level, $manufacturing_date, $expiry_date, $description, $id]);

            header('Location: index.php?success=' . urlencode('Medicine record updated successfully!'));
            exit;
        } catch (\PDOException $e) {
            $error_msg = $e->getMessage();
        }
    } else {
        header('Location: index.php?success=' . urlencode('Medicine record updated successfully (Demo)!'));
        exit;
    }
}

include __DIR__ . '/../includes/header.php';
?>

<div style="margin-bottom: 24px;">
  <a href="index.php" style="color: var(--text-secondary); text-decoration: none; font-size: 0.9rem;">&larr; Back to Inventory</a>
  <h1 style="font-size: 1.6rem; font-weight: 700; margin-top: 8px;">Edit Medicine #<?= $medicine['id'] ?></h1>
</div>

<?php if ($error_msg): ?>
  <div class="alert alert-danger">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <span><?= htmlspecialchars($error_msg) ?></span>
  </div>
<?php endif; ?>

<div class="dashboard-card" style="max-width: 900px;">
  <form action="edit.php?id=<?= $medicine['id'] ?>" method="POST">
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Medicine Name *</label>
        <input type="text" name="name" class="form-control" value="<?= htmlspecialchars($medicine['name']) ?>" required>
      </div>

      <div class="form-group">
        <label class="form-label">Generic Name</label>
        <input type="text" name="generic_name" class="form-control" value="<?= htmlspecialchars($medicine['generic_name'] ?? '') ?>">
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Batch Number *</label>
        <input type="text" name="batch_number" class="form-control" value="<?= htmlspecialchars($medicine['batch_number']) ?>" required>
      </div>

      <div class="form-group">
        <label class="form-label">Manufacturer *</label>
        <input type="text" name="manufacturer" class="form-control" value="<?= htmlspecialchars($medicine['manufacturer']) ?>" required>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Purchase Price (&#8377;)</label>
        <input type="number" step="0.01" name="purchase_price" class="form-control" value="<?= $medicine['purchase_price'] ?>" required>
      </div>

      <div class="form-group">
        <label class="form-label">Selling Price (&#8377;)</label>
        <input type="number" step="0.01" name="selling_price" class="form-control" value="<?= $medicine['selling_price'] ?>" required>
      </div>

      <div class="form-group">
        <label class="form-label">Quantity *</label>
        <input type="number" name="quantity" class="form-control" value="<?= $medicine['quantity'] ?>" required>
      </div>

      <div class="form-group">
        <label class="form-label">Reorder Alert Level</label>
        <input type="number" name="reorder_level" class="form-control" value="<?= $medicine['reorder_level'] ?>">
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Manufacturing Date</label>
        <input type="date" name="manufacturing_date" class="form-control" value="<?= $medicine['manufacturing_date'] ?>">
      </div>

      <div class="form-group">
        <label class="form-label">Expiry Date *</label>
        <input type="date" name="expiry_date" class="form-control" value="<?= $medicine['expiry_date'] ?>" required>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Description / Storage Notes</label>
      <textarea name="description" class="form-control"><?= htmlspecialchars($medicine['description'] ?? '') ?></textarea>
    </div>

    <div style="display: flex; gap: 12px; margin-top: 16px;">
      <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> Update Changes</button>
      <a href="index.php" class="btn btn-secondary">Cancel</a>
    </div>
  </form>
</div>

<?php include __DIR__ . '/../includes/footer.php'; ?>
