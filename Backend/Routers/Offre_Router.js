const express = require ("express")

const route = express.Router()

const OffreController = require("../Controllers/Offre_Controller")

route.post("/create", OffreController.create)
route.get("/getAll", OffreController.getAlloffre)
route.get("/getById/:id", OffreController.getbyId)
route.get("/getByname", OffreController.getByname)
route.put("/update/:id", OffreController.update)
route.delete("/delete/:id", OffreController.Delete)









module.exports=route
