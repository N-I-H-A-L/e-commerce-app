import express from "express";
import { verifyAndAuth } from "../verifyToken.js";
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

export default router;


