import express from 'express';
import mongoose from "mongoose"
import dotenv from "dotenv"
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))


// eslint-disable-next-line no-undef
mongoose.connect(process.env.MNGODB_URL  || "mongodb://localhost/GetMyCart",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("connection sucessful")
}).catch((e)=>{
    console.log("not connected",e)
})

app.get("/api/config/paypal",(req,res)=>{
    // eslint-disable-next-line no-undef
    res.send(process.env.PAYPAL_CLIENT_ID || "sb")
})



app.use("/api/user",userRouter)
app.use("/api/product",productRouter)
app.use("/api/orders",orderRouter)




app.get('/',(req,res)=>{
    res.send("server is ready");
});
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`)
});
