const mongoose= require("mongoose")

const UserModel= require("./User_Model")

const ResEntrepriseSchema=mongoose.Schema({

nom_entreprise:{
    type:String,
    required:true,
    trim:true
},


specialité:{
    type:String,
    required:true,
    trim:true
},
adresseE:{
    type:String,
    required:true,
     trim :true   
     },
tests:[{
    type:mongoose.Schema.Types.ObjectId,
     ref:"Tests"
    }],
 offres:[{
    type:mongoose.Schema.Types.ObjectId,
     ref:"Offres"
     }],

})


const ResEntreprises= UserModel.discriminator("ResEntreprises",ResEntrepriseSchema)

module.exports = mongoose.model("ResEntreprises")
