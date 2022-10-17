import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Loginservice from '../../Services/Loginservice'

function Home() {
  const [data,setData]= useState({})


  const handleClick = (e)=>{
      
    e.preventDefault()
    Loginservice.logout(data)
    .then(res=>{
    console.log(res)
    window.location="/login"
    localStorage.clear()
    }).catch(error=>{
      console.log(error)
    }) 
    }
  return (
    <div>
      {/* START PAGE CONTAINER */}
      <div className="page-container">
        <Sidebar />

        {/* PAGE CONTENT */}
        <div className="page-content">
          {/* START X-NAVIGATION VERTICAL */}
          <ul className="x-navigation x-navigation-horizontal x-navigation-panel">
            {/* TOGGLE NAVIGATION */}
            <li className="xn-icon-button">
              <a href="#" className="x-navigation-minimize">
                <span className="fa fa-dedent" />
              </a>
            </li>
            <Header />
          </ul>

          <Outlet></Outlet>

        </div>
       
      </div>
     
      <div
        className="message-box animated fadeIn"
        data-sound="alert"
        id="mb-signout"
      >
        <div className="mb-container">
          <div className="mb-middle">
            <div className="mb-title">
              <span className="fa fa-sign-out" />  <strong>Se déconnecter</strong> ?
            </div>
            <div className="mb-content">
              <p>êtes-vous sur de se déconnecter?</p>
              <p>
              Appuyez sur Non si vous souhaitez continuer à travailler. Appuyez sur Oui pour vous déconnecter
               utilisateur actuel.
              </p>
            </div>
            <div className="mb-footer">
              <div className="pull-right">
              <button onClick={handleClick} className="btn btn-success btn-lg">
                  Oui
               </button>
              <button   className="btn btn-default btn-lg mb-control-close">
                  Non
                </button> 
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END MESSAGE BOX*/}
    </div>
  )
}

export default Home