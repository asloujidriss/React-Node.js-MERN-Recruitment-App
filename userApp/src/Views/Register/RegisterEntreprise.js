import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import EntrepriseService from '../../services/EntrepriseService'
function RegisterEntreprise() {

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
      EntrepriseService.create(data).then(res=>{
         console.log("response >>>>",res)
         setData(res.data)
         navigate("/")
       }).catch(err=>{
         console.log(err)
       })
 
         }




  return (
    <div className="container-fluid hero-wrap img" style={{ backgroundImage: 'url(images/bg_1.jpg)', zIndex: "0" }}>

    <div className="overlay" style={{ zIndex: " -2" }}></div>
    <div className='container' >
    
      <div className="login-form pt-5">
        <div className="main-div">
          <div className="panel">
          <h1 className="form-heading">S'inscrire</h1>

            <p>Veuillez saisir vos coordonnées</p>
          </div>
          <form onSubmit={onsubmithandle}>
            <div className="form-group">
              <input type="text" className="form-control"  placeholder="Prénom du Responsable"  name='firstName' onChange={OnChangehandle}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control"  placeholder="Nom du Responsable"  name="lastName"onChange={OnChangehandle} />
            </div>
            <div className="form-group">
              <input type="email" className="form-control"  placeholder="Email" name="email" onChange={OnChangehandle} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control"  placeholder="mot de passe" name="password" onChange={OnChangehandle} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control"  placeholder="Numéro" name="tel" onChange={OnChangehandle} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control"  placeholder="Adresse Entreprise"  name="adresseE" onChange={OnChangehandle} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control"  placeholder="Nom Entreprise"  name="nom_entreprise" onChange={OnChangehandle} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control"  placeholder=" Spécialité" name="specialité" onChange={OnChangehandle} />
            </div>
            <div className="forgot">
              
            </div>
            <button type="submit" className="btn btn-primary mb-3">S'inscrire</button>
          
            
            <div className='row '>
             
              <div className='col-12'>
           <Link to="/login"> <button  className="btn btn-primary">Se connecter</button></Link> 
              </div>
              
            </div>
          
          </form>
        </div>
      </div></div>
    </div>
  )
}

export default RegisterEntreprise
