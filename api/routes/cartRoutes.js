import express from "express";
import Cart from "../models/Cart.js";
import { verifyAdmin, verifyAndAuth, verifyToken } from "../verifyToken.js";

const router = express.Router();

//Create a cart
router.post("/", verifyToken, async (req, res)=>{
    const newCart = new Cart(req.body);
    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }  
    catch(err){
        res.status(500).json(err);
    }
});

//Update cart -> only admins or the user itself can upate the cart so, verifyAndAuth.
router.put("/:id", verifyAndAuth, async (req, res)=>{
    try{
        const updatedCart = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true});
        res.status(200).json(updatedCart);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Delete cart
router.delete("/:id", verifyAndAuth, async (req, res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Cart deleted successfully."
        });
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Get user cart
router.get("/find/:userId", verifyAndAuth, async (req, res)=>{
    try{
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Get all products (only admins can access)
router.get("/", verifyAdmin, async (req, res)=>{
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    }
    catch(err){
        res.status(500).json(err);
    }
});

export default router;