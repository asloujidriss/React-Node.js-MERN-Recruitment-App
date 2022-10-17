import React from 'react'
import { Link } from 'react-router-dom'

function Layout() {
  return (
   <div>
  <div className="hero-wrap img" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
    <div className="overlay" />
    <div className="container">
      <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-center">
        <div className="col-md-10 d-flex align-items-center ftco-animate">
          <div className="text text-center pt-5 mt-md-5">
            <p className="mb-4">Trouvez des opportunités d'emploi et de carrière</p>
            <h1 className="mb-5">Le moyen le plus simple d'obtenir votre nouvel emploi</h1>
            <div className="ftco-counter ftco-no-pt ftco-no-pb">
              <div className="row">
                <div className="col-md-4 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text d-flex">
                      <div className="icon mr-2">
                        <span className="flaticon-worldwide" />
                      </div>
                      <div className="desc text-left">
                        <strong className="number" data-number={46}>0</strong>
                        <span>Countries</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text d-flex">
                      <div className="icon mr-2">
                        <span className="flaticon-visitor" />
                      </div>
                      <div className="desc text-left">
                        <strong className="number" data-number={450}>0</strong>
                        <span>Companies</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text d-flex">
                      <div className="icon mr-2">
                        <span className="flaticon-resume" />
                      </div>
                      <div className="desc text-left">
                        <strong className="number" data-number={80000}>0</strong>
                        <span>Active Employees</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ftco-search my-md-5">
              <div className="row">
                <div className="col-md-12 nav-link-wrap">
                  <div className="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active mr-md-1" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Find a Job</a>
                    <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Find a Candidate</a>
                  </div>
                </div>
                <div className="col-md-12 tab-wrap">
                  <div className="tab-content p-4" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                      <form action="#" className="search-job">
                        <div className="row no-gutters">
                          <div className="col-md mr-md-2">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="icon"><span className="icon-briefcase" /></div>
                                <input type="text" className="form-control" placeholder="eg. Garphic. Web Developer" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md mr-md-2">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="select-wrap">
                                  <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                  <select name id className="form-control">
                                    <option value>Category</option>
                                    <option value>Full Time</option>
                                    <option value>Part Time</option>
                                    <option value>Freelance</option>
                                    <option value>Internship</option>
                                    <option value>Temporary</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md mr-md-2">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="icon"><span className="icon-map-marker" /></div>
                                <input type="text" className="form-control" placeholder="Location" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <button type="submit" className="form-control btn btn-primary">Search</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                      <form action="#" className="search-job">
                        <div className="row">
                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="icon"><span className="icon-user" /></div>
                                <input type="text" className="form-control" placeholder="eg. Adam Scott" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="select-wrap">
                                  <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                  <select name id className="form-control">
                                    <option value>Category</option>
                                    <option value>Full Time</option>
                                    <option value>Part Time</option>
                                    <option value>Freelance</option>
                                    <option value>Internship</option>
                                    <option value>Temporary</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="icon"><span className="icon-map-marker" /></div>
                                <input type="text" className="form-control" placeholder="Location" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <button type="submit" className="form-control btn btn-primary">Search</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <span className="subheading">offres d'emplois</span>
          
        </div>
      </div>
      <div className="row">
    
    <div className='col-6'>
    <div className="job-post-item p-4 d-block d-lg-flex align-items-center" style={{    border: "3px solid #ededed"}}>
                      <div className="one-third mb-4 mb-md-0">
                        <div className="job-post-item-header align-items-center">
                          <span className="subadge">Internship</span>
                          <h2 className="mr-3 text-black"><a href="#">Frontend Development</a></h2>
                       
                        </div>
                        <div className="job-post-item-body d-block d-md-flex">
                          <div className="mr-3"><span className="icon-layers" /> <a href="#">Facebook, Inc.</a></div>
                          <div><span className="icon-my_location" /> <span>Western City, UK</span></div>
                        </div>
                      </div>
                      <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                        <div>
                          <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                            <span className="icon-heart" />
                          </a>
                        </div>
                        <a href="job-single.html" className="btn btn-primary py-2">Apply Job</a>
                      </div>
      </div>
       
    </div>

    <div className='col-6'>
    <div className="job-post-item p-4 d-block d-lg-flex align-items-center" style={{    border: "3px solid #ededed"}}>
                      <div className="one-third mb-4 mb-md-0">
                        <div className="job-post-item-header align-items-center">
                          <span className="subadge">Internship</span>
                          <h2 className="mr-3 text-black"><a href="#">Frontend Development</a></h2>
                        

                        </div>
                        <div className="job-post-item-body d-block d-md-flex">
                          <div className="mr-3"><span className="icon-layers" /> <a href="#">Facebook, Inc.</a></div>
                          <div><span className="icon-my_location" /> <span>Western City, UK</span></div>
                        </div>
                      </div>
                      <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                        <div>
                          <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                            <span className="icon-heart" />
                          </a>
                        </div>
                        <a href="job-single.html" className="btn btn-primary py-2">Apply Job</a>
                      </div>
      </div>
       
    </div>

    <div className='col-6'>
    <div className="job-post-item p-4 d-block d-lg-flex align-items-center" style={{    border: "3px solid #ededed"}}>
                      <div className="one-third mb-4 mb-md-0">
                        <div className="job-post-item-header align-items-center">
                          <span className="subadge">Internship</span>
                          <h2 className="mr-3 text-black"><a href="#">Frontend Development</a></h2>
                         

                        </div>
                        <div className="job-post-item-body d-block d-md-flex">
                          <div className="mr-3"><span className="icon-layers" /> <a href="#">Facebook, Inc.</a></div>
                          <div><span className="icon-my_location" /> <span>Western City, UK</span></div>
                        </div>
                      </div>
                      <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                        <div>
                          <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                            <span className="icon-heart" />
                          </a>
                        </div>
                        <a href="job-single.html" className="btn btn-primary py-2">Apply Job</a>
                      </div>
      </div>
       
    </div>
    <div className='col-6'>
    <div className="job-post-item p-4 d-block d-lg-flex align-items-center" style={{    border: "3px solid #ededed"}}>
                      <div className="one-third mb-4 mb-md-0">
                        <div className="job-post-item-header align-items-center">
                          <span className="subadge">Internship</span>
                          <h2 className="mr-3 text-black"><a href="#">Frontend Development</a></h2>
                         
                        </div>
                        <div className="job-post-item-body d-block d-md-flex">
                          <div className="mr-3"><span className="icon-layers" /> <a href="#">Facebook, Inc.</a></div>
                          <div><span className="icon-my_location" /> <span>Western City, UK</span></div>
                        </div>
                      </div>
                      <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                        <div>
                          <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                            <span className="icon-heart" />
                          </a>
                        </div>
                        <a href="job-single.html" className="btn btn-primary py-2">Apply Job</a>
                      </div>
      </div>
       

       
    </div>

    <div className='col-6'>
    <div className="job-post-item p-4 d-block d-lg-flex align-items-center" style={{    border: "3px solid #ededed"}}>
                      <div className="one-third mb-4 mb-md-0">
                        <div className="job-post-item-header align-items-center">
                          <span className="subadge">Internship</span>
                          <h2 className="mr-3 text-black"><a href="#">Frontend Development</a></h2>
                         

                        </div>
                        <div className="job-post-item-body d-block d-md-flex">
                          <div className="mr-3"><span className="icon-layers" /> <a href="#">Facebook, Inc.</a></div>
                          <div><span className="icon-my_location" /> <span>Western City, UK</span></div>
                        </div>
                      </div>
                      <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                        <div>
                          <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                            <span className="icon-heart" />
                          </a>
                        </div>
                        <a href="job-single.html" className="btn btn-primary py-2">Apply Job</a>
                      </div>
      </div>
       
    </div>
    <div className='col-6'>
    <div className="job-post-item p-4 d-block d-lg-flex align-items-center" style={{    border: "3px solid #ededed"}}>
                      <div className="one-third mb-4 mb-md-0">
                        <div className="job-post-item-header align-items-center">
                          <span className="subadge">Internship</span>
                          <h2 className="mr-3 text-black"><a href="#">Frontend Development</a></h2>
                         
                        </div>
                        <div className="job-post-item-body d-block d-md-flex">
                          <div className="mr-3"><span className="icon-layers" /> <a href="#">Facebook, Inc.</a></div>
                          <div><span className="icon-my_location" /> <span>Western City, UK</span></div>
                        </div>
                      </div>
                      <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                        <div>
                          <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                            <span className="icon-heart" />
                          </a>
                        </div>
                        <a href="job-single.html" className="btn btn-primary py-2">Apply Job</a>
                      </div>
      </div>
       

       
    </div>


    <div style={{textAlign:"center" ,     textAlign: "center",
    border: "1px solid",
    backgroundColor: "#206dfb",
    color: 'white !important',
    margin: "auto",
    marginTop: "18px",}}>
    <Link to="/browseJob" class="nav-link" style={{color:"white"}}>voir tout les offres</Link>
    </div>
      </div>
    </div>
  </section>
  <section className="ftco-section services-section">
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block">
            <div className="icon"><span className="flaticon-resume" /></div>
            <div className="media-body">
              <h3 className="heading mb-3">Search Millions of Jobs</h3>
              <p>A small river named Duden flows by their place and supplies.</p>
            </div>
          </div>      
        </div>
        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block">
            <div className="icon"><span className="flaticon-team" /></div>
            <div className="media-body">
              <h3 className="heading mb-3">Easy To Manage Jobs</h3>
              <p>A small river named Duden flows by their place and supplies.</p>
            </div>
          </div>    
        </div>
        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block">
            <div className="icon"><span className="flaticon-career" /></div>
            <div className="media-body">
              <h3 className="heading mb-3">Top Careers</h3>
              <p>A small river named Duden flows by their place and supplies.</p>
            </div>
          </div>      
        </div>
        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block">
            <div className="icon"><span className="flaticon-employees" /></div>
            <div className="media-body">
              <h3 className="heading mb-3">Search Expert Candidates</h3>
              <p>A small river named Duden flows by their place and supplies.</p>
            </div>
          </div>      
        </div>
      </div>
    </div>
  </section>

 
  
  <section className="ftco-section-parallax">
    <div className="parallax-img d-flex align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
            <h2>Subcribe to our Newsletter</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            <div className="row d-flex justify-content-center mt-4 mb-4">
              <div className="col-md-12">
                <form action="#" className="subscribe-form">
                  <div className="form-group d-flex">
                    <input type="text" className="form-control" placeholder="Enter email address" />
                    <input type="submit" defaultValue="Subscribe" className="submit px-3" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Layout