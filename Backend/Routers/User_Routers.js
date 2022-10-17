const User_Controller = require("../Controllers/User_Controller")

const route = require("express").Router()

route.post("/login",User_Controller.login)
route.post("/refreshToken",User_Controller.refreshtoken)
route.post("/logout",User_Controller.logout)




module.exports=route