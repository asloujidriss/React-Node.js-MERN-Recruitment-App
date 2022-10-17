const CandidatureModel= require("../Models/Candidature_Model")

module.exports=  {

    create:function(req,res){
       const candidature= new CandidatureModel(req.body)
       candidature.save(req.body,function(err,item){
           if (err) {
            res.status(404).json({ success: false, message: "create candidature failed" + err, data: null })

           } else {
            res.status(201).json({ success: true, message: "create candidature succssefly", data: item })

           }
           
       })
    },

    getAll: function (req, res) {
        CandidatureModel.find(function (err, items) {
            if (err) {
                res.status(406).json({success:false,message:"cannot get all candidatures",data:null})
            }else{
                res.status(201).json({success:true,message:"list of candidatures",data:items})
            }
        })
    },


    getbyId:function(req,res){
        CandidatureModel.findById(req.params.id, function(err,item){
            if(err){
                res.status(406).json({success:false, message:"cannot got this candidature"+ err,data:null})

            }else{
                res.status(201).json({success:true, message:"this candidature is founded", data:item})
            }
        })
    }, 
    
    getByname:function(req,res){
        CandidatureModel.find({date:req.query.date},function(err,items){
        if (err) {
            res.status(406).json({success:false,message:"cannot get this candidature by name",data:null})
        } else {
            res.status(201).json({success:true,message:" list of candidatures",data:items})
        }    
        })
    }, 

    update:function(req,res){
        CandidatureModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
           if (err) {
            res.status(406).json({success:false,message:"failed to update this candidature",data:null})

           } else {
            res.status(200).json({success:true,message:" candidature updated",data:item})
           }
        })
    },
    Delete:function(req,res){
        CandidatureModel.findByIdAndDelete(req.params.id,function(err,item){
            if(err){
                res.status(406).json({success:false,message:"failed to delete this candidature",data:null})

            }else{
                res.status(201).json({success:true,message:"  this candidature is deleted successfuly",data:item})
            }
        })
    }
}