const req = require("express/lib/request")
const Cv_Controller = require("../Controllers/Cv_Controller")

const route = require("express").Router()
const upload= require("../Middlewares/UploadFile")


route .post("/create",upload.single("File"),Cv_Controller.create)
route.get("/getAll",Cv_Controller.getAll)
route.get("/getById/:id",Cv_Controller.getbyId)
route.get("/getByname",Cv_Controller.getByname)
route.put("/update/:id",Cv_Controller.update)
route.delete("/delete/:id",Cv_Controller.Delete)





module.exports=route