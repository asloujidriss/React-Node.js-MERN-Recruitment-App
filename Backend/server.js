const express = require("express")
const app = express()
const dotenv=require("dotenv")
const database=require("./Config/dataBase")
require("dotenv").config()
const cors = require("cors")
const morgan =require("morgan")





app.use(express.json())
app.use(morgan('tiny'))

app.use(express.urlencoded({ extended: false }))
var corsOption={
    origen:"http://localhost:3000",
    optionsSuccessStatus:200    
}

app.use(cors("corsOption"))
const offre = require("./Routers/Offre_Router")
const test = require("./Routers/Test_Router")
const cv =require("./Routers/Cv_Router")
const candidature= require("./Routers/Candidature_Router")
const notification= require("./Routers/Notification_Router")
const candidat= require("./Routers/Candidat_Router")
const resEntreprise= require("./Routers/ResEntreprise_Router")
const user= require("./Routers/User_Routers")

app.use("/offre", offre)
app.use("/test",test)
app.use("/cv",cv)
app.use("/candidature",candidature)
app.use("/notification",notification)
app.use("/usersc",candidat)
app.use("/usersr",resEntreprise)
app.use("/user",user)




const  PORT=process.env.PORT

app.listen(PORT,function(){
    console.log(`server is runninig on http://localhost:${PORT}`)
})