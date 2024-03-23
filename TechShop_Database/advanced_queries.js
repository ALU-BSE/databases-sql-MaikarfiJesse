// Find all products listed by a specific user
print("Products listed by Jesse Josh:");
var userId = db.users.findOne({email: "jesse.josh@example.com"})._id;
db.products.find({userID: userId}).forEach(printjson);

// Find the total amount spent by a specific user
print("\nTotal amount spent by Joe Jerry:");
db.transactions.aggregate([
  {$match: {buyerID: buyerId}},
  {$lookup: {from: "products", localField: "productID", foreignField: "_id", as: "product"}},
  {$unwind: "$product"},
  {$group: {_id: "$buyerID", totalSpent: {$sum: {$multiply: ["$quantity", "$product.price"]}}}}
]).forEach(printjson);

// Find the top 5 most popular products
print("\nTop 5 most popular products:");
db.transactions.aggregate([
  {$group: {_id: "$productID", count: {$sum: 1}}},
  {$sort: {count: -1}},
  {$limit: 5},
  {$lookup: {from: "products", localField: "_id", foreignField: "_id", as: "productInfo"}},
  {$unwind: "$productInfo"},
  {$project: {productName: "$productInfo.name", count: 1}}
]).forEach(printjson);
