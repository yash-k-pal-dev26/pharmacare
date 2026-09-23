<?php
// sales/invoice.php - Printable Customer Invoice
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$sale_id = intval($_GET['id'] ?? 1);
$page_title = 'Customer Invoice';

$sale = null;
$items = [];

if ($pdo && $sale_id > 0) {
    try {
        $stmt = $pdo->prepare("SELECT s.*, c.name as customer_name, c.phone as customer_phone, c.address as customer_address, u.name as cashier_name FROM sales s LEFT JOIN customers c ON s.customer_id = c.id LEFT JOIN users u ON s.user_id = u.id WHERE s.id = ?");
        $stmt->execute([$sale_id]);
        $sale = $stmt->fetch();

        if ($sale) {
            $stmtItems = $pdo->prepare("SELECT si.*, m.name as medicine_name FROM sale_items si LEFT JOIN medicines m ON si.medicine_id = m.id WHERE si.sale_id = ?");
            $stmtItems->execute([$sale_id]);
            $items = $stmtItems->fetchAll();
        }
    } catch (\PDOException $e) {
        $error = $e->getMessage();
    }
}

if (!$sale) {
    if (isset($_GET['demo']) && isset($_SESSION['demo_sale'])) {
        $ds = $_SESSION['demo_sale'];
        $demo_customers = [1 => 'Rahul Sharma', 2 => 'Priya Verma'];
        $demo_medicines = [1 => 'Paracetamol 500mg', 2 => 'Amoxicillin 250mg', 3 => 'Cetirizine 10mg', 4 => 'Azithromycin 500mg', 5 => 'Ibuprofen 400mg'];

        $customer_name = !empty($ds['customer_id']) ? ($demo_customers[$ds['customer_id']] ?? 'Walk-in Customer') : 'Walk-in Customer';

        $sale = [
            'invoice_number' => $ds['invoice_number'],
            'customer_name'  => $customer_name,
            'customer_phone' => '',
            'cashier_name'   => 'Yash Kumar Pal (Demo)',
            'sale_date'      => $ds['sale_date'],
            'payment_type'   => $ds['payment_type'],
            'subtotal'       => $ds['subtotal'],
            'discount'       => $ds['discount'],
            'total_amount'   => $ds['total_amount']
        ];
        
        $items = [];
        foreach ($ds['items'] as $item) {
            $items[] = [
                'medicine_name' => $demo_medicines[$item['medicine_id']] ?? 'Unknown Medicine',
                'quantity'      => $item['quantity'],
                'unit_price'    => $item['unit_price'],
                'total_price'   => $item['total_price']
            ];
        }
    } else {
        // Fallback demo invoice if accessed directly without session data
        $sale = [
            'invoice_number' => 'INV-000124',
            'customer_name' => 'Rahul Sharma',
            'customer_phone' => '+91 99887 76655',
            'cashier_name' => 'Yash Kumar Pal',
            'sale_date' => date('Y-m-d H:i:s'),
            'payment_type' => 'Cash',
            'subtotal' => 75.00,
            'discount' => 5.00,
            'total_amount' => 70.00
        ];
        $items = [
            ['medicine_name' => 'Paracetamol 500mg', 'quantity' => 2, 'unit_price' => 20.00, 'total_price' => 40.00],
            ['medicine_name' => 'Cetirizine 10mg', 'quantity' => 1, 'unit_price' => 35.00, 'total_price' => 35.00]
        ];
    }
}

include __DIR__ . '/../includes/header.php';
?>

<style>
  @media print {
    body * { visibility: hidden; }
    .invoice-card, .invoice-card * { visibility: visible; }
    .invoice-card { position: absolute; left: 0; top: 0; width: 100%; box-shadow: none !important; border: none !important; }
    .non-printable { display: none !important; }
  }
</style>

<div class="non-printable" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
  <div>
    <h1 style="font-size: 1.6rem; font-weight: 700;">Sales Invoice</h1>
    <p style="color: var(--text-secondary); font-size: 0.9rem;">Official tax invoice receipt generated for customer transaction.</p>
  </div>
  <div style="display: flex; gap: 10px;">
    <button onclick="window.print();" class="btn btn-primary"><i class="fa-solid fa-print"></i> Print Invoice</button>
    <a href="new-sale.php" class="btn btn-secondary"><i class="fa-solid fa-cart-plus"></i> New Sale</a>
  </div>
