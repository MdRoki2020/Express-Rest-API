// basic import...
const express=require('express');
const router=require('./src/routes/api')
const app=new express();
const bodyParser= require('body-parser');


// security middleware...
const rateLimit=require('express-rate-limit')
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize')
const xss=require('xss-clean');
const hpp=require('hpp');
const cors=require('cors');


// Database...
const mongoose=require('mongoose');


// Implement Security Middleware
app.use(cors());
app.use(hpp());
app.use(xss());
app.use(mongoSanitize());
app.use(helmet());


// body parser Implement...
app.use(bodyParser.json());


//request rate limit...
const limiter=rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter);


//Mongodb connection...
let URI="mongodb://127.0.0.1:27017/Todo";
let OPTION={user:'',pass:'',autoIndex:true}

mongoose.connect(URI,OPTION,(err)=>{
    console.log('Connection Success')
    console.log(err)
})


//Routing Impliment...
app.use("/api/v1",router)


//undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})


module.exports=app;
