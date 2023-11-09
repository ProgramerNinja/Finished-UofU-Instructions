-- Write your Schema Here -- 
DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

use registrar_db;

DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS customer_order;

CREATE TABLE customers (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE customer_order (
    id INT NOT NULL,
    customer_id INT,
    order_details TEXT,
    FOREIGN KEY (customer_id)
    REFERENCES customers(id)
    ON DELETE SET NULL
);