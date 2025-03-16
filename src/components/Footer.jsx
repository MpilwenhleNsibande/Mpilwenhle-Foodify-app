import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// Defining the Footer component to display at the bottom of the page
const Footer = () => {
  return (
    <footer className="footer">
      <h2>Let's Connect</h2>
      <div className="social-icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
      </div>
      <p>© 2025 Foodify. Created with love by Mpilwenhle.</p>
    </footer>
  );
};

export default Footer;
