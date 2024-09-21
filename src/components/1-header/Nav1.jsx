import React from 'react';
import './nav1.css';
import logo from ".//../../images/toppng.com-amazon-logo-transparent-768x293.png";

export default function Nav1() {
  return (
    <div className="nav1 ">
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'transparent', color: 'inherit', width: '100%' }}>
        <div className="leftPart d-flex ">
          <a className="navbar-brand" href="#" style={{ color: 'inherit' , alignItems: 'normal', paddingLeft:'10px', paddingTop:'20px' }}>
            <img className='siteLogo' src={logo} alt="logo" />
            <span style={{fontSize: '14px'}}>.eg</span>
          </a>

          <div className="country d-flex" style={{ alignItems: "self-end" }}>

            <div>
              <i className="fa-solid fa-location-dot"></i>
            </div>

            <div id="glow-ingress-block" >
              <span class="nav-line-1 nav-progressive-content" id="glow-ingress-line1">
                Deliver to
              </span>
              <span class="nav-line-2 nav-progressive-content" id="glow-ingress-line2">
                Egypt
              </span>
            </div>
          </div>



        </div>
      </nav >
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'transparent', color: 'inherit', width: '100%' }}>
        <div className="  ">
          center
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'transparent', color: 'inherit', width: '100%' }}>
        <div className="  ">
          right
        </div>
      </nav>
    </div >
  );
}
