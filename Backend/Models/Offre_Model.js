const   mongoose = require ("mongoose")
const bcrypt = require ("bcrypt")



const OffreSchema = mongoose.Schema({
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
 post: {
     type:String,
     required:true,
     trim:true
 },
 type_contrat:{
     type:String,
     required:true,
     trim:true
 },
 description: {
     type:String,
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
module.exports= mongoose.model("Offres",OffreSchema)