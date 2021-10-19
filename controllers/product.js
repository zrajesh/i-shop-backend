// Imports
const Product = require("../models/product");

exports.getProductById = (req, res, next, id) => {
    Product.findById(id)
    .populate("category")
    .exec((err, product) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        req.product = product;
        next();
    })
}

// Create product
exports.createProduct = (req, res) => {
    const {title, description, price, category, imageUrl} = req.body;
    if (
        !title ||
        !description ||
        !price ||
        !category ||
        !imageUrl
    ) {
        return res.status(400).json({
            message: "please add all the fields"
        })
    }
    let product = new Product(req.body);
    product.save((err, product) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json({
            message: "Product saved successfully"
        })
    })
}

// Get product
exports.getProduct = (req, res) => {
    return res.json(req.product);
}

// Get all products
exports.getAllProduct = (req, res) => {
    Product.find().exec((err, products) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json(products)
    })
}
// Get unique categories
exports.getAllUniqueCategories = (req, res) => {
    Product.distinct("category", {}, (err, category) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json(category)
    })
}

// Get all product by category
exports.getAllProductByCategory = (req, res) => {
    let categoryId = req.params.category;

    Product.find({category: categoryId}).exec((err, products) => {
        if(err) {
            return res.status(400).json({
                error: "Category does not exist"
            })
        }
        res.json(products)
    })
}
