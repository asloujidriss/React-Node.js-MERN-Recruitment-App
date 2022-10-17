import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
<div className="error-container">
  <div className="error-code">404</div>
  <div className="error-text">page non trouvée</div>
  <div className="error-subtext">Malheureusement, nous rencontrons des difficultés pour charger la page que vous recherchez. Veuillez patienter un instant et réessayer ou utiliser l'action ci-dessous.</div>
  <div className="error-actions">                                
    <div className="row">
      <div className="col-md-6">
       <Link to = "/"> <button className="btn btn-info btn-block btn-lg" onclick="document.location.href = 'index.html';">Retour au page Acceuil</button></Link>
      </div>
      <div className="col-md-6">
        <button className="btn btn-primary btn-block btn-lg" onclick="history.back();"> page précedente</button>
      </div>
    </div>                                
  </div>
 
 
</div>

    </div>
  )
}

export default Error