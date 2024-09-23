
import React from 'react';
import './nav2.css';
import school from ".//../../images/2407GH097_BTS_EG_SWM_Generic_EN._CB566106446_.jpg"

export default function Nav2() {
  return (
    <div className="nav2">
      <nav className="navbar2">
        <div className="navbar2-left">
          <button className="navbar2-toggler" type="button">
            <i className="fas fa-bars"></i>
          </button>
          <a className="nav-link" href="#">All</a>
          <a className="nav-link" href="#">Today's Deals</a>
          <a className="nav-link" href="#">Prime <i className="fas fa-caret-down"></i></a>
          <a className="nav-link" href="#">Mobile Phones</a>
          <a className="nav-link" href="#">Electronics</a>
          <a className="nav-link" href="#">Appliances</a>
          <a className="nav-link" href="#">Video Games</a>
          <a className="nav-link" href="#">Fashion</a>
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">Grocery</a>
          <a className="nav-link" href="#">Toys & Games</a>
          <a className="nav-link" href="#">Perfumes</a>
        </div>
        <div className="navbar2-right">
          <div className="sale-banner">
            <img src={school} alt="Back to School Sale banner" />
          </div>
         
        </div>
      </nav>
    </div>
  );
}