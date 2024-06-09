import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

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