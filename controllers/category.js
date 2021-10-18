// Imports
const Category = require("../models/category");

exports.getCategoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        req.category = category;
        next();
    })
}
// Create category
exports.createCategory = (req, res) => {
    const category = new Category(req.body)
    category.save((err, category) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json({category})
    })
}
// Get category
exports.getCategory = (req, res) => {
    return res.json(req.category)
}

// Get all category
exports.getAllCategory = (req, res) => {
    Category.find().exec((err, categories) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json(categories)
    });
}

// Update category
exports.updateCategory = (req, res) => {
    const category = req.category;
    category.name = req.body.name;
    category.save((err, updatedCategory) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json(updatedCategory)
    })
}
// Delete category
exports.deleteCategory = (req, res) => {
    const category = req.category;
    category.remove((err, category) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json({
            message: "Successfully deleted"
        });
    });
}
