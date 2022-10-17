const OffreModel = require("../Models/Offre_Model")

module.exports = {
    create: function (req, res) {

        const offre = new OffreModel(req.body)
        offre.save(req.body, function (err, item) {

            if (err) {
                res.status(404).json({ success: false, message: "create offre failed" + err, data: null })

            } else {
                res.status(201).json({ success: true, message: "offre created succssefly", data: item })

            }

        })
    },
    getAlloffre: function (req, res) {
        OffreModel.find(function (err, items) {
            if (err) {
                res.status(406).json({success:false,message:"cannot get all offres",data:null})
            }else{
                res.status(201).json({success:true,message:"list of offres",data:items})
            }
        })
    },

    getbyId:function(req,res){
        OffreModel.findById(req.params.id, function(err,item){
            if(err){
                res.status(406).json({success:false, message:"cannot got this offre"+ err,data:null})

            }else{
                res.status(201).json({success:true, message:"this offre is founded", data:item})
            }
        })
    },
    getByname:function(req,res){
        OffreModel.find({post:req.query.post},function(err,items){
        if (err) {
            res.status(406).json({success:false,message:"cannot get this offre by name",data:null})
        } else {
            res.status(201).json({success:true,message:" list of offres",data:items})
        }    
        })
    }, 

    update:function(req,res){
        OffreModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
           if (err) {
            res.status(406).json({success:false,message:"failed to update this offre",data:null})

           } else {
            res.status(200).json({success:true,message:" offre updated",data:item})
           }
        })
    },
    Delete:function(req,res){
        OffreModel.findByIdAndDelete(req.params.id,function(err,item){
            if(err){
                res.status(406).json({success:false,message:"failed to delete this offre",data:null})

            }else{
                res.status(201).json({success:true,message:"  this offre is deleted successfuly",data:item})
            }
        })
    }

}

