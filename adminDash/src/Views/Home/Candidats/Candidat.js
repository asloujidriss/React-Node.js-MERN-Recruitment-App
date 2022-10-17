import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import CandidatService from '../../../Services/CandidatService'

function Candidat() {
  const [Candidats,setCandidats]=useState([])

  const getAll=()=>{
    CandidatService.getAll().then(res=>{
      console.log("response >>>>",res)
      setCandidats(res.data.data)
    }).catch(err=>{
      console.log(err)
    })
  }



  const onDelete=(id)=>{
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'Attention',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le!'
    }).then((result) => {
      if (result.isConfirmed) {
        CandidatService.remove(id).then(res=>{
          getAll()
        })
        Swal.fire(
          'Supprimé!',
          'Votre fichier a été supprimé.',
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
        <h3 className="panel-title">Liste des candidats</h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}>id</th>
                <th width={100}>prénom</th>
                <th width={100}>nom</th>
                <th width={100}>email</th>
                <th width={100}>numéro</th>     
                <th width={100}>adresse</th>
                <th width={100}>actions</th>
              </tr>
            </thead>
            <tbody>                                            
             {Candidats.map((item,index)=>{

              return ( <tr id="trow_1">
              <td className="text-center">{index}</td>
              <td><strong>{item.firstName}</strong></td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.tel}</td>
              <td>{item.adresse} 
              </td>
              <td>
               <Link  to ={`/updatecandidat/${item._id}`}>
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
    <Link to ="/addcandidat" className='btn btn-primary '> Ajouter Candidat</Link>                                            
  </div>
</div>

    </div>
  )
}

export default Candidat
