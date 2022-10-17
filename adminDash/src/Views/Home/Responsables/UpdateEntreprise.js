import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import EntrepriseService from '../../../Services/EntrepriseService'

function UpdateEntreprise() {

    const navigate=useNavigate()
    const [data,setData]=useState({})
    const {id}=useParams()
  
    const onChangehandle=(e)=>{
      setData({
        ...data,
        [e.target.name] : e.target.value
      })
    }
    const onSubmithandler=(e)=>{
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
          EntrepriseService.update(id,data).then(res=>{
            console.log(res)
          }).catch(err=>{
            console.log(err)
          })
          Swal.fire('sauvegardé!', '', 'Succès')
        } else if (result.isDenied) {
          Swal.fire('Les modifications ne sont pas enregistrées', '', 'info')
        }
      })
    }
  useEffect(() => {
      EntrepriseService.get(id).then(res=>{
          console.log(res)
          setData(res.data.data)
      }).catch(err=>{
          console.log(err)
      })
  },[])




  return (
    <div>
    <div className="page-content-wrap">
<div className="row">
 <div className="col-md-12">
   <form className="form-horizontal" onSubmit={onSubmithandler} >
     <div className="panel panel-default">
       <div className="panel-heading">
         <h3 className="panel-title"><strong>editer</strong> Entreprise</h3>
         <ul className="panel-controls">
           <li><a href="#" className="panel-remove"><span className="fa fa-times" /></a></li>
         </ul>
       </div>
       <div className="panel-body">
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">firstName</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control"  value={data.firstName} name="firstName" onChange={onChangehandle}/>
             </div>
             <span className="help-block">editer firstName</span>
           </div>
         </div>
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">lastName</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control" value={data.lastName} name="lastName" onChange={onChangehandle}/>
             </div>
             <span className="help-block">editer lastName</span>
           </div>
         </div>
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">email</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="email" className="form-control" value={data.email} name="email" onChange={onChangehandle} />
             </div>
             <span className="help-block">editer email</span>
           </div>
         </div>
        
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">numéro</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control"  value={data.tel} name="tel" onChange={onChangehandle} />
             </div>
             <span className="help-block">editer numéro</span>
           </div>
         </div>
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">adresse entreprise</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control"  value={data.adresseE} name="adresseE" onChange={onChangehandle} />
             </div>
             <span className="help-block">editer adresse Entreprise</span>
           </div>
         </div>
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label">nom  de l' entreprise</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control"  value={data.nom_entreprise} name="nom_entreprise" onChange={onChangehandle} />
             </div>
             <span className="help-block">editer nom de l'entreprise</span>
           </div>
         </div>
         <div className="form-group">
           <label className="col-md-3 col-xs-12 control-label"> entreprise specialité</label>
           <div className="col-md-6 col-xs-12">
             <div className="input-group">
               <span className="input-group-addon"><span className="fa fa-pencil" /></span>
               <input type="text" className="form-control"  value={data.specialité} name="specialité" onChange={onChangehandle} />
             </div>
             <span className="help-block">editer entreprise specialité</span>
           </div>
         </div>
       </div>
       <div className="panel-footer">
       <Link to="/Responsables" className="btn btn-primary">Liste des Entreprises</Link>
         <button className="btn btn-primary pull-right" type="submit">editer</button>
       </div>
     </div>
   </form>
 </div>
</div>
</div>
 </div>
  )
}

export default UpdateEntreprise