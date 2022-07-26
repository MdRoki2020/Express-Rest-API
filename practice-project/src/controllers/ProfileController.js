const ProfileModel=require('../models/ProfileModel')
const jwt = require('jsonwebtoken');

//user register ...
exports.CreateProfile=(req,res)=>{

    let reqBody=req.body;

    ProfileModel.create(reqBody,(err,data)=>{
        if(err){

            res.status(400).json({status:"fail",data:err})

        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

//user login...
exports.UserLogin=(req,res)=>{

    let UserName=req.body['UserName'];
    let Password=req.body['Password'];

    ProfileModel.find({UserName:UserName,Password:Password},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            if(data.length>0){

                //create Auth Token...
                let payload={exp:Math.floor(Date.now()/1000)+(24*60*60),data:data[0]}
                let token=jwt.sign(payload,'SecretKey123456789');


                res.status(200).json({status:"success",token:token,data:data})
            }else{
                res.status(401).json({status:"unauthorized"})
            }
        }
    })
}



//select profile...
exports.SelectProfile=(req,res)=>{

    let UserName=req.headers['UserName']

    ProfileModel.find({UserName:UserName},(err,data)=>{
        if(err){
            res.status(401).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}



//update profile...
exports.UpdateProfile=(req,res)=>{

    let UserName=req.headers['UserName']
    let reqBody=req.body;

    ProfileModel.updateOne({UserName:UserName},{$set:reqBody},{upsert:true},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
    
}