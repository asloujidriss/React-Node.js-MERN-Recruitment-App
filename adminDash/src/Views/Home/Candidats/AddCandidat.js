import React, { useState } from 'react'
import { Link, useNavigate,  } from 'react-router-dom'
import Swal from 'sweetalert2'
import CandidatService from '../../../Services/CandidatService'

function AddCandidat() {

    const [Candidats,setCandidats]=useState([])
    const [data,setData]=useState({})
    const navigate= useNavigate()
    const OnChangehandle = (e)=>{
        setData({
          ...data,
          [e.target.name] : e.target.value
        })
      
        }




    const onsubmithandle=(e)=>{
        e.preventDefault()
    
        Swal.fire({
          title: 'Souhaitez-vous enregistrer les modifications?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'sauvegarder',
          denyButtonText: `Ne pas sauvegarder`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            navigate("/candidats")
            CandidatService.create(data).then(res=>{
              console.log(res)
              setData(res.data)
            }).catch(err=>{
              console.log(err)
            })
            Swal.fire('sauvegardé!', '', 'Succès')
          } else if (result.isDenied) {
            Swal.fire('Les modifications ne sont pas enregistrées', '', 'info')
          }
        })
       
      }


  return (
    <div>
    <div className="page-content-wrap">
<div className="row">
 <div className="col-md-12">
   <form className="form-horizontal"  onSubmit={onsubmithandle}>
     <div className="panel panel-default">
       <div className="panel-heading">
         <h3 className="panel-title"><strong>Ajouter</strong> candidat</h3>
         <ul className="panel-controls">
           <li><a href="#" className="panel-remove"><span className="fa fa-times" /></a></li>
         </ul>
       </div>
       <div className="panel-body">
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">prénom</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" name='firstName' onChange={OnChangehandle}/>
             </div>
             <span className="help-block">Ajouter prénom</span>
           </div>
         </div>
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">nom</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" name="lastName"onChange={OnChangehandle}/>
             </div>
             <span className="help-block">Ajouter nom</span>
           </div>
         </div>
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">E-mail</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="email" className="form-control" name="email" onChange={OnChangehandle}/>
             </div>
             <span className="help-block">Ajouter E-mail</span>
           </div>
         </div>
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">mot de passe</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="password" className="form-control" name="password" onChange={OnChangehandle} />
             </div>
             <span className="help-block">Ajouter mot de passe</span>
           </div>
         </div>
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">numéro</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" name="tel" onChange={OnChangehandle} />
             </div>
             <span className="help-block">Ajouter numéro</span>
           </div>
         </div>
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">adresse</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" name="adresse" onChange={OnChangehandle} />
             </div>
             <span className="help-block">Ajouter adresse</span>
           </div>
         </div>
       </div>
       <div className="panel-footer">
       <Link to="/candidats"style={{marginTop: "3PX"}} className="btn btn-primary pull-left">List des candidats</Link>    

        <div style={{textAlign:"center"}}>
        <button className="btn btn-primary"  type="submit">envoyer</button></div>
       </div>
     </div>
   </form>
 </div>
</div>
</div>
 </div> 
  )
}

export default AddCandidat