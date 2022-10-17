const CandidatController = require ("../Controllers/Candidat_Controller")

const route = require ("express").Router()

route.post("/register",CandidatController.register)
route.get("/getAll",CandidatController.getAll)
route.get("/getByid/:id",CandidatController.getbyId)
route.get("/getByname",CandidatController.getByname)
route.put("/update/:id",CandidatController.update)
route.delete("/delete/:id",CandidatController.delete)



module.exports=route
