import React from 'react';
import './nav1.css';
import logo from ".//../../images/toppng.com-amazon-logo-transparent-768x293.png";

export default function Nav1() {
  return (
    <div className="nav1">
      <nav className="navbar navbar-expand-lg">
        <div className="leftPart d-flex">
          <a className="navbar-brand" href="#" style={{ color: 'inherit' , paddingLeft:'10px', paddingTop:'10px' }}>
            <img className='siteLogo' src={logo} alt="logo" />
            <span style={{fontSize: '14px', color: '#ccc'}}>.eg</span>
          </a>

          <div className="country d-flex" style={{ alignItems: "center", marginLeft: '20px' }}>
            <i className="fa-solid fa-location-dot" style={{ fontSize: '16px', color: '#fff', marginRight: '5px' }}></i>
            <div id="glow-ingress-block">
              <span className="nav-line-1">Deliver to</span>
              <span className="nav-line-2">Egypt</span>
            </div>
          </div>
        </div>

        <div className="searchPart">
          <input type="text" className="searchInput" placeholder="Search Amazon" />
          <button className="searchButton"><i className="fa fa-search"></i></button>
        </div>

        <div className="rightPart d-flex">
          <div className="nav-item">
            <span className="nav-line-1">Hello, Sign in</span>
            <span className="nav-line-2">Account & Lists</span>
          </div>
          <div className="nav-item">
            <span className="nav-line-1">Returns</span>
            <span className="nav-line-2">& Orders</span>
          </div>
          <div className="nav-item cart">
            <i className="fa fa-shopping-cart"></i>
            <span className="nav-line-2">Cart</span>
          </div>
        </div>
      </nav>
    </div>
  );
}