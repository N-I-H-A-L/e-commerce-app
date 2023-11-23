import express from "express";
import Product from "../models/Product.js";
import { verifyAdmin, verifyToken } from "../verifyToken.js";

const router = express.Router();

//Create a product -> only admins can add a new product.
router.post("/", verifyAdmin, async (req, res)=>{
    const newProduct = new Product(req.body);
    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }  
    catch(err){
        res.status(500).json(err);
    }
});

//Update product
router.put("/:id", verifyAdmin, async (req, res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true});
        res.status(200).json(updatedProduct);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Delete product
router.delete("/:id", verifyAdmin, async (req, res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully."
        });
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Get product
router.get("/:id", async (req, res)=>{
    try{
        const prod = await Product.findById(req.params.id);
        res.status(200).json(prod);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Get all products
router.get("/", async (req, res)=>{
    const query_new = req.query.new;
    const query_category = req.query.category;
    try{
        let products;
        if(query_new){
            //Get latest products
            products = await Product.find().sort({createdAt: -1});
        }
        else if(query_category){
            //Get products of a particular category
            products = await Product.find({
                categories: {$in: [query_category]}
            });
        }
        else products = await Product.find();

        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json(err);
    }
})

export default router;