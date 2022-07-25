const express=require('express');
const router=require("./src/routes/Api");
const app=new express();
const bodyParser=require('body-parser');

//security Middleware import
const rateLimit= require('express-rate-limit');
const helmet= require('helmet');
const mongoSanitize= require('express-mongo-sanitize');
const xss= require('xss-clean');
const hpp= require('hpp');
const cors= require('cors');
const mongoose=require('mongoose');


//security middleware impliment
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(cors())

app.use(bodyParser.json());


//Request Rate Limiting
const limiter=rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
})
app.use(limiter);



//Mongodb database connection...
let URI="mongodb://127.0.0.1:27017/School";
let OPTION={user:'',pass:''}

mongoose.connect(URI,OPTION,(err)=>{
    console.log('connection success');
    console.log(err);
})






app.use("/api/v1",router);








//undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({status:"failed",data:"Not Found"})
})

module.exports=app;