<?php
// prescriptions/index.php - Prescription Records Management
$base_url = '../';
require_once __DIR__ . '/../includes/auth.php';
check_auth();

$page_title = 'Prescription Records';
include __DIR__ . '/../includes/header.php';

$prescriptions = [];
if ($pdo) {
    try {
        $prescriptions = $pdo->query("SELECT * FROM prescriptions ORDER BY date DESC")->fetchAll();
    } catch (\PDOException $e) {
        $error = $e->getMessage();
    }
} else {
    $prescriptions = [
        ['id' => 1, 'prescription_number' => 'RX-2026-001', 'patient_name' => 'Rahul Sharma', 'doctor_name' => 'Dr. A. K. Gupta (MD)', 'date' => '2026-09-02', 'notes' => 'Paracetamol 500mg (BD x 3 days), Cetirizine 10mg (HS x 5 days)']
    ];
}
?>

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
  <div>
    <h1 style="font-size: 1.6rem; font-weight: 700;">Prescription Records</h1>
    <p style="color: var(--text-secondary); font-size: 0.9rem;">Record doctor prescriptions for patient medicine fulfillment.</p>
  </div>
  <a href="add.php" class="btn btn-primary">
    <i class="fa-solid fa-file-circle-plus"></i> Add Prescription
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
          <th>Rx ID</th>
          <th>Patient Name</th>
          <th>Doctor Name</th>
          <th>Prescription Date</th>
          <th>Dosage Instructions & Notes</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($prescriptions as $rx): ?>
          <tr>
            <td><strong style="color: var(--primary-color);"><?= htmlspecialchars($rx['prescription_number']) ?></strong></td>
            <td><strong><?= htmlspecialchars($rx['patient_name']) ?></strong></td>
            <td><?= htmlspecialchars($rx['doctor_name']) ?></td>
            <td><?= date('d M Y', strtotime($rx['date'])) ?></td>
            <td><?= htmlspecialchars($rx['notes'] ?? 'No special notes') ?></td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</div>

<?php include __DIR__ . '/../includes/footer.php'; ?>
