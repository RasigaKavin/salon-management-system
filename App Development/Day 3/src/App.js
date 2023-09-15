import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Route and Routes
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';


function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}


export default App;
