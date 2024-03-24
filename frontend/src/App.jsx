import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage'
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from './components/Common/RoutesConfig';
import NavBar from './components/Common/NavBar';

function App() {

  return (
    <>
     <Router>
      <NavBar />
      <RoutesConfig />
    </Router>
    </>
  )
}

export default App
