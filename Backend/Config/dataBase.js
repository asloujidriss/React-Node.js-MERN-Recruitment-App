const mongoose  = require("mongoose")
const dotenv =require("dotenv")
require("dotenv").config()

mongoose.Promise = global.Promise

const DB = process.env.BD_URI


const database = mongoose.connect(DB,{useNewUrlParser:true},
(err)=>{
    if(!err){
        console.log("mongodb is conneceted successfuly ")
    }else{
        console.log("failed to connect with mongodb"+err)
    }
}
)
module.exports=database