const mongoose = require("mongooes");

//Create variable called UserDetailsSchema & use the 'schema' fuction in mongooes
const UserDetailsSchema = new mongoose.Schema({
    userName : String,// Defining the properties of the user
    email : String,
    phoneNo : String
},{
    //Store the properties in a collection
    collection : "UserInfo",
});

//Create 'model' function in mongoose and pass the collection name and the schema name
mongoose.model("UserInfo",UserDetailsSchema);