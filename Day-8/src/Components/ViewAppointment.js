import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import './ViewAppointment.css';


const ViewAppointment = () => {
  // Retrieve appointments from local storage
  const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

  return (
    <div>
    <HeaderComponent/>
    <div>

      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <strong>Name:</strong> {appointment.name}<br />
            <strong>Email:</strong> {appointment.email}<br />
            <strong>Phone:</strong> {appointment.phone}<br />
            <strong>Date:</strong> {appointment.selectedDate}<br />
            <strong>Time:</strong> {appointment.selectedTime}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
      <FooterComponent/>
    </div>
  );
};

export default ViewAppointment;