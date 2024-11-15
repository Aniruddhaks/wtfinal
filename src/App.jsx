import React from 'react';
import LoginForm from './Components/LoginForm/LoginForm';
import HomePage from './Components/HomePage/HomePage';
import EMI from './Components/Emi/Emi'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' ;
import RegForm from './Components/RegistrationForm/RegistrationForm';

import LuxuryCars from './Components/display/luxury';
import BMW from './Components/car/luxury/car1';
import BENZ from './Components/car/luxury/car2';
import AUDI from './Components/car/luxury/car3';
import LEXUS from './Components/car/luxury/car4';
import LAND from './Components/car/luxury/car5';

import Hatchback from './Components/display/hatchback';
import AMG from './Components/car/hatchback/car11';
import SWIFT from './Components/car/hatchback/car12';
import I20 from './Components/car/hatchback/car13';
import BALENO from './Components/car/hatchback/car14';
import ALTROZ from './Components/car/hatchback/car15';

import Sedan from './Components/display/sedan';
import CITY from './Components/car/sedan/car6';
import VERNA from './Components/car/sedan/car7';
import VIRTUS from './Components/car/sedan/car8';
import SLAVIA from './Components/car/sedan/car9';
import CIAZ from './Components/car/sedan/car10';

import Suv from './Components/display/suv';
import FORTUNER from './Components/car/suv/car16';
import MERIDIAN from './Components/car/suv/car17';
import GLOSTER from './Components/car/suv/car18';
import SCORPIO from './Components/car/suv/car19';
import HARRIER from './Components/car/suv/car20';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/" element={<LoginForm />} /> 
        <Route path="/reg" element={<RegForm/>}/> 
        <Route path="/emi" element={<EMI/>}/> 

        <Route path="/luxury" element={<LuxuryCars/>}/>  
        <Route path="/bmw" element={<BMW/>}/>  
        <Route path="/benz" element={<BENZ/>}/>  
        <Route path="/audi" element={<AUDI/>}/>  
        <Route path="/lexus" element={<LEXUS/>}/>  
        <Route path="/land" element={<LAND/>}/>  

        <Route path="/hatchback" element={<Hatchback/>}/>  
        <Route path="/amg" element={<AMG/>}/>  
        <Route path="/swift" element={<SWIFT/>}/>  
        <Route path="/i20" element={<I20/>}/>  
        <Route path="/bal" element={<BALENO/>}/>  
        <Route path="/alt" element={<ALTROZ/>}/>  

        <Route path="/sedan" element={<Sedan/>}/>  
        <Route path="/city" element={<CITY/>}/>  
        <Route path="/verna" element={<VERNA/>}/>  
        <Route path="/virtus" element={<VIRTUS/>}/>  
        <Route path="/slavia" element={<SLAVIA/>}/>  
        <Route path="/ciaz" element={<CIAZ/>}/> 

        <Route path="/suv" element={<Suv/>}/>  
        <Route path="/fortuner" element={<FORTUNER/>}/>  
        <Route path="/meridian" element={<MERIDIAN/>}/>  
        <Route path="/gloster" element={<GLOSTER/>}/>  
        <Route path="/scorpio" element={<SCORPIO/>}/>  
        <Route path="/harrier" element={<HARRIER/>}/> 







      </Routes>
    </Router>
  );
}

export default App
