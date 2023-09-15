import React from 'react';
import { Link } from 'react-router-dom'; 


const HeaderComponent = () => {
  return (
    <header>
    <h1>SENORIA SALON AND STYLING</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default HeaderComponent;