import express from "express";
import { instance } from "../index.js";
import crypto from "crypto";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/payment", verifyToken, async (req, res)=>{
    const options = {
        amount: Number(req.body.amount * 100), //amount should be in the smallest currency that is in case of USD it's cents. 50000 cents = $500. So multiply by 100 to convert it into cents.
        currency: "USD",
    };

     //Create a new order with 'instance' as the razorpay instance and with the specifications as 'options'. 
     const order = await instance.orders.create(options);
     res.status(200).json({
         success: true,
         order
     });
     //So the order for the payment is created, now we will have to verify whether the order is correct or not then proceed with the payment.
});

router.post("/verification", (req, res)=>{
    // The callback_url of razorpay will send these information to the post request (check frontend code):
    // {
    //     razorpay_payment_id: 'pay_MhaxksjpRmUKrz',
    //     razorpay_order_id: 'order_MhaxHjUSkQUlnf',
    //     razorpay_signature: 'c5a4b9025ff18d431eac2ec2f5f7fd0890728c53a616b558e3e5580975aa81f9'
    // }
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    let body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
                                    .update(body.toString())
                                    .digest('hex');
    //If signature sent by the post request is same as expected signature implies, the payment is legit.
    if(razorpay_signature==expectedSignature){
        res.redirect("http://localhost:3000/success");
    }
    else{
        res.status(500).json({
            success: false,
            message: "Payment unsuccessful."
        });
    }
});

export default router;