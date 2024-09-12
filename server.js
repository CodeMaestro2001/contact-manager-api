const express=require("express");
const errorHandler = require("./middleware/errorHandler");

const dotenv=require("dotenv").config();
const app=express();
const port=process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use("/api/contacts", require("./Routes/contactRouter"));
app.use(errorHandler);

app.listen(port, () =>{
    console.log(` ${port} this is my port`)
})

