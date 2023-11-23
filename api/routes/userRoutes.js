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
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1)); //It will have the same date and time as "date" variable but year will be 1 year back.
    try{
        const data = await User.aggregate([
            //Match all the documents which were createdAt after (greater than) 'lastYear'. 
            //And aggregate them (join them in an array).
            {$match: { createdAt: { $gte: lastYear } }},
            {
                $project: {
                    month: { $month: "$createdAt" },
                    //It will add a new variable to all the documents, "month", whose value will be the month value of "createdAt". That is, if month value of createdAt is 11, the month variable of document will be 11.
                },
            },
            {
                $group: {
                    //It will group all the elements with ID as month, and since ID is unique, it will show one document for every month. Such that, value of "total" of that document will be the sum of all the documents (number of documents) with the same "month".
                    _id: "$month",
                    total: {$sum: 1},
                }
            }
        ]);
        //Basically, "data" will be data of number of users created in last year, such that it will show for every month how many users were created.
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
});

export default router;


