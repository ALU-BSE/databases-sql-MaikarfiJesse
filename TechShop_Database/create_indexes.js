// Index for unique email addresses in the users collection
db.users.createIndex({"email": 1}, {unique: true});

// Index to speed up queries by user name
db.users.createIndex({"name": 1});
