import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import './Contact.css';
const Contact = () => {
  return (
    
      <div>
        
      <HeaderComponent/>
      <div>

      <div className="contact-container">
      <h2>Contact Information</h2>
      <p>
        <strong>Address:</strong> 14 Salon Street, AnnaNagar, Chennai,
        <p> TamilNadu-600028
        </p>

      </p>
      <p>
        <strong>Phone:</strong> 9790197852
      </p>
      <p>
        <strong>Email:</strong> theashhsalonandstudio@gmail.com
      </p>
      <p>
      Follow us on social media for bookings and offers on</p> 
      <p>daily basies</p>
      </div>
      </div>
      <FooterComponent/>
    </div>
    
  );
};

export default Contact;
