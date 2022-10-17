const TestModel = require("../Models/Test_Model")
 module.exports={


    create: function (req, res) {

        const Test = new TestModel(req.body)
        Test.save(req.body, function (err, item) {

            if (err) {
                res.status(404).json({ success: false, message: "create test failed" + err, data: null })

            } else {
                res.status(201).json({ success: true, message: "test created succssefly", data: item })

            }

        })
    },

    getAll: function (req, res) {
        TestModel.find(function (err, items) {
            if (err) {
                res.status(406).json({success:false,message:"cannot get all tests",data:null})
            }else{
                res.status(201).json({success:true,message:"list of tests",data:items})
            }
        })
    },


    getbyId:function(req,res){
        TestModel.findById(req.params.id, function(err,item){
            if(err){
                res.status(406).json({success:false, message:"cannot got this test"+ err,data:null})

            }else{
                res.status(201).json({success:true, message:"this test is founded", data:item})
            }
        })
    },   


    getByname:function(req,res){
        TestModel.find({date_deb:req.query.date_deb},function(err,items){
        if (err) {
            res.status(406).json({success:false,message:"cannot get this tests by name",data:null})
        } else {
            res.status(201).json({success:true,message:" list of tests",data:items})
        }    
        })
    }, 


    update:function(req,res){
        TestModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
           if (err) {
            res.status(406).json({success:false,message:"failed to update this test",data:null})

           } else {
            res.status(200).json({success:true,message:" test updated",data:item})
           }
        })
    },

    Delete:function(req,res){
        TestModel.findByIdAndDelete(req.params.id,function(err,item){
            if(err){
                res.status(406).json({success:false,message:"failed to delete this test",data:null})

            }else{
                res.status(201).json({success:true,message:"  this test is deleted successfuly",data:item})
            }
        })
    }


 }