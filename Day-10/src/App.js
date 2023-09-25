import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';

import Contact from './Components/Contact';
import Services from './Components/Services';
import Appointment from './Components/Appointment';
import Dashboard from './Components/Dashboard';
import HomeComponent from './Components/HomeComponent';
import ViewAppointment from './Components/ViewAppointment';
import Terms from './Components/Terms';
import Privacy from './Components/Privacy';
import About from './Components/About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path='/home' element={<HomeComponent/>}/> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path='/dashboard' element={<Dashboard/>}/> 
        <Route path='/viewappointment' element={<ViewAppointment/>}/> 
        <Route path='/about' element={<About/>}/> 
        

      </Routes>
    </Router>
  );
}

export default App;