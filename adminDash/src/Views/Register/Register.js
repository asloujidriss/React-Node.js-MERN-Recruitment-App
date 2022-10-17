import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CandidatService from '../../Services/CandidatService'

function Register() {

    const [data, setData] = useState({})
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const OnChangehandle = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {

        e.preventDefault()

        CandidatService.create(data)
            .then(res => {
                console.log(res)
                window.location = "/"
            }).catch(error => {
                console.log(error)
                if (error.response && error.response.status >= 400 && error.response.status <= 500) {
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
                            <div className="login-title"><strong>bienvenue</strong>,  S'inscrire</div>
                            <form action="index.html" className="form-horizontal" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" name='firstName' placeholder="prénom" onChange={OnChangehandle} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" name='lastName' placeholder="nom" onChange={OnChangehandle} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <input type="email" className="form-control" name='email' placeholder="Email" onChange={OnChangehandle} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <input type="password" className="form-control" name='password' placeholder="mot de passe" onChange={OnChangehandle} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" name='tel' placeholder="Tel" onChange={OnChangehandle} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" name='adresse' placeholder="Adresse" onChange={OnChangehandle} />
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="col-md-6">
                                        <button className="btn btn-info btn-block" type='submit'>S'inscrire</button>

                                    </div>
                                    <div className="col-md-6">
                                        <Link to="/login"> <button className="btn btn-info btn-block">Se connecter</button></Link>

                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="login-footer">
                            <div className="pull-left">
                                © 2022 Pfe
                            </div>
                            <div className="pull-right">
                                <a href="#">About</a> |
                                <a href="#">Privacy</a> |
                                <a href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register