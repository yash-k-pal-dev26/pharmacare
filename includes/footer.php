<?php
// includes/footer.php - Global Footer & JavaScript Inclusions
$base_url = $base_url ?? '';
?>
  </main> <!-- End app-container -->

  <footer class="main-footer">
    <p>&copy; <?= date('Y') ?> <strong>PharmaCare Pharmacy Management System</strong>. Designed & Developed for CA1 Evaluation.</p>
  </footer>

  <!-- Core JavaScript Scripts -->
  <script src="<?= $base_url ?>js/main.js"></script>
  <script src="<?= $base_url ?>js/notifications.js"></script>
</body>
</html>
