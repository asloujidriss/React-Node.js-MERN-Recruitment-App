const multer = require("multer")

const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './storage')
    },
    filename: function (req, file, cb) {
      const images = Date.now() + '-' + file.originalname
      cb(null, file.fieldname + '-' + images)
    }
  })
  
  const upload = multer({
   storage: Storage ,
   limits:{fileSize:1024*1024*1024*10},
   FilterFile:function(req, file, cb){
       if (file.mimetype==="image/png"|| 
       file.mimetype==="image/jpg"||file.mimetype==="image/jpeg"
       ||
       file.mimetype==="application/pdf") {
           cb(null,true)
       } else {
           cb(new Error("plase enter fit file",false ))
           
       }
   }
})
module.exports=upload