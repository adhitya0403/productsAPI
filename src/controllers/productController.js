import Product from "../model/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}, { _id: 0 });
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getProductById = async (req, res) => {
  const id = String(req.params.id);
  try {
    const product = await Product.find({ id: id }, { _id: 0 });
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};
