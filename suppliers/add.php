<?php
// suppliers/add.php - Add New Supplier Form
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$page_title = 'Add New Supplier';
$error_msg = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $company = trim($_POST['company'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $address = trim($_POST['address'] ?? '');

    if (empty($name) || empty($company) || empty($phone)) {
        $error_msg = 'Please fill in Name, Company, and Phone number.';
    } else {
        if ($pdo) {
            try {
                $stmt = $pdo->prepare("INSERT INTO suppliers (name, company, phone, email, address) VALUES (?, ?, ?, ?, ?)");
                $stmt->execute([$name, $company, $phone, $email, $address]);

                header('Location: index.php?success=' . urlencode('Supplier added successfully!'));
                exit;
            } catch (\PDOException $e) {
                $error_msg = $e->getMessage();
            }
        } else {
            header('Location: index.php?success=' . urlencode('Supplier added (Demo mode)!'));
            exit;
        }
    }
}

include __DIR__ . '/../includes/header.php';
?>

<div style="margin-bottom: 24px;">
  <a href="index.php" style="color: var(--text-secondary); text-decoration: none; font-size: 0.9rem;">&larr; Back to Suppliers</a>
  <h1 style="font-size: 1.6rem; font-weight: 700; margin-top: 8px;">Add New Supplier</h1>
</div>

<?php if ($error_msg): ?>
  <div class="alert alert-danger">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <span><?= htmlspecialchars($error_msg) ?></span>
  </div>
<?php endif; ?>

<div class="dashboard-card" style="max-width: 800px;">
  <form action="add.php" method="POST">
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Contact Person Name *</label>
        <input type="text" name="name" class="form-control" placeholder="e.g. Rajesh Sharma" required>
      </div>

      <div class="form-group">
        <label class="form-label">Company Name *</label>
        <input type="text" name="company" class="form-control" placeholder="e.g. Apex Healthcare Pvt Ltd" required>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Phone Number *</label>
        <input type="text" name="phone" class="form-control" placeholder="e.g. +91 98765 43210" required>
      </div>

      <div class="form-group">
        <label class="form-label">Email Address</label>
        <input type="email" name="email" class="form-control" placeholder="sales@company.com">
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Office Address</label>
      <textarea name="address" class="form-control" placeholder="Street address, city, state..."></textarea>
    </div>

    <div style="display: flex; gap: 12px; margin-top: 16px;">
      <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> Save Supplier</button>
      <a href="index.php" class="btn btn-secondary">Cancel</a>
    </div>
  </form>
</div>

<?php include __DIR__ . '/../includes/footer.php'; ?>
