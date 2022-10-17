import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import EntrepriseService from '../../../Services/EntrepriseService'

function AddEntreprise() {
    const [Entreprises,setentreprises]=useState([])
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
              navigate("/Responsables")
              EntrepriseService.create(data).then(res=>{
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
         <h3 className="panel-title"><strong>Ajouter</strong> Entreprise</h3>
         <ul className="panel-controls">
           <li><a href="#" className="panel-remove"><span className="fa fa-times" /></a></li>
         </ul>
       </div>
       <div className="panel-body">
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">Prénom</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" name='firstName' onChange={OnChangehandle}/>
             </div>
             <span className="help-block">Ajouter Prénom </span>
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
           <label className="col-md-3 col-xs-12 control-label">email</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="email" className="form-control" name="email" onChange={OnChangehandle}/>
             </div>
             <span className="help-block">Ajouter email</span>
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
           <label className="col-md-3 col-xs-12 control-label">adresse entreprise</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" name="adresseE" onChange={OnChangehandle} />
             </div>
             <span className="help-block">Ajouter adresse Entreprise</span>
           </div>
          
         </div>
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">nom de l'entreprise</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" name="nom_entreprise" onChange={OnChangehandle} />
             </div>
             <span className="help-block">Ajouter nom Entreprise</span>
           </div>
          
         </div>
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">  entreprise specialité</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" name="specialité" onChange={OnChangehandle} />
             </div>
             <span className="help-block">Ajouter Entreprise specialité</span>        
           </div>
          
         </div>
        
       </div>
       
       
       <div className="panel-footer">
       <Link to="/Responsables"style={{marginTop: "3PX"}} className="btn btn-primary pull-left">Liste des Entreprises</Link>    
       <div style={{textAlign:"center"}}>
       <button className="btn btn-primary"  type="submit">envoyer</button>
       </div>
       </div>
     </div>
   </form>
 </div>
</div>
</div>
 </div> 
  )
}

export default AddEntreprise