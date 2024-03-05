// Footer.js

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-column">
     <h2>Contact</h2>
     <FaPhone /><p>Contact: 7373328642</p>
     <FaEnvelope /> <p>Email: mpdkarthick@gmail.com</p>
     <FaMapMarker /><p>Address: 24 Mettupalayam, Elumathur post, Modakuruchi via, Erode-638104</p>
      </div>
      <div className="footer-column">
        <h2>Business Hours</h2>
        <p>Monday - Friday</p>
        <p>09:00 am- 07:00 pm</p>
        <p>Saturday</p>
        <p>09:00 am 12:00 pm</p>
        <p>Closed</p>
      </div>
      <div className="footer-column">
         
      </div>
    </footer>
  );
};

export default Footer;
