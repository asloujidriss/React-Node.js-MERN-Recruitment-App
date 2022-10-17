const mongoose = require("mongoose")
const CandidatureSchema = mongoose.Schema({
num:{
    type:Number,
    required:true,
    trim:true
},
date:{
    type:Date,
  
    trim:true
},
candidat:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Candidats"
},
offre:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Offres"
},
test:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Tests"
},
notifications:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Notifications"
}]

})
CandidatureSchema.pre("save", function (next) {
    this.date = Date.now();
    next();
  })

module.exports=mongoose.model("Candidatures",CandidatureSchema)