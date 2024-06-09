import express from "express";
import Order from "../models/Order.js";
import { verifyAndAuth, verifyToken } from "../verifyToken.js";

const router = express.Router();

//Create an order
router.post("/", verifyToken, async (req, res)=>{
    const newOrder = new Order(req.body);
    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }  
    catch(err){
        res.status(500).json(err);
    }
});

//Get user order
router.get("/find/:userId", verifyAndAuth, async (req, res)=>{
    try{
        const orders = await Order.find({userId: req.params.userId});
        res.status(200).json(orders);
    }
    catch(err){
        res.status(500).json(err);
    }
});

export default router;