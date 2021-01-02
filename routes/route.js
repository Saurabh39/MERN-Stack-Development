const Router = require("express");
const express = require("express");
const path = require("path");

const router = express.Router();

const Contact=require("../models/contacts") //Schema Import





// GET Request


router.get ("/contacts",(req,res,next)=>{

    Contact.find(function(err,contacts){


    res.json(contacts)



})

})




// POST Request

router.post ("/contacts",(req,res,next)=>{


const newContact=new Contact({

    first_name :req.body.first_name ,
    last_name:req.body.last_name
})


newContact.save((err,contact)=>{

if(err){

    res.json({msg:"Error while saving the contacts"})
}
else{

    res.json({msg:"Contact added succeessfuullyy"})
}
 

})

})










router.put ("/",(req,res,next)=>{


    res.send ("This is PUT request")
})





//deleting the contacts




router.delete("/contacts/:id",(req,res)=>{

Contact.remove({_id:req.body._id},(err,result)=>{


    if(err){

        res.json(err)
    }

    
    else{

       res.json(result)
    }
})




})







module.exports=router