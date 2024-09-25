import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Nav2 from './components/1-header/Nav2';
import Nav1 from './components/1-header/Nav1';
import ResponsiveNav from './components/1-header/ResponsiveNav';
import LoginPage from './components/paymentPage/Payment';
import Footer from './components/6-footer/Footer';
import SignInPage from './components/0-signInPage/signInPage';

function App() {
  return (
    <>
        <Nav1 />
        <Nav2 />
        <ResponsiveNav />
        <hr />
        <LoginPage />


        <br /><br /><br /><br />
        <SignInPage />
        <br /><br /><br /><br />


        <Footer />
    </>
  );
}

export default App;
