const { MongoClient } = require("mongodb");
require("dotenv").config();

const url = process.env.DB_URI;
const client = new MongoClient(url);

const dbName = "hotel-booking";

async function connectDB(queryData) {
  try {
    await client.connect();
    const database = client.db(dbName);
    const hotels = database.collection("hotels");

    await hotels.insertOne(queryData);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

module.exports = { connectDB };
