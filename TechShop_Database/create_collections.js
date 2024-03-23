// Use TechShop database
db = db.getSiblingDB('techshop');

// Create collections explicitly to initialize the database structure
db.createCollection("users");
db.createCollection("products");
db.createCollection("transactions");
