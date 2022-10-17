import React, { useState } from 'react'
import Loginservice from '../../Services/Loginservice'

function Login() {

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
      
      Loginservice.create(data)
      .then(res=>{
      console.log(res)
      window.location="/"
      localStorage.setItem("isAuthenticated", "true");
      }).catch(error=>{
        console.log(error)
        if(error.response && error.response.status >=400 && error.response.status <=500){
          setError(error.response.data.message)
        }
        
      }) 

      }



    return (
        <div>
            <div className="login-container">
                <div className="login-container">
                    <div className="login-box animated fadeInDown">
                       
                        <div className="login-body">
                            <div className="login-title"><strong>bienvenue</strong>,  connectez vous</div>
                            <form className="form-horizontal"  onSubmit={handleSubmit} >
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <input type="email" className="form-control" placeholder="email" required name="email" value={data.email} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <input type="password" className="form-control" placeholder="mot de passe" required name="password" value={data.password} onChange={handleChange}/>
                                        {error && <div className="invalid-feedback err">{error}</div>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-6">
                                       
                                    </div>
                                    <div className="col-md-6">
                                        <button className="btn btn-info btn-block">Se connecter</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="login-footer">
                            <div className="pull-left">
                               
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login