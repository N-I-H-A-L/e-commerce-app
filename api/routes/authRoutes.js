import express from "express";
import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const router = express.Router();

//Register user
router.post('/register', async (req, res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_SECRET).toString(),
    });

    try{
        const savedUser = await newUser.save(); //Save the new user created in db.
        res.status(200).json(savedUser);
    }
    catch(err){
        res.status(500).json(err);
    }
});

router.post("/login", async (req, res)=>{
    try{
        const user = await User.findOne({username: req.body.username});
        if(!user){
            res.status(401).json({
                success: false,
                message: "User not found. Please register."
            });
        }
        else{
            const received_pass = req.body.password;
            const actual_pass = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_SECRET).toString(CryptoJS.enc.Utf8);
            if(received_pass !== actual_pass){
                res.status(401).json({
                    success: false,
                    message: "Wrong Credentials. Please try again."
                });
            }
            else{
                //JWT will be helpful in knowing whether the user is our actual client or not by verifying it's token from the database. 
                const access_token = jwt.sign({
                    id: user._id,
                    isAdmin: user.isAdmin
                }, 
                process.env.JWT_SECRET,
                {expiresIn: "3d"} //Token will expire in 3 days so user should log in again.
                );

                res.status(200).json({user, access_token});
            }
        }
    }
    catch(err){
        res.status(500).json(err);
    }
});

export default router;