import React from 'react';
import logo from '../assets/logo.jpg';
import { FaSquareFacebook } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { LuInstagram } from "react-icons/lu";
import './HeaderFooter.css'; // Make sure this file exists

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <footer>
      <div className="footer-container">
        {/* Logo and About */}
        <div className="footer-section">
          <div className="footer-brand">
            <img src={logo} alt="SIDENEST ENTERPRISES" className="footer-logo" />
          </div>
          <p>
            A Nest for the Next Big Thing.<br />
            Execution On-Demand.
          </p>
          <div className="footer-social">
            
            <a href=""><FaSquareFacebook /></a>
            <a href="#"><CiTwitter /></a>
            <a href="#"><CiYoutube /></a>
            <a href="#"><LuInstagram /></a>
          </div>
        </div>
        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>123 5th Ave, New York, NY 10021</p>
          <p>+1 123 456 7890</p>
          <p>info@example.com</p>
        </div>
        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        {/* Our Services */}
        <div className="footer-section">
          <h3>Our Service</h3>
          <ul>
            <li>Commercial Roofing</li>
            <li>Residential Roofing</li>
            <li>After Storm Damage</li>
            <li>Finance & Insurance</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
