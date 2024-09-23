import React from 'react';
import './nav1.css';
import logo from "../../images/toppng.com-amazon-logo-transparent-768x293.png";


export default function Nav1() {
  return (
    <div className="nav1">
      <nav className="navbar navbar-expand-lg">
        <div className="leftPart d-flex align-items-center">
          <a className="navbar-brand d-flex align-items-center" href="#" style={{ color: 'inherit', paddingLeft: '10px', paddingTop: '10px' }}>
            <img className='siteLogo' src={logo} alt="logo" />
            <span style={{ fontSize: '14px', color: '#ccc' }}>.eg</span>
            <i className="fa-solid fa-angle-down" style={{ fontSize: '12px', color: '#ccc', marginLeft: '5px' }}></i>
          </a>

          <div className="country d-flex align-items-center" style={{ marginLeft: '20px' }}>
            <i className="fa-solid fa-location-dot" style={{ fontSize: '16px', color: '#fff', marginRight: '5px' }}></i>
            <div id="glow-ingress-block">
              <span className="nav-line-1">Deliver to</span>
              <span className="nav-line-2">Egypt</span>
            </div>
          </div>
        </div>

        <div className="searchPart d-flex align-items-center">
          <select className="searchSelect">
            <option>All</option>
          </select>
          <input type="text" className="searchInput" placeholder='Search Amazon.eg' />
          <button className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>

        <div className="rightPart d-flex ">
          <a href="/-/en/customer-preferences/edit" className="nav-a d-flex align-items-center">
            <div className="d-flex align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg"
                alt="Egypt Flag"
                style={{ width: '20px', height: '15px', marginRight: '5px' }}
              />
              <div style={{ color: 'white' }}>EN</div>
              <span style={{
                visibility: 'visible',
                marginLeft: '2px',
                fontSize: '8px',
                marginTop: '10px',
              }}>
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>
          </a>

          <div className="nav-item">
            <span className="nav-line-1">Hello, Sign in</span>
            <span className="nav-line-2">Account & Lists</span>
          </div>
          <div className="nav-item">
            <span className="nav-line-2">Orders</span>
          </div>
          <div className="nav-item cart d-flex align-items-center position-relative">
            <i className="fa fa-shopping-cart"></i>
            <span className="cart-count position-absolute">0</span>
            <span className="nav-line-2 ml-2">Cart</span>
          </div>
        </div>
      </nav>
    </div>
  );
}