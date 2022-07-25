const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
    Name:String,
    Roll:String,
    Class:String,
    Remarks:String,
})

const StudentsModel=mongoose.model('student',DataSchema);

module.exports=StudentsModel