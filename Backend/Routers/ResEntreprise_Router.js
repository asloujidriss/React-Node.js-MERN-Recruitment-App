const ResEntrepriseController= require ("../Controllers/ResEntreprise_Controller")

const route = require ("express").Router()

route.post("/register",ResEntrepriseController.register)
route.get("/getAll",ResEntrepriseController.getAll)
route.get("/getByid/:id",ResEntrepriseController.getbyId)
route.get("/getByname",ResEntrepriseController.getByname)
route.put("/update/:id",ResEntrepriseController.update)
route.delete("/delete/:id",ResEntrepriseController.delete)




module.exports= route