import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';

import Contact from './Components/Contact';
import Services from './Components/Services';
import Appointment from './Components/Appointment';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path='/dashboard' element={<Dashboard/>}/> 

      </Routes>
    </Router>
  );
}

export default App;