import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import EntrepriseService from '../../../Services/EntrepriseService'
function Responsable() {

  const [Entreprises,setentreprises]=useState([])

  const getAll=()=>{
    EntrepriseService.getAll().then(res=>{
      console.log("response >>>>",res)
      setentreprises(res.data.data)
    }).catch(err=>{
      console.log(err)
    })
  }

  const onDelete=(id)=>{
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière!!",
      icon: 'Attention',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le!'
    }).then((result) => {
      if (result.isConfirmed) {
        EntrepriseService.remove(id).then(res=>{
          getAll()
        })
        Swal.fire(
          'Supprimé!',
          'Votre fichier a été supprimé..',
          'Succès'
        )
      }
    })
  }

  useEffect(() =>{
    getAll()
    },[])

  return (
    <div>
   <div className="row">
  <div className="col-md-12">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Liste des Entreprises</h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}>id</th>
                <th width={100}>nom_entreprise</th>
                <th width={100}>specialité</th>
                <th width={100}>email Responsable</th>
                <th width={100}>numéro</th>
                <th width={100}>adresse Entreprise</th>
                <th width={100}>actions</th>
              </tr>
            </thead>
            <tbody>                                            
             {Entreprises.map((item,index)=>{

              return ( <tr id="trow_1">
              <td className="text-center">{index}</td>
              <td><strong>{item.nom_entreprise}</strong></td>
              <td>{item.specialité}</td>
              <td>{item.email}</td>
              <td>{item.tel}</td>
              <td>{item.adresseE} 
              </td>
              <td>
               <Link  to ={`/updateentreprise/${item._id}`}>
               <button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /></button>
               </Link>
                <button className="btn btn-danger btn-rounded btn-sm" onClick={()=>onDelete(item._id)}><span className="fa fa-times" /></button>
              </td>
            </tr>)
             })
             }
            
              
             
            </tbody>
          </table>
        </div>                                
      </div>
    </div> 
    <Link to ="/Addentreprise" className='btn btn-primary'> Ajouter Entreprise</Link>                                               
  </div>
</div>

    </div>
  )
}

export default Responsable