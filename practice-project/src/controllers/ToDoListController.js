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