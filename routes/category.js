// Imports
const express = require("express");
const router = express.Router();
// Import controller
const {
    getCategoryById, 
    createCategory, 
    getCategory, 
    getAllCategory,
    updateCategory,
    deleteCategory
} = require("../controllers/category");
// Params
router.param("categoryId", getCategoryById);
// Routes
// Create
router.post("/category/create", createCategory);
// Read
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory);
// Update
router.put("/category/:categoryId", updateCategory);
// Delete
router.delete("/category/:categoryId", deleteCategory);

module.exports = router;
