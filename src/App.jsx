import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Nav2 from './components/1-header/Nav2';
import Nav1 from './components/1-header/Nav1';

function App() {
  return (
    <>
        <Nav1 />
        <Nav2 />
    </>
  );
}

export default App;
