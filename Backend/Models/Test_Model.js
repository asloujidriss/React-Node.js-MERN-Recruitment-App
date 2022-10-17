const mongoose = require("mongoose")


const TestSchema = mongoose.Schema({

date_deb:{
  type:Date,
  required:true,
  trim:true
},
date_fin:{
    type:Date,
    required:true,
    trim:true
},
responsable:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"ResEntreprises"
},
candidatures:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Candidatures"
}]

})
module.exports= mongoose.model("Tests",TestSchema)