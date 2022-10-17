const mongoose = require("mongoose")


const bcrypt= require("bcrypt")
const baseOptions = {
    discriminatorKey: 'itemtype',
    collection: 'Users'
}


UserSchema=mongoose.Schema({

    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        maxlength:[12,"password should at least 8 characters "],
        minlength:[6,"password should be more then 6 characters"]
    },

    tel: {
        type:Number,
        required:true,
        trim:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    } 
}
,baseOptions,
{timestamps:true})

UserSchema.pre("save",function(next){
    this.password=bcrypt.hashSync(this.password,10)
    next()
})

module.exports= mongoose.model("Users",UserSchema)