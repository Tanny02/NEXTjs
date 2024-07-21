import { connect } from "mongoose";

const connection = {};

const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Already connected");
      return;
    }
    const db = await connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
