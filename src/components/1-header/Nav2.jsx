import React from 'react';
import './nav2.css';

export default function Nav2() {
  return (
    <div className="nav2">
      <nav className="navbar" style={{ backgroundColor: '#232f3e', color: 'white' }}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          style={{ border: 'none' }} // Remove border here
        >
          <span className="navbar-toggler-icon" style={{ backgroundColor: 'transparent', border: 'none' }}>
            <i className="fas fa-bars" style={{ color: 'white' }}></i>
          </span>
        </button>
        <a className="navbar-brand" href="#" style={{ color: 'inherit' }}>Offcanvas navbar</a>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ backgroundColor: 'white' }}
        >
          <div className="offcanvas-body" style={{ color: 'inherit' }}>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'inherit' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'inherit' }}>Link</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: 'inherit' }}
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#" style={{ color: 'inherit' }}>Action</a></li>
                  <li><a className="dropdown-item" href="#" style={{ color: 'inherit' }}>Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#" style={{ color: 'inherit' }}>Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ backgroundColor: 'transparent', color: 'inherit', border: 'none' }} // Remove border here
              />
              <button className="btn" type="submit" style={{ color: 'inherit', backgroundColor: 'transparent', border: 'none' }}>Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
