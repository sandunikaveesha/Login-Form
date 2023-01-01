const {request} = require("express");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

//Create a variable called mongoUrl and assign the link of the cluster. Need to change the PW
const mongoUrl = "mongodb+srv://admin:admin@cluster0.juoacdq.mongodb.net/?retryWrites=true&w=majority";

//Connect the DB
mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{
    console.log("Connected to Database");//If connected successful display success msg
})
.catch(e=>console.log(e));//If not display error

app.listen(5000,()=>{
    console.log("Server Started");
})

//Name of the API is post
app.post("/post", async(req,res) => {
    console.log(req.body); //Get the request from the body
    const {data} = req.body;

    try{
        if(data=="adrash"){
            res.send({status:"Ok"});
        }
        else{
            res.send({status:"User not found"});
        }
    }   catch(error) {
            res.send({status:"Something went wrong try again."});
        }
    
});

//Import the schema
require("./userDetails");

//Create variable called user and access the created model
const User = mongoose.model("UserInfo");

//Create and register API which we can register any user
app.post("/register",async(req,res)=>{
    try{

    }catch (error){
        
    }
})