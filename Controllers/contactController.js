const express=require("express");
const router=express.Router();

//get all contacts
const getContacts =async (req,res)  =>{
    res.status(200).json({message:"get all contacts"});
};


//create a new contact
const createContact=async (req,res) =>{
    console.log("the request body is:",req.body);
    const{name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message:"create a new contact"});
};

//update contact
const updateContact=async (req,res) =>{
    res.status(201).json({message:`update contact ${req.params.id}`});
};



//get one contact
const getContact =async(req,res) =>{
    res.status(201).json({message:`get one contact ${req.params.id}`});
};


//delete contact
const deleteContact= async (req,res) =>{
    res.status(200).json({message:`delete contact ${req.params.id}`});

};


module.exports={
    getContacts,createContact,updateContact,getContact,deleteContact
}
