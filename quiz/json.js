const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

// Read the JSON data from a file
const data = fs.readFileSync('questions.json', 'utf8');
const questions = JSON.parse(data);

// Connection URI for MongoDB
const uri = 'mongodb://localhost:27017';

// Name of the database and collection
const dbName = 'quiz';
const collectionName = 'questions';

// Connect to MongoDB and insert the documents
MongoClient.connect(uri, function(err, client) {
  if (err) {
    console.log('Error connecting to MongoDB:', err);
  } else {
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert the documents as an array
    collection.insertMany(questions, function(err, result) {
      if (err) {
        console.log('Error inserting documents:', err);
      } else {
        console.log('Inserted', result.insertedCount, 'documents');
      }
      client.close();
    });
  }
});
