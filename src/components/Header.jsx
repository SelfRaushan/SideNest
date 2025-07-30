// Header.jsx
import React from 'react';
import logo from '../assets/logo.jpg';
import '../components/HeaderFooter.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="topbar">
      <div className="logo-area">
        <img src={logo} alt="SideNest Logo" className="logo" />
      </div>
      <nav className="topnav">
        <ul>
          <li><NavLink to="/home" end>Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/resources" className={({ isActive }) => isActive ? 'active' : ''}>Resources</NavLink></li>
          <li><NavLink to="/pricing">Pricing</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><a href="https://wa.me/1234567890" className="cta-main">Book a Call</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
