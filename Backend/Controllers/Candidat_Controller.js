const CandidatModel= require("../Models/Candidat_Model")
const nodemailer=require("nodemailer")
const bcrypt=require("bcrypt")

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "acc2c193e39855",
      pass: "17e1b813369321"
    }
  });

  module.exports= {
    register:function(req,res){
        

        const Candidat = new CandidatModel(req.body)
        Candidat.save(req.body,function(err,item){
            if (err) {
                res.status(404).json({ success: false, message: "failed to register"+err , data: null })
            } else {

                transport.sendMail({
                    from: "myapp@gmail.com",
                    to: item.email,
                    cc: 'khalifachelbi06@gmail.com',
                    bcc: "ilyesfattoum93@gmail.com",
                    subject: "Welcome " + item.firstName,
                    text: "bonjour mr ",
                    html: `<!DOCTYPE html>
                    <html>
                    <head>
                      <meta charset="utf-8">
                      <meta http-equiv="x-ua-compatible" content="ie=edge">
                      <title>Welcome Email</title>
                    </head>
                    <body>
                      <h2>Hello ${item.firstName +" "+ item.lastName}! </h2>
                      <p>We're glad to have you on board at ${item.email}. </p>
                      <p>We're glad to have you on board at it gate</p>
                       
                    </body>
                    </html>`,             
                }, function(err, info) {
                    if (err) {
                        console.log("error:", err)
                    } else {
                        console.log("Email Send successufly:", info + reponse)
                    }
                })

                res.status(201).json({ success: true, message: "candidat registred succsuflly", data: item })

            }
        })
    },

    getAll: function (req, res) {
        CandidatModel.find(function (err, items) {
            if (err) {
                res.status(406).json({ success: false, message: "cannot get all  candidats", data: null })
            } else {
                res.status(201).json({ success: true, message: "list of candidats", data: items })
            }
        })
    },

    getbyId:function(req,res){
        CandidatModel.findById(req.params.id,function(err,item){
            if(err){
                res.status(406).json({success:false,message:"cannot get this candidat",data:null})

            }else{
                res.status(201).json({success:true,message:"  this candidat is founded",data:item})
            }
        })
    },


    getByname:function(req,res){
        CandidatModel.find({firstName:req.query.firstName},function(err,items){
        if (err) {
            res.status(406).json({success:false,message:"cannot get this candidats by name"+err,data:null})
        } else {

            res.status(201).json({success:true,message:" list of candidats",data:items})
        }    
        })
    },
    update:function(req,res){
        // if (req.body.password) {
        //     req.body.password = bcrypt.hashSync(
        //       req.body.password,10
        //     ).toString();
        //   }
        
        CandidatModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
           if (err) {
            res.status(406).json({success:false,message:"failed to update candidat",data:null})

           } else {
            res.status(200).json({success:true,message:" candidat updated",data:item})
           }
        })
    },
    delete:function(req,res){
        CandidatModel.findByIdAndDelete(req.params.id,{new:true},function(err,item){
           if (err) {
            res.status(406).json({success:false,message:"failed to delete Candidat"+err,data:null})

           } else {
            res.status(200).json({success:true,message:" candidat deleted",data:item})
           }
        })
    },

  }