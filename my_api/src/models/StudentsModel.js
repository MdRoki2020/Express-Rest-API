const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
    Name:{type:String},
    Roll:{type:Number},
    Mobile:{
        type:String,
        validate:{
            validator:function(value){
                if(value.length===11){
                    return true
                }else{
                    return false
                }
            },
            message:"11 degit mobile number required"
        }
    },
    Class:{type:String},
})

const StudentsModel=mongoose.model('student',DataSchema);

module.exports=StudentsModel