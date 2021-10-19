// Imports
const mongoose = require("mongoose");
const {Schema} = mongoose;
const {ObjectId} = Schema;

const productSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        maxlength: 200
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000,
    },
    price: {
        type: Number,
        required: true,
        maxlength: 30,
        trim: true
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    rating: {
        rate: {
            type: Number
        },
        count: {
            type: Number
        }
    }
}, {timestamps: true});

module.exports = mongoose.model("Product", productSchema);
