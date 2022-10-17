const mongoose = require("mongoose")

const NotificationSchema = mongoose.Schema({

    date:{
        type:Date,
        trim:true
    },
    sujet:{
        type:String,
        required:true,
        trim:true
    },
    candidature:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Candidatures"
    }
})

NotificationSchema.pre("save", function (next) {
    this.date = Date.now();
    next();
  })

module.exports=mongoose.model("Notifications",NotificationSchema)