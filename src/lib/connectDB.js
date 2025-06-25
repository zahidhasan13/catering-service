import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;
export const connectDB = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error("Please define the MONGODB_URI environment variable");
    }

    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with failure
  }
}