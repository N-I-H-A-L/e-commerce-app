import express from "express";
import Order from "../models/Order.js";
import { verifyAdmin, verifyAndAuth, verifyToken } from "../verifyToken.js";

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

//Update order
router.put("/:id", verifyAdmin, async (req, res)=>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true});
        res.status(200).json(updatedOrder);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Delete order
router.delete("/:id", verifyAdmin, async (req, res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Order deleted successfully."
        });
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

//Get all orders
router.get("/", verifyAdmin, async (req, res)=>{
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }
    catch(err){
        res.status(500).json(err);
    }
});

// Get the sales of previous month
router.get("/income", verifyAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
});

export default router;