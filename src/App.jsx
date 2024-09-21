import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import PersistentDrawerLeft from './components/1-header/Nav'; // Import the drawer component

function App() {
  return (
    <>
      <div id="up" className="container-fluid">
        <PersistentDrawerLeft /> {/* Use the PersistentDrawerLeft component */}
      </div>
    </>
  );
}

export default App;
