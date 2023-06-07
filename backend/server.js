import  express  from "express";
import dotenv from 'dotenv'
dotenv.config()
import products from "./data/products.js";
import productRoutes from "./routes/productRoute.js"
import connectDB from "./config/db.js";
const port=process.env.PORT


connectDB()   //Connect to Mongodb
const app=express();

app.get('/',(req,res)=>{

    res.send('Api is running')
})

app.use('/api/products',productRoutes)



app.listen(port,()=>{console.log(`server is running on ${port}`);})