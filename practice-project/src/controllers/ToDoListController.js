const ToDoListModel=require('../models/ToDoListModel')


//create Todo List ...
exports.CreateToDo=(req,res)=>{

    let reqBody=req.body;
    let todoSubject=reqBody['TodoSubject']
    let TodoDescription=reqBody['TodoDescription']
    let UserName=req.headers['UserName']
    let TodoStatus="New"
    let TodoCreateDate=Date.now()
    let TodoUpdateDate=Date.now()

    let PostBody={
        UserName:UserName,
        TodoSubject:todoSubject,
        TodoDescription:TodoDescription,
        TodoStatus:TodoStatus,
        TodoCreateDate:TodoCreateDate,
        TodoUpdateDate:TodoUpdateDate
    }

    ToDoListModel.create(PostBody,(err,data)=>{
        if(err){

            res.status(400).json({status:"fail",data:err})

        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}



//select todo...
exports.SelectToDo=(req,res)=>{

    let UserName=req.headers['UserName']

    ToDoListModel.find({UserName:UserName},(err,data)=>{
        if(err){
            res.status(401).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}



//update todo list...
exports.UpdateToDo=(req,res)=>{

    let TodoSubject=req.body['TodoSubject']
    let TodoDescription=req.body['TodoDescription']
    let _id=req.body['_id']
    let TodoUpdateDate=Date.now()

    let PostBody={
        TodoSubject:TodoSubject,
        TodoDescription:TodoDescription,
        TodoUpdateDate:TodoUpdateDate
    }

    ToDoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })

}



//update status todo...
exports.UpdateStatusToDo=(req,res)=>{

    let TodoStatus=req.body['TodoStatus']
    let _id=req.body['_id']
    let TodoUpdateDate=Date.now()

    let PostBody={
        TodoStatus:TodoStatus,
        TodoUpdateDate:TodoUpdateDate
    }

    ToDoListModel.updateOne({_id:_id},{$set:PostBody},{upsert:true},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })

}



//delete todo...
exports.DeleteToDo=(req,res)=>{

    let _id=req.body['_id']

    ToDoListModel.remove({_id:_id},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })

}



//select todo by status...
exports.SelectToDoByStatus=(req,res)=>{

    let UserName=req.headers['UserName']
    let TodoStatus=req.body['TodoStatus']

    ToDoListModel.find({UserName:UserName,TodoStatus:TodoStatus},(err,data)=>{
        if(err){
            res.status(401).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}