</div>

<div class="dashboard-card invoice-card" style="max-width: 750px; margin: 0 auto; padding: 36px;">
  <div style="display: flex; justify-content: space-between; border-bottom: 2px solid var(--primary-color); padding-bottom: 18px; margin-bottom: 24px;">
    <div>
      <div style="font-size: 1.6rem; font-weight: 800; color: var(--primary-color); display: flex; align-items: center; gap: 10px;">
        <i class="fa-solid fa-prescription-bottle-medical"></i> PHARMACARE
      </div>
      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
        Pharmacy Management & Healthcare Solutions<br>
        GSTIN: 07AAAAA0000A1Z5 | License: DL-10293/PH
      </p>
    </div>
    <div style="text-align: right;">
      <h2 style="font-size: 1.25rem; color: var(--text-primary);">INVOICE</h2>
      <p style="font-size: 0.9rem; font-weight: bold; color: var(--primary-color);"><?= htmlspecialchars($sale['invoice_number']) ?></p>
      <p style="font-size: 0.825rem; color: var(--text-secondary);"><?= date('d/m/Y h:i A', strtotime($sale['sale_date'])) ?></p>
    </div>
  </div>

  <div style="display: flex; justify-content: space-between; margin-bottom: 24px; font-size: 0.9rem;">
    <div>
      <strong style="color: var(--text-secondary); font-size: 0.8rem; text-transform: uppercase;">Customer Information:</strong>
      <p style="font-weight: 600; font-size: 1rem; margin-top: 2px;"><?= htmlspecialchars($sale['customer_name'] ?? 'Walk-in Customer') ?></p>
      <?php if (!empty($sale['customer_phone'])): ?>
        <p style="color: var(--text-secondary);">Phone: <?= htmlspecialchars($sale['customer_phone']) ?></p>
      <?php endif; ?>
    </div>
    <div style="text-align: right;">
      <strong style="color: var(--text-secondary); font-size: 0.8rem; text-transform: uppercase;">Payment Details:</strong>
      <p style="margin-top: 2px;"><strong>Method:</strong> <?= htmlspecialchars($sale['payment_type']) ?></p>
      <p style="color: var(--text-secondary);"><strong>Billed By:</strong> <?= htmlspecialchars($sale['cashier_name'] ?? 'Staff') ?></p>
    </div>
  </div>

  <div class="table-responsive" style="margin-bottom: 24px;">
    <table class="custom-table" style="border: 1px solid var(--border-color);">
      <thead>
        <tr>
          <th>Medicine Item</th>
          <th style="text-align: center;">Qty</th>
          <th style="text-align: right;">Unit Price</th>
          <th style="text-align: right;">Amount</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($items as $item): ?>
          <tr>
            <td><strong><?= htmlspecialchars($item['medicine_name']) ?></strong></td>
            <td style="text-align: center;"><?= $item['quantity'] ?></td>
            <td style="text-align: right;">&#8377;<?= number_format($item['unit_price'], 2) ?></td>
            <td style="text-align: right;">&#8377;<?= number_format($item['total_price'], 2) ?></td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>

  <div style="display: flex; justify-content: flex-end;">
    <div style="width: 260px; font-size: 0.95rem;">
      <div style="display: flex; justify-content: space-between; padding: 6px 0;">
        <span>Subtotal:</span>
        <span>&#8377;<?= number_format($sale['subtotal'], 2) ?></span>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 6px 0; color: #dc2626;">
        <span>Discount:</span>
        <span>- &#8377;<?= number_format($sale['discount'], 2) ?></span>
      </div>
      <hr style="border: 0; border-top: 2px solid var(--border-color); margin: 8px 0;">
      <div style="display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: 800; color: var(--primary-color);">
        <span>TOTAL:</span>
        <span>&#8377;<?= number_format($sale['total_amount'], 2) ?></span>
      </div>
    </div>
  </div>

  <div style="margin-top: 40px; text-align: center; border-top: 1px dashed var(--border-color); padding-top: 16px; color: var(--text-secondary); font-size: 0.825rem;">
    <p>Thank you for choosing <strong>PharmaCare</strong>! Get well soon.</p>
    <p style="font-size: 0.75rem; margin-top: 4px;">* Prescribed medicines sold under licensed pharmacist supervision.</p>
  </div>
</div>

<?php include __DIR__ . '/../includes/footer.php'; ?>
