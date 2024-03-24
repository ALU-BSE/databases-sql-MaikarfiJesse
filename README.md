## NoSQL

### What NoSQL Means

NoSQL stands for "Not Only SQL". It's a type of database that can handle and sort all kinds of data, not just data that can fit into a relational, tabular schema.

### Difference between SQL and NoSQL

SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.

SQL databases are table based databases whereas NoSQL databases are document based, key-value pairs, graph databases or wide-column stores.

### ACID in NoSQL

ACID stands for Atomicity, Consistency, Isolation, Durability. These are a set of properties that guarantee that database transactions are processed reliably.

### Document Storage in NoSQL

Document storage is a type of NoSQL database that is designed to store, retrieve, and manage document-oriented information. A document database is a type of nonrelational database that is designed to store semistructured data as documents.

### NoSQL Types

There are four main types of NoSQL databases: document databases, key-value databases, wide-column stores, and graph databases.

### Benefits of a NoSQL Database

NoSQL databases are more flexible, scalable, and provide superior performance for handling large data and real-time applications.

### Querying Information from a NoSQL Database

In NoSQL databases, data is queried based on the database type. For example, in MongoDB, you can use the `find()` function to query data:

```javascript
db.collection('Customers').find({});
```

### Inserting/Updating/Deleting Information from a NoSQL Database

In MongoDB, you can use the `insert()`, `update()`, and `remove()` functions respectively:

```javascript
// Insert
db.collection('Customers').insert({ name: 'Jesse', email: 'jesse@example.com' });

// Update
db.collection('Customers').update({ name: 'Jesse' }, { $set: { email: 'jesse_new@example.com' } });

// Delete
db.collection('Customers').remove({ name: 'Jesse' });
```

## Using MongoDB

MongoDB is a source-available cross-platform document-oriented database program. It is classified as a NoSQL database program. MongoDB uses JSON-like documents with optional schemas.

To use MongoDB, you need to install it on your machine and use a MongoDB client to interact with the database. The MongoDB shell, `mongo`, is an interactive JavaScript interface to MongoDB. You can use the `mongo` shell to query and update data as well as perform administrative operations.

### Best practices for optimizing performance in a NoSQL database:

1. **Indexing**: Similar to SQL databases, NoSQL databases like MongoDB also support indexing. Indexes can significantly improve query performance by allowing the database to locate documents by specific fields, rather than scanning the entire collection.

2. **Sharding**: Sharding is a method for distributing data across multiple machines. It is one of the best ways to scale your NoSQL database as it can help to handle more write loads by distributing them across multiple servers.

3. **Denormalization**: Unlike SQL databases, NoSQL databases often encourage denormalization. Denormalization is the process of copying the same data into multiple documents or tables in order to improve read performance.

4. **Caching**: Caching is another effective way to improve database performance. By storing frequently accessed data in memory, you can reduce the number of read operations to the database.

5. **Batch Processing**: If you need to perform many similar operations, it's often more efficient to batch them together. This can reduce the overhead of initiating database operations.

6. **Use Appropriate Data Model**: Different NoSQL databases are designed for different types of data models. For example, document databases are good for semi-structured data, graph databases are good for interconnected data, etc. Using the appropriate data model can improve performance.

7. **Monitor and Tune Database**: Regularly monitor your database performance and tune your database configuration accordingly. Most NoSQL databases provide tools and utilities for monitoring and tuning.

8. **Avoid Large Documents**: In document databases like MongoDB, try to avoid large documents as they can lead to increased memory usage and decreased performance.

9. **Use Compression**: Some NoSQL databases support compression of data. Compression can reduce the amount of storage used and can also improve I/O efficiency.

10. **Regularly Update Statistics**: Similar to SQL databases, NoSQL databases also use statistics about the distribution of data. Regularly updating these statistics can help the database make better decisions about query planning and execution.

**Draw a diagram to visualize the schema**

![TechShop Schema](https://github.com/ALU-BSE/databases-sql-MaikarfiJesse/assets/99619280/9fbc9029-7626-4c6e-99bb-08a957cab323)
