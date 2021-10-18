// Imports
const express = require("express");
const router = express.Router();
// Import controller
const { getCategoryById } = require("../controllers/category");
const {
    getProductById, 
    getProduct,
    getAllProduct,
    createProduct,
    getAllUniqueCategories,
    getAllProductByCategory
} = require("../controllers/product");

// Params
router.param("categoryId", getCategoryById);
router.param("productId", getProductById);
// Routes
// Create
router.post("/product/create", createProduct);
// Read
router.get("/product/:productId", getProduct);
router.get("/products", getAllProduct);
router.get("/products/:category", getAllProductByCategory);
router.get("/products/categories", getAllUniqueCategories)

module.exports = router;
