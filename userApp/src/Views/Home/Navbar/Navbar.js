import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
  <div className="container-fluid px-md-4	">
   <Link to ='/'><a className="navbar-brand" >5ademni</a></Link> 
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="oi oi-menu" /> Menu
    </button>
    <div className="collapse navbar-collapse" id="ftco-nav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/browseJob" className="nav-link">offres</Link></li>
        <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
        <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
        <li className="nav-item cta mr-md-1"><a href="new-post.html" className="nav-link">Espace Candidat</a></li>
        <li className="nav-item cta cta-colored"><a href="job-post.html" className="nav-link">Espace Entreprise</a></li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar