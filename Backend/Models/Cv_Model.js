const mongoose = require("mongoose")

const CvSchema = mongoose.Schema({

    date:{
        type: Date,
        trim:true   
    },
    extension: {
        type:String,
        required:true,
        trim:true
    },
    File: {
        type:String,
        required:true,
        trim:true  
    },
    candidat:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Candidats"
    }
    
})
CvSchema.pre("save", function (next) {
    this.date = Date.now();
    next();
  })

module.exports= mongoose.model("cvs",CvSchema)  
