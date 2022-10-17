const mongoose = require("mongoose")
const userModel=require("./User_Model")


const CandidatSchema = new mongoose.Schema({
 
adresse:{
    type:String,
    required:true,
    trim :true   
     },
  cvs:[{
   type:mongoose.Schema.Types.ObjectId,
    ref:"cvs"
     }],
  candidatures:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Candidatures"
  }]
})

const Candidats= userModel.discriminator("Candidats",CandidatSchema)



module.exports= mongoose.model("Candidats")
        