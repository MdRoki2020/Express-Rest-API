const express=require('express');
const router=require("./src/routes/Api");
const app=new express();

//security Middleware import
const rateLimit= require('express-rate-limit');
const helmet= require('helmet');
const mongoSanitize= require('express-mongo-sanitize');
const xss= require('xss-clean');
const hpp= require('hpp');
const cors= require('cors');


//security middleware impliment
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(cors())


//Request Rate Limiting
const limiter=rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
})

app.use(limiter);






app.use("/api/v1",router);








//undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({status:"failed",data:"Not Found"})
})

module.exports=app;