import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './job.css'
function JobDetails() {
    return (
        <div>
            <Navbar />

            <div className="hero-wrap hero-wrap-2" style={{ backgroundImage: 'url("images/bg_1.jpg")' }} data-stellar-background-ratio="0.5">
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end justify-content-start">
                        <div className="col-md-12 ftco-animate text-center mb-5">
                            <p className="breadcrumbs mb-0"><span className="mr-3"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>About</span></p>
                            <h1 className="mb-3 bread">Job Details</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container'>
                <div className='col-12'>
                    <div className="top-annonce">
                        <div className="  col-md-8" style={{margin: "auto"}}>
                            <h1 className="details-header__title "> Ingénieur Géotechnique</h1>
                            <ul className=" ">
                                <li className="topLi"> SOTUVER </li>
                                <li className="topLi"> Zaghouan, Tunisie </li>
                                <li className="topLi"> Il'y a 40 minutes</li>
                            </ul>
                        </div>
                       
                        <div className="job-top-wrapper">
                            <div className="clearfix">
                                <div className="job-left-side"> <button type="button" className="btn btn-apply btn-primary btn-lg btn-block btn btn-primary" href data-toggle="modal"  data-bs-toggle="modal" data-bs-target="#exampleModal" style={{width: "21%",}}
                                > Postuler maintenant </button>
                                </div>
                                
                            </div>
                        </div>
                        <div className="clear" />
                    </div>

                </div>
            </div>
        
{/* Modal */}
<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">choisir ton cv</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <input name="file" type="file" required/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">fermer</button>
        <button type="button" className="btn btn-primary">envoyer</button>
      </div>
    </div>
  </div>
</div>

<div className='container'>
    <div className='col-12'>
        <div className='top-annonce'>
        <div class="detail-offre ">

<div>
  <div className="infos_job_details">
    
    <div className="col-md-12">
      <dl>
        <dt>Type d'emploi désiré :</dt>
        <dd>CDI, CDD, Temps plein</dd>
      </dl>
    </div>
   
     
     
   
    
    <div className="clear" />
  </div>
  <h3 className="details-body__title">Description de l'emploi</h3>
  <div className="details-body__content content-text"><p>En tant qu’ingénieur Géotechnique&nbsp; vos missions consisteront à :&nbsp;<br />- Préparer, participer ou réaliser les reconnaissances de terrain in situ et en laboratoire (toutes reconnaissances géologiques appliquées à l’éboulement rocheux, géotechniques ou géophysiques) <br />- Traiter et mettre en forme les données acquises sur le terrain <br />- Participer au dimensionnement d’ouvrages géotechniques et rédiger les rapports d’étude ;<br />- Superviser les travaux, suivre les réunions de chantier et établir les comptes rendus</p></div>
 
  <div className="clear" />
</div>
</div>
</div>
</div>
</div>


 <Footer/>
        </div>
    )
}

export default JobDetails