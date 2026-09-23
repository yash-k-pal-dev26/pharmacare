# 💊 PharmaCare — Pharmacy Management System

A complete **Pharmacy Management System** built with **PHP, MySQL (PDO), HTML5, CSS3 and vanilla JavaScript**, designed to run on the **XAMPP** stack. It covers the day-to-day operations of a pharmacy — medicine inventory, POS sales, purchases, suppliers, customers, prescriptions, and reports — with a session-secured dashboard, live alerts, and a dark-mode UI.

---

## 📑 Table of Contents

- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [How It Works](#-how-it-works)
- [Requirements](#-requirements)
- [How to Run (XAMPP)](#-how-to-run-xampp)
- [Demo Credentials](#-demo-credentials)
- [Project Structure](#-project-structure)
- [Database Schema](#-database-schema)
- [Troubleshooting](#-troubleshooting)

---

## ✨ Key Features

| Module | What it does |
|---|---|
| 🔐 **Authentication** | Session-based login, role support (Admin / Pharmacist / Staff), route guards on every protected page |
| 📊 **Dashboard** | Live KPIs — total medicines, low-stock count, medicines expiring within 30 days, today's sales; low-stock table + recent sales |
| 💊 **Medicines** | Inventory list, add / edit / delete medicines, category management, batch no., Mfg/Expiry dates, reorder levels |
| 🛒 **Sales (POS)** | New POS sale with cart, discount & payment type (Cash/Card/UPI/NetBanking), printable customer invoice, sales history |
| 📦 **Purchases** | Record purchase orders from suppliers, purchase history |
| 🚚 **Suppliers** | Supplier directory and add-supplier form |
| 👥 **Customers** | Customer directory and add-customer form |
| 📄 **Prescriptions** | Store prescription records (patient, doctor, date, notes) |
| 📈 **Reports** | Sales analytics report + medicine expiry report |
| 🔔 **Notifications** | Unread notification badge with low-stock & expiry alerts |
| 🌗 **UI/UX** | Dark/light theme toggle, announcement bar, global search bar, dropdown navigation, fully responsive (mobile hamburger menu) |

**Bonus folder:** `mcq/` contains a standalone **MCQ Quiz app** (Environmental Studies – CHE110) with a small set of Python helper scripts. It is independent of the pharmacy system and needs no database.

---

## 🛠 Tech Stack

- **Backend:** PHP 8.x (PDO with prepared statements)
- **Database:** MySQL / MariaDB (bundled with XAMPP)
- **Frontend:** HTML5, CSS3 (custom properties, Flexbox/Grid), vanilla JavaScript
- **Libraries/CDN:** Font Awesome 6, Google Fonts (Inter), Bootstrap 5 (only inside `mcq/`)
- **Server:** Apache (XAMPP)

---

## 🧠 How It Works

### Request flow

```
Browser
   │
   ▼
index.php ──(not logged in)──► login.php ──POST──► credentials checked against `users` table
   │                                │                     │ password_verify()
   │                                │                     ▼
   │                                │              $_SESSION['user_id'] set
   │                                ▼
   └──(logged in)──────────► dashboard.php
                                     │
                     includes/header.php + navbar.php (shared layout)
                                     │
        ┌────────────┬───────────────┼───────────────┬─────────────┐
        ▼            ▼               ▼               ▼             ▼
   medicines/     sales/        purchases/      suppliers/     reports/
   customers/   prescriptions/        │
                                      ▼
                            MySQL (pharmacy_management)
                            via includes/db.php (PDO)
```

1. **`index.php`** simply redirects to `dashboard.php` if a session exists, otherwise to `login.php`.
2. **`login.php`** verifies the email/password against the `users` table using `password_verify()`, then stores `user_id`, `user_name`, `user_email` and `user_role` in the PHP session.
3. **`includes/auth.php`** provides `check_auth()` — every protected page calls it and is bounced back to the login screen if there is no session.
4. **`includes/db.php`** opens a PDO connection to the `pharmacy_management` database using **prepared statements everywhere** (SQL-injection safe) and `htmlspecialchars()` on output (XSS safe).
5. **`includes/header.php` + `navbar.php`** render the shared layout: announcement bar, search, theme toggle, notification bell, user profile and the module dropdown menu.
6. Each module page (e.g. `medicines/index.php`) reads/writes its table and re-renders the page with the results.
7. The **dashboard aggregates live data** (counts, sums, low-stock and expiring queries) and falls back to hard-coded demo data if MySQL is switched off — so the UI never breaks.

### Fallback demo mode
If **MySQL is not running**, the app still works in a *demo mode*:
- Login accepts `admin@pharmacare.com` / `admin123` without a database.
- The dashboard shows sample statistics and sample rows.

As soon as MySQL is started and the SQL file is imported, all data becomes real.

---

## ✅ Requirements

- [XAMPP](https://www.apachefriends.org/) (PHP 8.0+ and MySQL included) — or any Apache + PHP + MySQL setup
- A modern browser (Chrome / Edge / Firefox)
- Git *(only if you want to clone the repository)*

---

## 🚀 How to Run (XAMPP)

### 1️⃣ Get the project into `htdocs`

**Option A — Clone from GitHub**
```powershell
cd C:\xampp\htdocs
git clone https://github.com/yash-k-pal-dev26/pharmacare.git
```
> After cloning, the URL will be `http://localhost/pharmacare/`.

**Option B — Copy the existing folder**
```powershell
# Project already lives at:
C:\xampp\htdocs\pharmecy
```
> The folder name defines the URL — with `pharmecy` it is `http://localhost/pharmecy/`.

### 2️⃣ Start Apache & MySQL
Open the **XAMPP Control Panel** and click **Start** on both **Apache** and **MySQL**.

### 3️⃣ Import the database
1. Open **<http://localhost/phpmyadmin>**
2. Click **Import** → **Choose File**
3. Select `database/pharmacy_management.sql` from the project folder
4. Press **Go**

The script creates the `pharmacy_management` database, all 11 tables, and inserts seed data (users, categories, suppliers, medicines, customers, sales, notifications).

> ⚠️ If your MySQL `root` user has a password, update `includes/db.php`:
> ```php
> $host = 'localhost';
> $db   = 'pharmacy_management';
> $user = 'root';
> $pass = 'your_mysql_password';   // ← change this
> ```

### 4️⃣ Open the app
Visit **<http://localhost/pharmecy/>** (or `/pharmacare/` if you cloned it) — you will land on the login page.

### 5️⃣ Log in
Use the demo credentials below and you are in the dashboard. 🎉

---

## 🔑 Demo Credentials

| Role | Email | Password |
|---|---|---|
| **Admin** | `admin@pharmacare.com` | `admin123` |
| **Pharmacist** | `pharmacist@pharmacare.com` | `admin123` |

*(Both are pre-filled on the login page for convenience.)*

---

## 📂 Project Structure

```
pharmecy/
├── index.php                  # Entry point → redirects to dashboard/login
├── login.php                  # Login form + authentication
├── logout.php                 # Destroys the session
├── dashboard.php              # KPI dashboard with live stats
│
├── includes/
│   ├── db.php                 # PDO database connection
│   ├── auth.php               # Session start + check_auth() guard
│   ├── header.php             # Shared header, search, theme, notifications
│   ├── navbar.php             # Main navigation with dropdowns
│   └── footer.php             # Shared footer / scripts
│
├── medicines/                 # Inventory CRUD + categories
│   ├── index.php  add.php  edit.php  delete.php  categories.php
├── sales/
│   ├── new-sale.php           # POS cart & checkout
│   ├── history.php            # All sales list
│   └── invoice.php            # Printable invoice
├── purchases/                 # add.php, index.php (stock in)
├── suppliers/                 # add.php, index.php
├── customers/                 # add.php, index.php
├── prescriptions/             # add.php, index.php
├── reports/
│   ├── sales.php              # Sales analytics
│   └── expiry.php             # Expiry report
│
├── css/                       # style, dashboard, forms, tables, responsive
├── js/                        # dashboard, main, notifications
├── database/
│   └── pharmacy_management.sql  # Schema + seed data (import this!)
│
└── mcq/                       # Bonus: standalone MCQ quiz (no DB needed)
```

---

## 🗄 Database Schema

Database: **`pharmacy_management`** — 11 tables:

| Table | Purpose |
|---|---|
| `users` | Login accounts & roles |
| `categories` | Medicine categories |
| `suppliers` | Supplier records |
| `medicines` | Stock items (batch, prices, qty, expiry, reorder level) |
| `customers` | Customer records |
| `sales` | Invoice header (totals, discount, payment type) |
| `sale_items` | Line items of each sale |
| `purchases` | Purchase orders from suppliers |
| `purchase_items` | Line items of each purchase |
| `prescriptions` | Prescription records |
| `notifications` | Low-stock / expiry / system alerts |

Relationships use foreign keys with `ON DELETE CASCADE / SET NULL`, and every table uses `utf8mb4`.

---

## 🛠 Troubleshooting

| Problem | Solution |
|---|---|
| Blank page / parse error | Make sure XAMPP runs **PHP 8.0+**. Check `C:\xampp\apache\logs\error.log` |
| `Access denied for user 'root'` | Set your MySQL root password in `includes/db.php` |
| Login fails even with demo credentials | Import `database/pharmacy_management.sql` in phpMyAdmin, then restart MySQL |
| Page redirects to login after logging in | Cookies/sessions blocked — allow cookies for `localhost` |
| `404 Not Found` | Check the folder name in the URL (`http://localhost/<folder-name>/`) |
| Styles missing | Confirm the folder is directly inside `C:\xampp\htdocs\` |
| Dashboard shows sample numbers | MySQL is offline — start it from the XAMPP Control Panel |

---

## 📌 Notes

- Passwords are stored as **bcrypt hashes** (`password_hash`) — never in plain text.
- All SQL uses **prepared statements**, and output is escaped with `htmlspecialchars()`.
- The UI is responsive: use the **☰ Menu** button on small screens.
- Toggle the 🌙 icon in the header for **dark mode** (preference is saved in `localStorage`).

---

**Made with ❤️ by Yash Kumar Pal**
