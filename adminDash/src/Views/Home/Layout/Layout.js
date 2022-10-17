import React, { useEffect, useState } from 'react'
import CandidatService from '../../../Services/CandidatService'
import EntrepriseService from '../../../Services/EntrepriseService'
function Layout() {
  const [Candidats, setCandidats] = useState([]);
  const [Entreprises, setEntreprises] = useState([]);

  const GetAllc = () => {
    CandidatService.getAll()
      .then((res) => {
        console.log(res);
        setCandidats(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    GetAllc();
  }, []);


  const GetAlle = () => {
    EntrepriseService.getAll()
      .then((res) => {
        console.log(res);
        setEntreprises(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    GetAlle();
  }, []);

  
  return (
    <div>
    {" "}
    <ul className="breadcrumb">
      <li>
        <a href="#"></a>
      </li>
      <li className="active">Acceuil</li>
    </ul>
    <div className="page-content-wrap">
      {/* START WIDGETS */}
      <div className="row">
        <div className="col-md-3">
          {/* START WIDGET SLIDER */}
          <div className="widget widget-default widget-carousel">
            <div className="owl-carousel" id="owl-example">
              <div>
                <div className="widget-title">utilisateures total </div>
                <div className="widget-subtitle"></div>
                <div className="widget-int">{Object.keys(Candidats).length + Object.keys(Entreprises).length}</div>
              </div>
              <div>
                <div className="widget-title">Candidats</div>
                <div className="widget-subtitle"></div>
                <div className="widget-int">{Object.keys(Candidats).length}</div>
              </div>
              <div>
                <div className="widget-title">Entreprises</div>
                <div className="widget-subtitle"></div>
                <div className="widget-int">{Object.keys(Entreprises).length}</div>
              </div>
            </div>
            <div className="widget-controls">
              <a
                href="#"
                className="widget-control-right widget-remove"
                data-toggle="tooltip"
                data-placement="top"
                title="Remove Widget"
              >
                <span className="fa fa-times" />
              </a>
            </div>
          </div>
          {/* END WIDGET SLIDER */}
        </div>
        <div className="col-md-3">
          {/* START WIDGET MESSAGES */}
          <div
            className="widget widget-default widget-item-icon"
            onclick="location.href='pages-messages.html';"
          >
            <div className="widget-item-left">
              <span className="fa fa-envelope" />
            </div>
            <div className="widget-data">
              <div className="widget-int num-count">{Object.keys(Entreprises).length}</div>
              <div className="widget-title">Entreprises sont inscrits dans votre application</div>
              <div className="widget-subtitle"></div>
            </div>
            <div className="widget-controls">
              <a
                href="#"
                className="widget-control-right widget-remove"
                data-toggle="tooltip"
                data-placement="top"
                title="Remove Widget"
              >
                <span className="fa fa-times" />
              </a>
            </div>
          </div>
          {/* END WIDGET MESSAGES */}
        </div>
        <div className="col-md-3">
          {/* START WIDGET REGISTRED */}
          <div
            className="widget widget-default widget-item-icon"
            onclick="location.href='pages-address-book.html';"
          >
            <div className="widget-item-left">
              <span className="fa fa-user" />
            </div>
            <div className="widget-data">
              <div className="widget-int num-count">{Object.keys(Candidats).length}</div>
              <div className="widget-title"> candidats sont inscrits dans votre application</div>
              <div className="widget-subtitle"></div>
            </div>
            <div className="widget-controls">
              <a
                href="#"
                className="widget-control-right widget-remove"
                data-toggle="tooltip"
                data-placement="top"
                title="Remove Widget"
              >
                <span className="fa fa-times" />
              </a>
            </div>
          </div>
          {/* END WIDGET REGISTRED */}
        </div>
        <div className="col-md-3">
          {/* START WIDGET CLOCK */}
          <div className="widget widget-info widget-padding-sm">
            <div className="widget-big-int plugin-clock">00:00</div>
            <div className="widget-subtitle plugin-date">Loading...</div>
            <div className="widget-controls">
              <a
                href="#"
                className="widget-control-right widget-remove"
                data-toggle="tooltip"
                data-placement="left"
                title="Remove Widget"
              >
                <span className="fa fa-times" />
              </a>
            </div>
            <div className="widget-buttons widget-c3">
              <div className="col">
                <a href="#">
                  <span className="fa fa-clock-o" />
                </a>
              </div>
              <div className="col">
                <a href="#">
                  <span className="fa fa-bell" />
                </a>
              </div>
              <div className="col">
                <a href="#">
                  <span className="fa fa-calendar" />
                </a>
              </div>
            </div>
          </div>
          {/* END WIDGET CLOCK */}
        </div>
      </div>
      {/* END WIDGETS */}
      <div className="row">
        <div className="col-md-4">
          {/* START USERS ACTIVITY BLOCK */}
          
          {/* END USERS ACTIVITY BLOCK */}
        </div>
        <div className="col-md-4">
          {/* START VISITORS BLOCK */}
         
          {/* END VISITORS BLOCK */}
        </div>
        <div className="col-md-4">
          {/* START PROJECTS BLOCK */}
         
          {/* END SALES BLOCK */}
        </div>
        <div
          className="common-modal modal fade"
          id="common-Modal1"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-content">
            <ul className="list-inline item-details">
              <li>
                <a href="http://themifycloud.com/downloads/janux-premium-responsive-bootstrap-admin-dashboard-template/">
                  Admin templates
                </a>
              </li>
              <li>
                <a href="http://themescloud.org">Bootstrap themes</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          {/* START SALES & EVENTS BLOCK */}
         
          {/* END SALES & EVENTS BLOCK */}
        </div>
      </div>
      {/* START DASHBOARD CHART */}
    
      {/* END DASHBOARD CHART */}
    </div>
  </div>
  )
}

export default Layout