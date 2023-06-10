import  express  from "express";
import dotenv from 'dotenv'
dotenv.config()
import productRoutes from "./routes/productRoute.js"
import connectDB from "./config/db.js";
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
const port=process.env.PORT


connectDB()   //Connect to Mongodb
const app=express();

app.get('/',(req,res)=>{

    res.send('Api is running')
})

app.use('/api/products',productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>{console.log(`server is running on ${port}`);})