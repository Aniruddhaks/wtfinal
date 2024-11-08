import React from 'react';
import LoginForm from './Components/LoginForm/LoginForm';
import HomePage from './Components/HomePage/HomePage';
import EMI from './Components/Emi/Emi'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' ;
import RegForm from './Components/RegistrationForm/RegistrationForm';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/" element={<LoginForm />} /> 
        <Route path="/reg" element={<RegForm/>}/> 
        <Route path="/emi" element={<EMI/>}/> 


      </Routes>
    </Router>
  );
}

export default App
