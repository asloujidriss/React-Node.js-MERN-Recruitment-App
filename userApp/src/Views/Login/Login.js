import './Login.css'
import LoginService from '../../services/LoginService'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default () => {     
  
  const [data,setData] = useState({
    email:"",
    password:""})
  const [error,setError] =useState("")
  
  console.log(data)
  
  const handleChange = ({currentTarget:input})=>{
  
    setData({...data,[input.name]:input.value})
    
  }

       
  const handleSubmit = (e)=>{
      
    e.preventDefault()
    LoginService.create(data)
    .then(res=>{
    console.log(res)
    window.location="/"
    }).catch(error=>{
      console.log(error)
      if(error.response && error.response.status >=400 && error.response.status <=500){
        setError(error.response.data.message)
      }
      
    }) 

    }

  return (
    <>
             
      <div className="container-fluid hero-wrap img"style={{ backgroundImage: 'url(images/bg_1.jpg)', zIndex: "0" }} >

        <div className="overlay" style={{ zIndex: " -2" }}></div>
        <div className='container' >

          <div className="login-form pt-5" >
            <div className="main-div">
              <div className="panel">
              <h1 className="form-heading">Se connecter</h1>

                <p>Veuillez saisir votre email et votre mot de passe</p>
              </div>
              <form  onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="email" className="form-control"  placeholder="adresse Email" required name="email" value={data.email} onChange={handleChange} />

                </div>
                <div className="form-group">
                  <input type="password" className="form-control"  placeholder="mot de passe" required name="password" value={data.password} onChange={handleChange} />
                  {error && <div className="   err">{error}</div>}
                </div>
                <div className="forgot">
                  <a href="">mot de passe oublié?</a>
                </div>
                <button type="submit" className="btn btn-primary">Se connecter</button>
                <div className="forgot mt-3">
                  <a href="">S'inscrire?</a>
                </div>
                
                <div className='row '>
                 
                  <div className='col-6'>
               <Link to ="/registerc"> <button  className="btn btn-primary">Candidat</button></Link> 
                  </div>
                  <div className='col-6'>
                <Link to="/registere"> <button  className="btn btn-primary">
                    <a href="" style={{color:"white"}}>Entreprise</a></button></Link> 
                  </div>
                </div>
              
              </form>
            </div>
          </div></div>
      </div>

    </>
  )
}