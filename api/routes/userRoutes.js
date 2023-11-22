import express from "express";
import { verifyAndAuth, verifyAdmin } from "../verifyToken.js";
import User from "../models/User.js";
import CryptoJS from "crypto-js";

const router = express.Router();

//Updating User
router.put("/:id", verifyAndAuth, async (req, res)=>{
    //If password needs to be updated, it should be encrypted.
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_SECRET).toString();
    }

    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            //In this way $set will update only those fields which are specified by req.body:
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedUser);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Delete a user
router.delete("/:id", verifyAndAuth, async (req, res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "User has been deleted successfully."
        });
    }
    catch(err){
        res.status(500).json(err);
    }  
});

//Get a user -> only admins can get user data.
router.get("/find/:id", verifyAdmin, async (req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }  
});

//Get all users
router.get("/", verifyAdmin, async (req, res)=>{
    //If new query is given to the request: localhost:5000/api/user?new=true, then return the latest users.
    const query = req.query.new;
    try{
        //If new query is present return the 5 latest users (descending sorting on the basis of _id will give latest users). Else return all users.
        const users = query? await User.find().sort({_id: -1}).limit(5) : await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Get user stats
router.get("/stats", verifyAdmin, async (req, res)=>{
    
});

export default router;


