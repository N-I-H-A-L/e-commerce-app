import express from "express";
import mongoose  from "mongoose";
import env from "dotenv";
import userRouter from "./routes/userRoutes.js"
import cors from "cors";

env.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log("DB Connected"))
    .catch((err)=> console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);

app.get("/", (req, res)=>{
    res.send("Server is working")
});

app.listen(PORT, ()=>{
    console.log("Server is running");
});