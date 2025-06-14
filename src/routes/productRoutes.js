import express from "express";
import {
  getAllProducts,
  getProductById
} from "../controllers/productController.js";

const router = express.Router();


router.get("/api/products", getAllProducts);
router.get("/api/products/:id", getProductById);



export default router;
