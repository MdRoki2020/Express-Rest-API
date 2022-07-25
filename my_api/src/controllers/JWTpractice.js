var jwt=require('jsonwebtoken');

//create token..
exports.CreateToken=(req,res)=>{
    let payload={
        exp:Math.floor(Date.now() / 1000) + (60*60),
        data:{Name:"Roki",City:"Dhaka",admin:true}
    }

    let Token = jwt.sign(payload,"SecretKey123");

    res.send(Token);
}

//decode token...
exports.DecodeToken=(req,res)=>{
    let Token=req.headers['token-key'];

    jwt.verify(Token,"SecretKey123",(err,decoded)=>{
        if(err){
            res.status(401).json({status:"Invalid token",  data:err})
        }else{
            res.status(200).json({status:"Success token", data:decoded})
        }
    })
}