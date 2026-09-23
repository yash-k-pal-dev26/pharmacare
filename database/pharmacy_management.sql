-- PharmaCare Pharmacy Management System Database Schema

CREATE DATABASE IF NOT EXISTS `pharmacy_management` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `pharmacy_management`;

-- --------------------------------------------------------
-- Table: users
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `role` ENUM('Admin', 'Pharmacist', 'Staff') DEFAULT 'Staff',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed default user (password: admin123)
INSERT INTO `users` (`name`, `email`, `password`, `role`) VALUES
('Yash Kumar Pal', 'admin@pharmacare.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin'),
('John Pharmacist', 'pharmacist@pharmacare.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Pharmacist');

-- --------------------------------------------------------
-- Table: categories
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL UNIQUE,
  `description` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `categories` (`name`, `description`) VALUES
('Analgesic / Pain Relief', 'Medicines used to relieve pain and reduce fever.'),
('Antibiotics', 'Medicines used to treat bacterial infections.'),
('Antihistamine / Allergy', 'Medicines used to treat allergic conditions.'),
('Cardiovascular', 'Medicines related to heart and blood vessels.'),
('Vitamins & Supplements', 'Health supplements and dietary vitamins.');

-- --------------------------------------------------------
-- Table: suppliers
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `suppliers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `company` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `email` VARCHAR(100),
  `address` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `suppliers` (`name`, `company`, `phone`, `email`, `address`) VALUES
('Rajesh Pharma Supplies', 'Apex Healthcare Pvt Ltd', '+91 98765 43210', 'sales@apexpharma.com', '102 Industrial Zone, New Delhi'),
('MediWorld Traders', 'Global LifeSciences Inc', '+91 91234 56789', 'contact@mediworld.com', '45 Healthcare Avenue, Mumbai');

-- --------------------------------------------------------
-- Table: medicines
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `medicines` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `generic_name` VARCHAR(150),
  `category_id` INT,
  `batch_number` VARCHAR(50) NOT NULL,
  `manufacturer` VARCHAR(100) NOT NULL,
  `supplier_id` INT,
  `purchase_price` DECIMAL(10,2) NOT NULL,
  `selling_price` DECIMAL(10,2) NOT NULL,
  `quantity` INT NOT NULL DEFAULT 0,
  `reorder_level` INT NOT NULL DEFAULT 10,
  `manufacturing_date` DATE,
  `expiry_date` DATE NOT NULL,
  `description` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`supplier_id`) REFERENCES `suppliers`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `medicines` (`name`, `generic_name`, `category_id`, `batch_number`, `manufacturer`, `supplier_id`, `purchase_price`, `selling_price`, `quantity`, `reorder_level`, `manufacturing_date`, `expiry_date`, `description`) VALUES
('Paracetamol 500mg', 'Acetaminophen', 1, 'BATCH-2026-001', 'Cipla Ltd', 1, 12.50, 20.00, 120, 20, '2025-01-10', '2027-01-10', 'Effective for fever and general body aches.'),
('Amoxicillin 250mg', 'Amoxicillin Trihydrate', 2, 'BATCH-2026-002', 'Sun Pharma', 2, 30.00, 45.00, 8, 15, '2024-06-15', '2026-09-15', 'Antibiotic capsule for broad bacterial protection.'),
('Cetirizine 10mg', 'Cetirizine Hydrochloride', 3, 'BATCH-2026-003', 'Dr. Reddy’s', 1, 20.00, 35.00, 150, 25, '2025-03-01', '2027-03-01', 'Anti-allergy tablets for cold and sinus relief.'),
('Azithromycin 500mg', 'Azithromycin', 2, 'BATCH-2026-004', 'Zydus Cadila', 2, 70.00, 110.00, 5, 10, '2024-10-01', '2026-09-10', 'Broad-spectrum antibiotic.'),
('Ibuprofen 400mg', 'Ibuprofen', 1, 'BATCH-2026-005', 'Abbott Pharma', 1, 15.00, 28.00, 9, 20, '2025-02-12', '2026-09-25', 'Anti-inflammatory pain reliever.');

-- --------------------------------------------------------
-- Table: customers
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `customers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(20),
  `email` VARCHAR(100),
  `address` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `customers` (`name`, `phone`, `email`, `address`) VALUES
('Rahul Sharma', '+91 99887 76655', 'rahul@gmail.com', 'Sector 15, Chandigarh'),
('Priya Verma', '+91 98112 23344', 'priya@yahoo.com', 'MG Road, Bengaluru');

-- --------------------------------------------------------
-- Table: sales
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `sales` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `invoice_number` VARCHAR(50) NOT NULL UNIQUE,
  `customer_id` INT,
  `user_id` INT NOT NULL,
  `subtotal` DECIMAL(10,2) NOT NULL,
  `discount` DECIMAL(10,2) DEFAULT 0.00,
  `total_amount` DECIMAL(10,2) NOT NULL,
  `payment_type` ENUM('Cash', 'Card', 'UPI', 'NetBanking') DEFAULT 'Cash',
  `sale_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `sales` (`invoice_number`, `customer_id`, `user_id`, `subtotal`, `discount`, `total_amount`, `payment_type`) VALUES
('INV-000124', 1, 1, 75.00, 5.00, 70.00, 'Cash'),
('INV-000125', 2, 1, 110.00, 10.00, 100.00, 'UPI');

-- --------------------------------------------------------
-- Table: sale_items
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `sale_items` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `sale_id` INT NOT NULL,
  `medicine_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `unit_price` DECIMAL(10,2) NOT NULL,
  `total_price` DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (`sale_id`) REFERENCES `sales`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`medicine_id`) REFERENCES `medicines`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `sale_items` (`sale_id`, `medicine_id`, `quantity`, `unit_price`, `total_price`) VALUES
(1, 1, 2, 20.00, 40.00),
(1, 3, 1, 35.00, 35.00),
(2, 4, 1, 110.00, 110.00);

-- --------------------------------------------------------
-- Table: purchases
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `purchases` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `purchase_number` VARCHAR(50) NOT NULL UNIQUE,
  `supplier_id` INT NOT NULL,
  `total_amount` DECIMAL(10,2) NOT NULL,
  `purchase_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`supplier_id`) REFERENCES `suppliers`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
-- Table: purchase_items
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `purchase_items` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `purchase_id` INT NOT NULL,
  `medicine_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `purchase_price` DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (`purchase_id`) REFERENCES `purchases`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`medicine_id`) REFERENCES `medicines`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
-- Table: prescriptions
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `prescriptions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `prescription_number` VARCHAR(50) NOT NULL UNIQUE,
  `patient_name` VARCHAR(100) NOT NULL,
  `doctor_name` VARCHAR(100) NOT NULL,
  `date` DATE NOT NULL,
  `notes` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
-- Table: notifications
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `notifications` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `type` ENUM('low_stock', 'expiry', 'system') DEFAULT 'system',
  `message` TEXT NOT NULL,
  `is_read` TINYINT(1) DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `notifications` (`type`, `message`, `is_read`) VALUES
('low_stock', 'Amoxicillin 250mg is low in stock (8 remaining).', 0),
('low_stock', 'Azithromycin 500mg is low in stock (5 remaining).', 0),
('low_stock', 'Ibuprofen 400mg is low in stock (9 remaining).', 0),
('expiry', 'Amoxicillin 250mg expires within 30 days.', 0),
('expiry', 'Azithromycin 500mg expires within 30 days.', 0);
