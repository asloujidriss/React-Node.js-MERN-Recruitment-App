const CVModel= require("../Models/Cv_Model")


module.exports= {

    create: function (req, res) {
        req.body['File']=req.file.filename
        const cv = new CVModel(req.body)
        cv.save(req.body, function (err, item) {

            if (err) {
                res.status(404).json({ success: false, message: "create cv failed" + err, data: null })

            } else {
                res.status(201).json({ success: true, message: "create cv succssefly", data: item })

            }

        })
    },
    getAll: function (req, res) {
        CVModel.find(function (err, items) {
            if (err) {
                res.status(406).json({success:false,message:"cannot get all cvs",data:null})
            }else{
                res.status(201).json({success:true,message:"list of cvs",data:items})
            }
        })
    },

    getbyId:function(req,res){
        CVModel.findById(req.params.id, function(err,item){
            if(err){
                res.status(406).json({success:false, message:"cannot got this cv"+ err,data:null})

            }else{
                res.status(201).json({success:true, message:"this cv is founded", data:item})
            }
        })
    },  
    getByname:function(req,res){
        CVModel.find({date:req.query.date},function(err,items){
        if (err) {
            res.status(406).json({success:false,message:"cannot get this cv by name",data:null})
        } else {
            res.status(201).json({success:true,message:" list of cvs",data:items})
        }    
        })
    }, 

    update:function(req,res){
        CVModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
           if (err) {
            res.status(406).json({success:false,message:"failed to update this cv",data:null})

           } else {
            res.status(200).json({success:true,message:" cv updated",data:item})
           }
        })
    },
    Delete:function(req,res){
        CVModel.findByIdAndDelete(req.params.id,function(err,item){
            if(err){
                res.status(406).json({success:false,message:"failed to delete this cv",data:null})

            }else{
                res.status(201).json({success:true,message:"  this cv is deleted successfuly",data:item})
            }
        })
    }
}