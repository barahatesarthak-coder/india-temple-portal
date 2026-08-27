import mongoose from 'mongoose';
import dataStore from '../services/dataStore.js';

export const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/india_temple_heritage';
  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 2500, // Quick timeout if Mongo isn't running locally
    });
    console.log(`✓ MongoDB Connected: ${conn.connection.host}`);
    dataStore.setMongoConnected(true);
  } catch (error) {
    console.log(`ℹ MongoDB not detected locally (${error.message}). Using seamless built-in in-memory data store.`);
    dataStore.setMongoConnected(false);
  }
};

export default connectDB;
