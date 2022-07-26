const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
    UserName:{type:String},
    TodoSubject:{type:String},
    TodoDescription:{type:String},
    TodoStatus:{type:String},
    TodoCreateDate:{type:Date},
    TodoUpdateDate:{type:Date},
})

const ToDoListModel=mongoose.model('todoList',DataSchema);

module.exports=ToDoListModel;