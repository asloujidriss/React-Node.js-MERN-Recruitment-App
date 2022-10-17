const NotificationModel= require("../Models/Notification_Model")

module.exports={

    create:function(req,res){
        const notification= new NotificationModel(req.body)
        notification.save(req.body,function(err,item){
            if (err) {
             res.status(404).json({ success: false, message: "create notification failed" + err, data: null })
 
            } else {
             res.status(201).json({ success: true, message: " notification created succssefly", data: item })
 
            }
            
        })
     },
 


     getAll: function (req, res) {
        NotificationModel.find(function (err, items) {
            if (err) {
                res.status(406).json({success:false,message:"cannot get all notifications",data:null})
            }else{
                res.status(201).json({success:true,message:"list of notifications",data:items})
            }
        })
    },


    getbyId:function(req,res){
        NotificationModel.findById(req.params.id, function(err,item){
            if(err){
                res.status(406).json({success:false, message:"cannot got this notification"+ err,data:null})

            }else{
                res.status(201).json({success:true, message:"this notification is founded", data:item})
            }
        })
    }, 

    getByname:function(req,res){
        NotificationModel.find({date:req.query.date},function(err,items){
        if (err) {
            res.status(406).json({success:false,message:"cannot get this notification by name",data:null})
        } else {
            res.status(201).json({success:true,message:" list of notification",data:items})
        }    
        })
    }, 

    update:function(req,res){
        NotificationModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
           if (err) {
            res.status(406).json({success:false,message:"failed to update this notification",data:null})

           } else {
            res.status(200).json({success:true,message:" candidature notification",data:item})
           }
        })
    },
    Delete:function(req,res){
        NotificationModel.findByIdAndDelete(req.params.id,function(err,item){
            if(err){
                res.status(406).json({success:false,message:"failed to delete this notification",data:null})

            }else{
                res.status(201).json({success:true,message:"  this notification is deleted successfuly",data:item})
            }
        })
    }
}