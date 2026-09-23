<?php
// prescriptions/add.php - Add Prescription Record Form
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$page_title = 'Add Prescription Record';
$error_msg = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $patient_name = trim($_POST['patient_name'] ?? '');
    $doctor_name = trim($_POST['doctor_name'] ?? '');
    $date = $_POST['date'] ?? date('Y-m-d');
    $notes = trim($_POST['notes'] ?? '');

    if (empty($patient_name) || empty($doctor_name)) {
        $error_msg = 'Please provide both Patient Name and Doctor Name.';
    } else {
        $rx_num = 'RX-' . date('Y') . '-' . rand(1000, 9999);
        if ($pdo) {
            try {
                $stmt = $pdo->prepare("INSERT INTO prescriptions (prescription_number, patient_name, doctor_name, date, notes) VALUES (?, ?, ?, ?, ?)");
                $stmt->execute([$rx_num, $patient_name, $doctor_name, $date, $notes]);

                header('Location: index.php?success=' . urlencode('Prescription recorded successfully!'));
                exit;
            } catch (\PDOException $e) {
                $error_msg = $e->getMessage();
            }
        } else {
            header('Location: index.php?success=' . urlencode('Prescription recorded (Demo)!'));
            exit;
        }
    }
}

include __DIR__ . '/../includes/header.php';
?>

<div style="margin-bottom: 24px;">
  <a href="index.php" style="color: var(--text-secondary); text-decoration: none; font-size: 0.9rem;">&larr; Back to Prescriptions</a>
  <h1 style="font-size: 1.6rem; font-weight: 700; margin-top: 8px;">Add Doctor Prescription</h1>
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
        <label class="form-label">Patient Name *</label>
        <input type="text" name="patient_name" class="form-control" placeholder="e.g. Rahul Sharma" required>
      </div>

      <div class="form-group">
        <label class="form-label">Prescribing Doctor Name *</label>
        <input type="text" name="doctor_name" class="form-control" placeholder="e.g. Dr. A. K. Gupta (MD)" required>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Prescription Date *</label>
      <input type="date" name="date" class="form-control" value="<?= date('Y-m-d') ?>" required>
    </div>

    <div class="form-group">
      <label class="form-label">Prescribed Medicines & Dosage Instructions</label>
      <textarea name="notes" class="form-control" placeholder="Enter prescribed medicines, dosages, frequency (e.g. 1-0-1), and doctor instructions..."></textarea>
    </div>

    <div style="display: flex; gap: 12px; margin-top: 16px;">
      <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> Save Prescription</button>
      <a href="index.php" class="btn btn-secondary">Cancel</a>
    </div>
  </form>
</div>

<?php include __DIR__ . '/../includes/footer.php'; ?>
