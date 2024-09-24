import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Nav2 from './components/1-header/Nav2';
import Nav1 from './components/1-header/Nav1';
import ResponsiveNav from './components/1-header/ResponsiveNav';
import LoginPage from './components/0-loginPage/LoginPage';

function App() {
  return (
    <>
        <Nav1 />
        <Nav2 />
        <ResponsiveNav />
        <hr />
        <LoginPage />
    </>
  );
}

export default App;
