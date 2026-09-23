<?php
// sales/new-sale.php - New Sale / POS Checkout System with Automatic Stock Deduction
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$page_title = 'New POS Sale';
$error_msg = '';
$user = get_logged_user();

$medicines = [];
$customers = [];

if ($pdo) {
    try {
        $medicines = $pdo->query("SELECT * FROM medicines WHERE quantity > 0 ORDER BY name ASC")->fetchAll();
        $customers = $pdo->query("SELECT * FROM customers ORDER BY name ASC")->fetchAll();
    } catch (\PDOException $e) {
        $error_msg = $e->getMessage();
    }
} else {
    $medicines = [
        ['id' => 1, 'name' => 'Paracetamol 500mg', 'selling_price' => 20.00, 'quantity' => 120],
        ['id' => 2, 'name' => 'Amoxicillin 250mg', 'selling_price' => 45.00, 'quantity' => 8],
        ['id' => 3, 'name' => 'Cetirizine 10mg', 'selling_price' => 35.00, 'quantity' => 150],
        ['id' => 4, 'name' => 'Azithromycin 500mg', 'selling_price' => 110.00, 'quantity' => 5],
        ['id' => 5, 'name' => 'Ibuprofen 400mg', 'selling_price' => 28.00, 'quantity' => 9]
    ];
    $customers = [
        ['id' => 1, 'name' => 'Rahul Sharma', 'phone' => '+91 99887 76655'],
        ['id' => 2, 'name' => 'Priya Verma', 'phone' => '+91 98112 23344']
    ];
}

// POS Form Submission Handler
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $customer_id = !empty($_POST['customer_id']) ? $_POST['customer_id'] : null;
    $payment_type = $_POST['payment_type'] ?? 'Cash';
    $selected_medicines = $_POST['medicine_ids'] ?? [];
    $quantities = $_POST['quantities'] ?? [];
    $discount = floatval($_POST['discount'] ?? 0);

    if (empty($selected_medicines)) {
        $error_msg = 'Please select at least one medicine item to generate invoice.';
    } else {
        $invoice_number = 'INV-' . rand(100000, 999999);
        $subtotal = 0;
        $items_to_insert = [];

        // Calculate totals and verify stock
        foreach ($selected_medicines as $index => $med_id) {
            $qty = intval($quantities[$index] ?? 1);
            if ($qty <= 0) continue;

            // Fetch price from list
            $unit_price = 0;
            foreach ($medicines as $m) {
                if ($m['id'] == $med_id) {
                    $unit_price = $m['selling_price'];
                    break;
                }
            }

            $line_total = $unit_price * $qty;
            $subtotal += $line_total;

            $items_to_insert[] = [
                'medicine_id' => $med_id,
                'quantity' => $qty,
                'unit_price' => $unit_price,
                'total_price' => $line_total
            ];
        }

        $total_amount = max(0, $subtotal - $discount);

        if ($pdo) {
            try {
                $pdo->beginTransaction();

                // 1. Insert Sales Header
                $stmtSales = $pdo->prepare("INSERT INTO sales (invoice_number, customer_id, user_id, subtotal, discount, total_amount, payment_type) VALUES (?, ?, ?, ?, ?, ?, ?)");
                $stmtSales->execute([$invoice_number, $customer_id, $user['id'], $subtotal, $discount, $total_amount, $payment_type]);
                $sale_id = $pdo->lastInsertId();

                // 2. Insert Sale Items & AUTOMATIC STOCK REDUCTION
                $stmtItem = $pdo->prepare("INSERT INTO sale_items (sale_id, medicine_id, quantity, unit_price, total_price) VALUES (?, ?, ?, ?, ?)");
                $stmtStock = $pdo->prepare("UPDATE medicines SET quantity = quantity - ? WHERE id = ?");

                foreach ($items_to_insert as $item) {
                    $stmtItem->execute([$sale_id, $item['medicine_id'], $item['quantity'], $item['unit_price'], $item['total_price']]);
                    
                    // Deduct stock in MySQL
                    $stmtStock->execute([$item['quantity'], $item['medicine_id']]);
                }

                $pdo->commit();

                header("Location: invoice.php?id=$sale_id&success=Sale+Completed");
                exit;
            } catch (\PDOException $e) {
                if ($pdo->inTransaction()) $pdo->rollBack();
                $error_msg = 'Transaction Error: ' . $e->getMessage();
            }
        } else {
            // Save demo sale in session so the invoice displays correct data instead of defaulting to Rahul
            $_SESSION['demo_sale'] = [
                'invoice_number' => $invoice_number,
                'customer_id' => $customer_id,
                'payment_type' => $payment_type,
                'subtotal' => $subtotal,
                'discount' => $discount,
                'total_amount' => $total_amount,
                'items' => $items_to_insert,
                'sale_date' => date('Y-m-d H:i:s')
            ];
            header("Location: invoice.php?demo=1&success=Sale+Completed+(Demo)");
            exit;
        }
    }
}

include __DIR__ . '/../includes/header.php';
?>

<div style="margin-bottom: 24px;">
  <h1 style="font-size: 1.6rem; font-weight: 700;">Point of Sale (POS) & Billing</h1>
  <p style="color: var(--text-secondary); font-size: 0.9rem;">Generate customer invoices with automatic stock updates.</p>
</div>

<?php if ($error_msg): ?>
  <div class="alert alert-danger">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <span><?= htmlspecialchars($error_msg) ?></span>
  </div>
<?php endif; ?>

