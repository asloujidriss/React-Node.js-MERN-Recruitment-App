// import React from 'react'
// import { Link } from 'react-router-dom'

// function Sidebar() {
//   return (
//     <div>
//     {/* START PAGE SIDEBAR */}
// <div className="page-sidebar">
// {/* START X-NAVIGATION */}
// <ul className="x-navigation">
// <li className="xn-logo">
//   <Link to="index.html"> Admin</Link>
//   <Link to="#" className="x-navigation-control" />
// </li>
// </ul>
// <li className="xn-profile">
//   <Link to="#" className="profile-mini">
   
//   </Link>
//   <div className="profile">
//     <div className="profile-image">
      
//     </div>
//     <div className="profile-data">
//       <div className="profile-data-name">Navigation</div>
     
//     </div>
   
//   </div>                                                                        
// </li>
// <br></br>
// <br></br>
// <br></br>
// <br></br>
// <li className="p-3 mb-2 bg-dark text-white">
//      <div className="profile-data-name"></div>
//   <Link to="/"><span className="fa fa-desktop" /> <span className="p-3 mb-2 bg-dark text-white">Accueil</span></Link>                        
// </li> 
// <div className="profile-data-name"></div>    
// <li className="active">
//   <Link to="/candidats"><span className="fa fa-desktop" /> <span className="xn-text">gesttion Candidats</span></Link>                        
// </li>
// <div className="profile-data-name"></div>
// <li className="active">
//   <Link to="/Responsables"><span className="fa fa-desktop" /> <span className="xn-text">gestion Entreprises</span></Link>                        
// </li>               

    
                            
  





                   

    
    

                
                  

  
                
              
           
// {/* END X-NAVIGATION */}
// </div>
// {/* END PAGE SIDEBAR */}
// </div>
//   )
// }

// export default Sidebar



import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
<div className="page-sidebar">
  {/* START X-NAVIGATION */}
  <ul className="x-navigation">
    <li className="xn-logo">
      <Link to="index.html"> Admin</Link>
      <Link to="#" className="x-navigation-control" />
    </li>
    <li className="xn-profile">
      <Link to="#" className="profile-mini">
       
      </Link>
      <div className="profile">
        <div className="profile-image">
         
        </div>
        <div className="profile-data">
         
        </div>
        <div className="profile-controls">
          
        </div>
      </div>                                                                        
    </li>
    <li className="xn-title">Navigation</li>
    <li className="active">
      <Link to="/"><span className="fa fa-desktop" /> <span className="xn-text">Accueil</span></Link>                        
    </li>                    
    <li className="xn-openable">
      <Link to="/candidats"><span className="fa fa-files-o" /> <span className="xn-text">Gestion Candidats</span></Link>
   
    </li>
    <li className="xn-openable">
      <Link to="/Responsables"><span className="fa fa-file-text-o" /> <span className="xn-text">Gestion Entreprises</span></Link>
   
    </li>
                       
                   
  
  </ul>
  {/* END X-NAVIGATION */}
</div>

    </div>
  )
}

export default Sidebar