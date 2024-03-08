// Footer.js

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const whatsappNumber = '6385434438'; 
  const telegramUsername = 'srilogu'; 
  const instagramUsername = 'srilogu007'; 

  return (
    <footer>
      <div className="footer-column">
        <h2>Contact</h2>
        <FaPhone /><p>Contact: 1234567890</p>
        <FaEnvelope /> <p>Email: demo@gmail.com</p>
        <FaMapMarker /><p>Address: XXXXXX , YYYYYYY, XXXXXXX,<br/> pincode-xxx xxx</p>
      </div>
      <div className="footer-column">
        <h2>Business Hours</h2>
        <p>Monday - Friday</p>
        <p>09:00 am- 07:00 pm</p>
        <p>Saturday</p>
        <p>09:00 am - 12:00 pm</p>
        <p>Sunday</p>
        <p>Closed</p>
      </div>
      <div className="footer-column">
        <h2>Social Media</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a><br />
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a><br />
          <a href={`https://www.instagram.com/${instagramUsername}`} target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a><br />
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /> YouTube</a><br />
          <a href={`https://t.me/${telegramUsername}`} target="_blank" rel="noopener noreferrer"><FaTelegram /> Telegram</a><br />
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a><br />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
