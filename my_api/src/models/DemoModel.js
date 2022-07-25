const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
    Name:String,
    Roll:Number,
    Class:String,
    Remarks:String,
    Adult:Boolean,
    comments:[],
    details:{},
    dob:Date
})