const Test_Controller=require("../Controllers/Test_Controller")
 const express = require ("express")
 const route = express.Router()
 route.post("/create",Test_Controller.create)
 route.get("/getAll",Test_Controller.getAll)
 route.get("/getById/:id",Test_Controller.getbyId)
 route.get("/getByname", Test_Controller.getByname)
 route.put("/update/:id", Test_Controller.update)
 route.delete("/delete/:id", Test_Controller.Delete)


 module.exports= route
