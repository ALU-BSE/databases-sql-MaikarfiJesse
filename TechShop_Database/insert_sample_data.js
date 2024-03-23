// Insert sample users
db.users.insertMany([
  {name: "Jesse Josh", email: "jesse.josh@example.com", password: "secret123"},
  {name: "Joe Jerry", email: "joe.jerry@example.com", password: "password123"}
]);

// Insert sample products (assuming to use the inserted user IDs)
var userId = db.users.findOne({email: "jesse.Josh@example.com"})._id;

db.products.insertMany([
  {name: "Laptop Pro 15", description: "High-performance professional laptop", price: 3500, userID: userId},
  {name: "Smartphone Ultra", description: "Latest model with advanced features", price: 899, userID: userId}
]);

// Insert sample transactions (assuming to use the inserted product and user IDs)
var productId1 = db.products.findOne({name: "Laptop Pro 15"})._id;
var buyerId = db.users.findOne({email: "joe.jerry@example.com"})._id;

db.transactions.insertMany([
  {productID: productId1, buyerID: buyerId, date: new Date("2023-09-01"), quantity: 1},
  {productID: productId2, buyerID: buyerId, date: new Date("2023-09-02"), quantity: 2}
]);
