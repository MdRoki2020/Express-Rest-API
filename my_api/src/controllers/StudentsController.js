
const StudentsModel=require('../models/StudentsModel')

//data insert..

exports.InsertStudent=(req,res)=>{
    let reqBody=req.body;

    StudentsModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


//data Read..

exports.ReadStudent=(req,res)=>{
    let Query={};
    let projection="Name Roll Class Remarks"

    StudentsModel.find(Query,projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


//update data..

exports.UpdateStudent=(req,res)=>{
    let id=req.params.id;
    let QUERY={_id:id};
    let reqBody=req.body;


    StudentsModel.updateOne(QUERY,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


//Delete Data ..

exports.DeleteStudents=(req,res)=>{
    let id=req.params.id;
    let QUERY={_id:id};

    StudentsModel.remove(QUERY,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}