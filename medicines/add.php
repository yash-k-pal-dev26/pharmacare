<?php
// medicines/add.php - Add New Medicine Form & Handler
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$page_title = 'Add New Medicine';
$error_msg = '';

// Fetch categories & suppliers for dropdown
$categories = [];
$suppliers = [];

if ($pdo) {
    try {
        $categories = $pdo->query("SELECT * FROM categories ORDER BY name ASC")->fetchAll();
        $suppliers = $pdo->query("SELECT * FROM suppliers ORDER BY name ASC")->fetchAll();
    } catch (\PDOException $e) {
        $error_msg = $e->getMessage();
    }
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

    if (empty($name) || empty($batch_number) || empty($manufacturer) || empty($expiry_date)) {
        $error_msg = 'Please fill in all mandatory fields (Name, Batch No, Manufacturer, Expiry Date).';
    } else {
        if ($pdo) {
            try {
                $sql = "INSERT INTO medicines (name, generic_name, category_id, batch_number, manufacturer, supplier_id, purchase_price, selling_price, quantity, reorder_level, manufacturing_date, expiry_date, description)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                $stmt = $pdo->prepare($sql);
                $stmt->execute([$name, $generic_name, $category_id, $batch_number, $manufacturer, $supplier_id, $purchase_price, $selling_price, $quantity, $reorder_level, $manufacturing_date, $expiry_date, $description]);

                header('Location: index.php?success=' . urlencode('Medicine added successfully to inventory!'));
                exit;
            } catch (\PDOException $e) {
                $error_msg = 'Database insertion error: ' . $e->getMessage();
            }
        } else {
            // Demo success redirect if database connection is pending
            header('Location: index.php?success=' . urlencode('Medicine added successfully (Demo mode)!'));
            exit;
        }
    }
}

include __DIR__ . '/../includes/header.php';
?>

<div style="margin-bottom: 24px;">
  <a href="index.php" style="color: var(--text-secondary); text-decoration: none; font-size: 0.9rem;">&larr; Back to Inventory</a>
  <h1 style="font-size: 1.6rem; font-weight: 700; margin-top: 8px;">Add New Medicine</h1>
</div>

<?php if ($error_msg): ?>
  <div class="alert alert-danger">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <span><?= htmlspecialchars($error_msg) ?></span>
  </div>
<?php endif; ?>

<div class="dashboard-card" style="max-width: 900px;">
  <form action="add.php" method="POST">
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Medicine Name *</label>
        <input type="text" name="name" class="form-control" placeholder="e.g. Paracetamol 500mg" required>
      </div>

      <div class="form-group">
        <label class="form-label">Generic Name</label>
        <input type="text" name="generic_name" class="form-control" placeholder="e.g. Acetaminophen">
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Category</label>
        <select name="category_id" class="form-control">
          <option value="">-- Select Category --</option>
          <?php foreach ($categories as $cat): ?>
            <option value="<?= $cat['id'] ?>"><?= htmlspecialchars($cat['name']) ?></option>
          <?php endforeach; ?>
          <?php if (empty($categories)): ?>
            <option value="1">Analgesic / Pain Relief</option>
            <option value="2">Antibiotics</option>
            <option value="3">Antihistamine / Allergy</option>
          <?php endif; ?>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Supplier</label>
        <select name="supplier_id" class="form-control">
          <option value="">-- Select Supplier --</option>
          <?php foreach ($suppliers as $sup): ?>
            <option value="<?= $sup['id'] ?>"><?= htmlspecialchars($sup['name']) ?> (<?= htmlspecialchars($sup['company']) ?>)</option>
          <?php endforeach; ?>
          <?php if (empty($suppliers)): ?>
            <option value="1">Rajesh Pharma Supplies</option>
            <option value="2">MediWorld Traders</option>
          <?php endif; ?>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Batch Number *</label>
        <input type="text" name="batch_number" class="form-control" placeholder="e.g. BATCH-2026-009" required>
      </div>

      <div class="form-group">
        <label class="form-label">Manufacturer *</label>
        <input type="text" name="manufacturer" class="form-control" placeholder="e.g. Cipla Ltd" required>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Purchase Price (&#8377;)</label>
        <input type="number" step="0.01" name="purchase_price" class="form-control" placeholder="0.00" required>
      </div>

      <div class="form-group">
        <label class="form-label">Selling Price (&#8377;)</label>
        <input type="number" step="0.01" name="selling_price" class="form-control" placeholder="0.00" required>
      </div>

      <div class="form-group">
        <label class="form-label">Quantity *</label>
        <input type="number" name="quantity" class="form-control" placeholder="0" required>
      </div>

      <div class="form-group">
        <label class="form-label">Reorder Alert Level</label>
        <input type="number" name="reorder_level" class="form-control" value="10">
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Manufacturing Date</label>
        <input type="date" name="manufacturing_date" class="form-control">
      </div>

      <div class="form-group">
        <label class="form-label">Expiry Date *</label>
        <input type="date" name="expiry_date" class="form-control" required>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Description / Storage Notes</label>
      <textarea name="description" class="form-control" placeholder="Enter medicine notes, dosage guidance, or storage instructions..."></textarea>
    </div>

    <div style="display: flex; gap: 12px; margin-top: 16px;">
      <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> Save Medicine Record</button>
      <a href="index.php" class="btn btn-secondary">Cancel</a>
    </div>
  </form>
</div>

<?php include __DIR__ . '/../includes/footer.php'; ?>
