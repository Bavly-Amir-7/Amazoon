import React from 'react';
import './nav1.css';
import logo from ".//../../images/Cover-1170x600-removebg-preview.png";

export default function Nav1() {
  return (
    <div className="nav1 ">
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'transparent', color: 'inherit', width: '100%' }}>
        <div className="leftPart d-flex ">
          <a className="navbar-brand" href="#" style={{ color: 'inherit' }}>
            <img className='siteLogo' src={logo} alt="logo" />
          </a>
        test
        </div>
      </nav>
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
    </div>
  );
}
