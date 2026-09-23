/* js/main.js - Global JavaScript utilities for PharmaCare */

document.addEventListener('DOMContentLoaded', () => {
  // Dark Mode Toggle
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('pharmacare_theme') || 'light';
  
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggle) themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('pharmacare_theme', 'light');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('pharmacare_theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
      }
    });
  }

  // Profile Dropdown Toggle
  const userProfile = document.getElementById('userProfile');
  const profileDropdown = document.getElementById('profileDropdown');

  if (userProfile && profileDropdown) {
    userProfile.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      profileDropdown.classList.remove('active');
    });
  }

  // Mobile Navigation Toggle
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileNavToggle && navLinks) {
    mobileNavToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Live Table Search Filter (Client-side)
  const globalSearchInput = document.getElementById('globalSearchInput');
  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const tableRows = document.querySelectorAll('.custom-table tbody tr');

      tableRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }
});
