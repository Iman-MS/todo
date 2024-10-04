import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected`.cyan.underline.bold);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    server.close(() => process.exit(1));
  }
};

export default connectDB;
