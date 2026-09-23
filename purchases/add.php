<?php
// purchases/add.php - Record New Stock Purchase with Inventory Increment
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$page_title = 'Add Purchase Order';
$error_msg = '';

$suppliers = [];
$medicines = [];

if ($pdo) {
    try {
        $suppliers = $pdo->query("SELECT * FROM suppliers ORDER BY name ASC")->fetchAll();
        $medicines = $pdo->query("SELECT * FROM medicines ORDER BY name ASC")->fetchAll();
    } catch (\PDOException $e) {
        $error_msg = $e->getMessage();
    }
} else {
    $suppliers = [['id' => 1, 'name' => 'Rajesh Pharma Supplies', 'company' => 'Apex Healthcare']];
    $medicines = [['id' => 1, 'name' => 'Paracetamol 500mg', 'purchase_price' => 12.50, 'quantity' => 120]];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $supplier_id = !empty($_POST['supplier_id']) ? $_POST['supplier_id'] : null;
    $medicine_id = $_POST['medicine_id'] ?? null;
    $quantity = intval($_POST['quantity'] ?? 0);
    $purchase_price = floatval($_POST['purchase_price'] ?? 0);

    if (empty($supplier_id) || empty($medicine_id) || $quantity <= 0) {
        $error_msg = 'Please select a supplier, medicine, and enter valid quantity.';
    } else {
        $purchase_number = 'PUR-' . date('Y') . '-' . rand(1000, 9999);
        $total_amount = $purchase_price * $quantity;

        if ($pdo) {
            try {
                $pdo->beginTransaction();

                // 1. Insert Purchase Header
                $stmtP = $pdo->prepare("INSERT INTO purchases (purchase_number, supplier_id, total_amount) VALUES (?, ?, ?)");
                $stmtP->execute([$purchase_number, $supplier_id, $total_amount]);
                $purchase_id = $pdo->lastInsertId();

                // 2. Insert Purchase Item
                $stmtItem = $pdo->prepare("INSERT INTO purchase_items (purchase_id, medicine_id, quantity, purchase_price) VALUES (?, ?, ?, ?)");
                $stmtItem->execute([$purchase_id, $medicine_id, $quantity, $purchase_price]);

                // 3. AUTOMATIC STOCK INCREMENT
                $stmtStock = $pdo->prepare("UPDATE medicines SET quantity = quantity + ? WHERE id = ?");
                $stmtStock->execute([$quantity, $medicine_id]);

                $pdo->commit();

                header('Location: index.php?success=' . urlencode('Stock purchase recorded and medicine inventory increased!'));
                exit;
            } catch (\PDOException $e) {
                if ($pdo->inTransaction()) $pdo->rollBack();
                $error_msg = 'Error recording purchase: ' . $e->getMessage();
            }
        } else {
            header('Location: index.php?success=' . urlencode('Stock purchase recorded (Demo mode)!'));
            exit;
        }
    }
}

include __DIR__ . '/../includes/header.php';
?>

<div style="margin-bottom: 24px;">
  <a href="index.php" style="color: var(--text-secondary); text-decoration: none; font-size: 0.9rem;">&larr; Back to Purchases</a>
  <h1 style="font-size: 1.6rem; font-weight: 700; margin-top: 8px;">Record Stock Purchase</h1>
</div>

<?php if ($error_msg): ?>
  <div class="alert alert-danger">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <span><?= htmlspecialchars($error_msg) ?></span>
  </div>
<?php endif; ?>

<div class="dashboard-card" style="max-width: 800px;">
  <form action="add.php" method="POST">
    <div class="form-group">
      <label class="form-label">Supplier Distributor *</label>
      <select name="supplier_id" class="form-control" required>
        <option value="">-- Select Supplier --</option>
        <?php foreach ($suppliers as $sup): ?>
          <option value="<?= $sup['id'] ?>"><?= htmlspecialchars($sup['name']) ?> (<?= htmlspecialchars($sup['company']) ?>)</option>
        <?php endforeach; ?>
      </select>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Medicine Item *</label>
        <select name="medicine_id" id="medSelect" class="form-control" required>
          <option value="">-- Select Medicine --</option>
          <?php foreach ($medicines as $m): ?>
            <option value="<?= $m['id'] ?>" data-price="<?= $m['purchase_price'] ?>"><?= htmlspecialchars($m['name']) ?> (Current Stock: <?= $m['quantity'] ?>)</option>
          <?php endforeach; ?>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Purchased Quantity *</label>
        <input type="number" name="quantity" class="form-control" placeholder="e.g. 50" min="1" required>
      </div>

      <div class="form-group">
        <label class="form-label">Purchase Price per unit (&#8377;) *</label>
        <input type="number" step="0.01" name="purchase_price" id="purPrice" class="form-control" placeholder="0.00" required>
      </div>
    </div>

    <div style="display: flex; gap: 12px; margin-top: 16px;">
      <button type="submit" class="btn btn-primary"><i class="fa-solid fa-cart-plus"></i> Record Purchase & Update Stock</button>
      <a href="index.php" class="btn btn-secondary">Cancel</a>
    </div>
  </form>
</div>

<script>
document.getElementById('medSelect').addEventListener('change', (e) => {
  const selected = e.target.options[e.target.selectedIndex];
  const price = selected.getAttribute('data-price');
  if (price) {
    document.getElementById('purPrice').value = price;
  }
});
</script>

<?php include __DIR__ . '/../includes/footer.php'; ?>
