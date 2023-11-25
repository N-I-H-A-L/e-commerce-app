import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    desc:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    categories:{
        type: [String],
    },
    size:{
        type: [String],
    },
    color:{
        type: [String],
    },
    price:{
        type: Number,
        required: true
    },
    inStock:{
        type: Boolean,
        default: true
    }
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);

export default Product;