/* js/notifications.js - Notification center popup handler */

document.addEventListener('DOMContentLoaded', () => {
  const notifBtn = document.getElementById('notifBtn');
  if (notifBtn) {
    notifBtn.addEventListener('click', () => {
      alert('🔔 Notifications Overview:\n- 3 Medicines low in stock\n- 2 Medicines expiring soon\n- Recent sale INV-000125 completed');
    });
  }
});
