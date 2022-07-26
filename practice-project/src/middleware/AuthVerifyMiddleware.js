const jwt = require('jsonwebtoken');

module.exports=(req,res,next)=>{
    let token=req.headers['token-key']
    jwt.verify(token,"SecretKey123456789",(err,decoded)=>{
        if(err){
            res.status(401).json({status:"unauthorized"})
        }else{
            let UserName=decoded["data"]['UserName']
            req.headers.UserName=UserName
            next()
        }
    })
}