import React from 'react';
import './responsiveNav.css';
import logo from "../../images/toppng.com-amazon-logo-transparent-768x293.png";

export default function ResponsiveNav() {
    return (
        <div className="responsive-nav">
            <div className="bg-gray-800 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <button className="text-white text-2xl mr-4">
                            <i className="fas fa-bars"></i>
                        </button>
                        <a className="navbar-brand" href="#">
                            <img className='siteLogo' src={logo} alt="logo" />
                            <span className="text-gray-400">.eg</span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="text-white mr-4">Sign in</a>
                        <button className="text-white text-2xl">
                            <i className="fas fa-user"></i>
                        </button>
                        <button className="text-white text-2xl ml-4">
                            <i className="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
                <div className="mt-4 flex items-center">
                    <input type="text" className="p-2 rounded-l-md w-full" placeholder="amazon" />
                    <button className="bg-yellow-500 p-2 rounded-r-md">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div className="mt-4 text-white">
                    <i className="fas fa-map-marker-alt"></i>
                    <span className="ml-2">Deliver to Egypt</span>
                    <i className="fa-solid fa-angle-down" style={{ fontSize: '12px', color: '#ccc', marginLeft: '5px' }}></i>
                </div>
            </div>
        </div>
    );
}
