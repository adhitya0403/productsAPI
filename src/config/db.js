import mongoose from "mongoose";

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("Mongo connection successfully....");
  } catch (error) {
    console.log("Mongo connection unsuccessfully...", error);
  }
};

export default connectDB;