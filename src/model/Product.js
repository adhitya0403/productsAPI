import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["mobiles", "laptops", "smartwatches", "earbuds", "accessories"],
  },
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  mrp: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;