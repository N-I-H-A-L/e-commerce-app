import express, { urlencoded } from "express";
import mongoose  from "mongoose";
import env from "dotenv";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import checkoutRouter from "./routes/checkoutRoutes.js";
import cors from "cors";
import Razorpay from "razorpay";

env.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log("DB Connected"))
    .catch((err)=> console.log(err));

app.use(cors());
app.use(express.json());
app.use(urlencoded({extended: true}));
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/checkout", checkoutRouter);

//Creating the razorpay instance and exporting it. 
export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});

app.get("/", (req, res)=>{
    res.send("Server is working")
});

app.get("/api/getkey", (req, res)=>{
    res.status(200).json({
        key: process.env.RAZORPAY_API_KEY,
    });
});

app.listen(PORT, ()=>{
    console.log("Server is running");
});