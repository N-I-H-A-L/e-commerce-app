import express from "express";
import stripePackage from "stripe";

const stripe = new stripePackage(process.env.STRIPE_SECRET);
const router = express.Router();

//Frontend will initiate the payment, generate token or reference for the payment. But it's the backend which will complete the payment and then charges will be deducted.
router.post("/payment", (req, res)=>{
    //To charge the user:
    stripe.charges.create({
        source: req.body.tokenId, //tokenID of the payment initiated by the frontend.
        amount: req.body.amount, //amount to be charged
        currency: "usd"
    }, (stripeErr, stripeRes)=>{ //It will either return error or response.
        if(stripeErr) res.status(500).json(stripeErr);
        else res.status(200).json(stripeRes);
    });
});

export default router;