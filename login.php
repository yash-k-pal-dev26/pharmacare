<?php
// login.php - User Login & Authentication Entry Point
require_once __DIR__ . '/includes/auth.php';
require_once __DIR__ . '/includes/db.php';

// Redirect if already logged in
if (isset($_SESSION['user_id'])) {
    header('Location: dashboard.php');
    exit;
}

$error_msg = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if (empty($email) || empty($password)) {
        $error_msg = 'Please enter both email and password.';
    } else {
        if ($pdo) {
            try {
                $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
                $stmt->execute([$email]);
                $user = $stmt->fetch();

                if ($user && password_verify($password, $user['password'])) {
                    $_SESSION['user_id'] = $user['id'];
                    $_SESSION['user_name'] = $user['name'];
                    $_SESSION['user_email'] = $user['email'];
                    $_SESSION['user_role'] = $user['role'];
                    header('Location: dashboard.php');
                    exit;
                } else {
                    $error_msg = 'Invalid email or password credentials.';
                }
            } catch (\PDOException $e) {
                $error_msg = 'Database error: ' . $e->getMessage();
            }
        } else {
            // Demo Fallback Login if MySQL is not currently running
            if ($email === 'admin@pharmacare.com' && $password === 'admin123') {
                $_SESSION['user_id'] = 1;
                $_SESSION['user_name'] = 'Yash Kumar Pal';
                $_SESSION['user_email'] = 'admin@pharmacare.com';
                $_SESSION['user_role'] = 'Admin';
                header('Location: dashboard.php');
                exit;
            } else {
                $error_msg = 'Invalid email or password. Demo credentials: admin@pharmacare.com / admin123';
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - PharmaCare Management System</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/forms.css">
  <style>
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0f766e 0%, #0f172a 100%);
      min-height: 100vh;
      padding: 20px;
    }
    .login-card {
      background: var(--card-bg);
      border-radius: var(--radius-lg);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
      width: 100%;
      max-width: 420px;
      padding: 36px 32px;
      border: 1px solid var(--border-color);
    }
    .login-brand {
      text-align: center;
      margin-bottom: 28px;
    }
    .login-brand i {
      font-size: 2.8rem;
      color: var(--primary-color);
      margin-bottom: 10px;
    }
    .login-brand h2 {
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--text-primary);
    }
    .login-brand p {
      font-size: 0.9rem;
      color: var(--text-secondary);
    }
    .demo-hint {
      background: var(--primary-light);
      border: 1px dashed var(--primary-color);
      color: var(--primary-color);
      font-size: 0.8rem;
      padding: 8px 12px;
      border-radius: 6px;
      margin-bottom: 16px;
    }
  </style>
</head>
<body>

  <div class="login-card">
    <div class="login-brand">
      <i class="fa-solid fa-prescription-bottle-medical"></i>
      <h2>PHARMACARE</h2>
      <p>Pharmacy Management System</p>
    </div>

    <?php if ($error_msg): ?>
      <div class="alert alert-danger">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span><?= htmlspecialchars($error_msg) ?></span>
      </div>
    <?php endif; ?>

    <div class="demo-hint">
      <i class="fa-solid fa-circle-info"></i> <strong>Demo Credentials:</strong><br>
      Email: <code>admin@pharmacare.com</code><br>
      Password: <code>admin123</code>
    </div>

    <form action="login.php" method="POST">
      <div class="form-group">
        <label class="form-label" for="email">Email Address</label>
        <input type="email" name="email" id="email" class="form-control" placeholder="admin@pharmacare.com" required value="admin@pharmacare.com">
      </div>

      <div class="form-group">
        <label class="form-label" for="password">Password</label>
        <input type="password" name="password" id="password" class="form-control" placeholder="••••••••" required value="admin123">
      </div>

      <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; padding: 12px; font-size: 1rem; margin-top: 10px;">
        <i class="fa-solid fa-right-to-bracket"></i> Login to System
      </button>
    </form>
  </div>

</body>
</html>
