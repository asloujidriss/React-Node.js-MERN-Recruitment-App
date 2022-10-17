const NotificationController=require("../Controllers/Notification_Controller")
const route=require("express").Router()


route.post("/create",NotificationController.create)
route.get("/getAll",NotificationController.getAll)
route.get("/getById/:id",NotificationController.getbyId)
route.get("/getByname",NotificationController.getByname)
route.put("/update/:id",NotificationController.update)
route.delete("/delete/:id",NotificationController.Delete)



module.exports= route
