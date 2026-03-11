const express=require('express');
const app=express();
require("dotenv").config();
require('./model/db');
const AuthRouter=require('./routes/AuthRouter');
const ProductRouter=require('./routes/ProductRouter');

const bodyParser=require('body-parser');
const cors =require('cors');
const PORT=8080;

// app.use(express.urlencoded({extended:true}));

 app.use(bodyParser.json());
 app.use(cors());

app.use('/auth',AuthRouter);
app.use('/products',ProductRouter)


 

app.listen(PORT,()=>{
    console.log(`server listening on ${PORT} `)
})