<form action="new-sale.php" method="POST" id="posForm">
  <div class="dashboard-grid">
    <!-- Left Column: Add Items to Sale Cart -->
    <div>
      <div class="dashboard-card">
        <div class="card-title">
          <span><i class="fa-solid fa-pills" style="color: var(--primary-color);"></i> Select Medicines</span>
        </div>

        <div id="cartItemsContainer">
          <div class="cart-item-row form-row" style="align-items: center; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px dashed var(--border-color);">
            <div class="form-group" style="flex: 2;">
              <label class="form-label">Medicine Item</label>
              <select name="medicine_ids[]" class="form-control medicine-select" required>
                <option value="">-- Choose Medicine --</option>
                <?php foreach ($medicines as $med): ?>
                  <option value="<?= $med['id'] ?>" data-price="<?= $med['selling_price'] ?>" data-stock="<?= $med['quantity'] ?>">
                    <?= htmlspecialchars($med['name']) ?> (Stock: <?= $med['quantity'] ?>) - &#8377;<?= number_format($med['selling_price'], 2) ?>
                  </option>
                <?php endforeach; ?>
              </select>
            </div>

            <div class="form-group" style="flex: 1;">
              <label class="form-label">Quantity</label>
              <input type="number" name="quantities[]" class="form-control qty-input" value="1" min="1" required>
            </div>

            <div class="form-group" style="flex: 1;">
              <label class="form-label">Unit Price (&#8377;)</label>
              <input type="text" class="form-control price-input" value="0.00" readonly>
            </div>

            <div style="margin-top: 18px;">
              <button type="button" class="btn btn-danger remove-row-btn" style="padding: 10px;"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div>

        <button type="button" class="btn btn-secondary" id="addRowBtn" style="margin-top: 10px;">
          <i class="fa-solid fa-plus"></i> Add Another Item
        </button>
      </div>
    </div>

    <!-- Right Column: Checkout Summary -->
    <div>
      <div class="dashboard-card">
        <div class="card-title">
          <span><i class="fa-solid fa-receipt"></i> Bill Summary</span>
        </div>

        <div class="form-group">
          <label class="form-label">Customer</label>
          <select name="customer_id" class="form-control">
            <option value="">-- Walk-in Customer --</option>
            <?php foreach ($customers as $c): ?>
              <option value="<?= $c['id'] ?>"><?= htmlspecialchars($c['name']) ?> (<?= htmlspecialchars($c['phone']) ?>)</option>
            <?php endforeach; ?>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Payment Method</label>
          <select name="payment_type" class="form-control">
            <option value="Cash">Cash</option>
            <option value="UPI">UPI / QR Code</option>
            <option value="Card">Credit / Debit Card</option>
            <option value="NetBanking">Net Banking</option>
          </select>
        </div>

        <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 16px 0;">

        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span>Subtotal:</span>
          <strong id="posSubtotal">&#8377;0.00</strong>
        </div>

        <div class="form-group" style="margin-bottom: 8px;">
          <label class="form-label">Discount Amount (&#8377;)</label>
          <input type="number" step="0.01" name="discount" id="posDiscount" class="form-control" value="0.00">
        </div>

        <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 16px 0;">

        <div style="display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: bold; color: var(--primary-color); margin-bottom: 20px;">
          <span>Grand Total:</span>
          <span id="posGrandTotal">&#8377;0.00</span>
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; padding: 12px; font-size: 1rem;">
          <i class="fa-solid fa-print"></i> Process Sale & Print Invoice
        </button>
      </div>
    </div>
  </div>
</form>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('cartItemsContainer');
  const addRowBtn = document.getElementById('addRowBtn');

  function calculateTotals() {
    let subtotal = 0;
    const rows = container.querySelectorAll('.cart-item-row');

    rows.forEach(row => {
      const select = row.querySelector('.medicine-select');
      const qtyInput = row.querySelector('.qty-input');
      const priceInput = row.querySelector('.price-input');

      const selectedOpt = select.options[select.selectedIndex];
      const price = parseFloat(selectedOpt?.getAttribute('data-price') || 0);
      const qty = parseInt(qtyInput.value || 0);

      priceInput.value = price.toFixed(2);
      subtotal += (price * qty);
    });

    const discount = parseFloat(document.getElementById('posDiscount').value || 0);
    const grandTotal = Math.max(0, subtotal - discount);

    document.getElementById('posSubtotal').innerHTML = '&#8377;' + subtotal.toFixed(2);
    document.getElementById('posGrandTotal').innerHTML = '&#8377;' + grandTotal.toFixed(2);
  }

  container.addEventListener('change', calculateTotals);
  container.addEventListener('input', calculateTotals);
  document.getElementById('posDiscount').addEventListener('input', calculateTotals);

  container.addEventListener('click', (e) => {
    if (e.target.closest('.remove-row-btn')) {
      const rows = container.querySelectorAll('.cart-item-row');
      if (rows.length > 1) {
        e.target.closest('.cart-item-row').remove();
        calculateTotals();
      } else {
        alert('Sale bill must contain at least one item.');
      }
    }
  });

  addRowBtn.addEventListener('click', () => {
    const firstRow = container.querySelector('.cart-item-row');
    const newRow = firstRow.cloneNode(true);
    newRow.querySelector('.medicine-select').value = '';
    newRow.querySelector('.qty-input').value = '1';
    newRow.querySelector('.price-input').value = '0.00';
    container.appendChild(newRow);
  });
});
</script>

<?php include __DIR__ . '/../includes/footer.php'; ?>
