var mongodb=require ("mongodb");
var express=require ("express");
const  mongoose  = require("mongoose");


const ContactSchema=mongoose.Schema({

first_name :{

    type:String ,
    require:true

}
,

last_name:{

    type:String ,
    require:true



}


})

const Contact=module.exports=mongoose.model("contact" , ContactSchema)