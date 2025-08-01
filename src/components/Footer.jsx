import React from 'react';
import logo from '../assets/logo.jpg';
import { FaSquareFacebook } from 'react-icons/fa6';
import { CiTwitter, CiYoutube } from 'react-icons/ci';
import { LuInstagram } from 'react-icons/lu';
import './HeaderFooter.css';

const Footer = () => {
  return (
    <footer className="footer-new" role="contentinfo">
      <div className="footer-container container">

        {/* Brand & Social */}
        <section className="footer-section footer-brand-group" aria-label="About SideNest">
          <img src={logo} alt="SideNest Enterprises Logo" className="footer-logo" />
          <p className="footer-tagline">
            A Nest for the Next Big Thing.<br />
            Execution On-Demand.
          </p>
          <nav className="footer-social" aria-label="Social Media Links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaSquareFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <CiTwitter size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <CiYoutube size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <LuInstagram size={24} />
            </a>
          </nav>
        </section>

        {/* Contact Info */}
        <section className="footer-section" aria-labelledby="contact-info-heading">
          <h3 id="contact-info-heading">Contact Info</h3>
          <address>
            123 5th Ave,<br />New York, NY 10021<br />
            Phone: <a href="tel:+11234567890">+1 123 456 7890</a><br />
            Email: <a href="mailto:info@example.com">info@example.com</a>
          </address>
        </section>

        {/* Quick Links */}
        <nav className="footer-section" aria-label="Quick Links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </nav>

        {/* Our Services */}
        <section className="footer-section" aria-labelledby="services-heading">
          <h3 id="services-heading">Our Services</h3>
          <ul>
            <li>Commercial Roofing</li>
            <li>Residential Roofing</li>
            <li>After Storm Damage</li>
            <li>Finance & Insurance</li>
          </ul>
        </section>

      </div>

      {/* Footer Meta */}
      <div className="footer-meta" role="contentinfo">
        <div className="footer-meta-left">
          &copy; {new Date().getFullYear()} SideNest Enterprises. All rights reserved.
        </div>
        <div className="footer-meta-right">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
