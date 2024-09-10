const express=require("express");

const dotenv=require("dotenv").config();
const app=express();
const port=process.env.PORT || 5000;

app.get('/api/contacts', (req,res) =>{
   res.json({message:"i will win thids race"})
});



app.listen(port, () =>{
    console.log(` ${port} this is my port`)
})

