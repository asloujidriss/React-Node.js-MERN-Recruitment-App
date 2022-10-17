const CandidatureController = require("../Controllers/Candidature_Controller")

const route = require('express').Router()

route.post("/create",CandidatureController.create)
route.get("/getAll",CandidatureController.getAll)
route.get("/getById/:id",CandidatureController.getbyId)
route.get("/getByname",CandidatureController.getByname)
route.put("/update/:id",CandidatureController.update)
route.delete("/delete/:id",CandidatureController.Delete)




module.exports= route