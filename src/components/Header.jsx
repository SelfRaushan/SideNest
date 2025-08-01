// Header.jsx
import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import './HeaderFooter.css';
import { NavLink } from 'react-router-dom';

const NavItems = [
  {
    title: "Home",
    to: "/",
    icon: "fa-solid fa-house-user",
    cName: "nav-links",
    exact: true,
  },
  {
    title: "Services",
    to: "/services",
    icon: "fa-solid fa-briefcase",
    cName: "nav-links"
  },
  {
    title: "Resources",
    to: "/resources",
    icon: "fa-sharp fa-solid fa-circle-info",
    cName: "nav-links"
  },
  {
    title: "Pricing",
    to: "/pricing",
    icon: "fa-solid fa-tag",
    cName: "nav-links"
  },
  {
    title: "Blog",
    to: "/blog",
    icon: "fa-solid fa-blog",
    cName: "nav-links"
  },
  {
    title: "Contact",
    to: "/contact",
    icon: "fa-solid fa-address-book",
    cName: "nav-links"
  },
  {
    title: "Book a Call",
    to: "https://wa.me/1234567890",
    cName: "cta-main",
    external: true,
  }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(open => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="topbar">
      <div className="logo-area">
        <NavLink to="/">
          <img src={logo} alt="SideNest Logo" className="logo" />
        </NavLink>
      </div>

      <div className="Hamburger-Cross-Icons" onClick={handleToggle}>
        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"} aria-label="Menu Toggle" />
      </div>

      <nav className={`topnav ${menuOpen ? 'active' : ''}`}>
        <ul>
          {NavItems.map(({ title, to, icon, cName, exact, external }, idx) => (
            <li key={idx} onClick={closeMenu}>
              {external ? (
                <a href={to} target="_blank" rel="noopener noreferrer" className={cName}>
                  {icon && <i className={icon} style={{ marginRight: 6 }} aria-hidden="true"></i>}
                  {title}
                </a>
              ) : (
                <NavLink
                  to={to}
                  end={exact}
                  className={({ isActive }) => (isActive ? `${cName} active` : cName)}
                >
                  {icon && <i className={icon} style={{ marginRight: 6 }} aria-hidden="true"></i>}
                  {title}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
