import React from "react";
// import { Link } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = () => (
  <div className="nav-bar">
    {/* Old Navbar */}
    {/* <span className="navbar-toggle" id="js-navbar-toggle">
      <i className="fas fa-bars"></i>
    </span>
    <Link className="logo-container" to="/">
      Drew Atienza
    </Link>
    <div className="options">
      <Link className="option" to="/about">
        ABOUT
      </Link>
      <Link className="option" to="/portfolio">
        PORTFOLIO
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <Link className="option" to="/resume">
        RESUME
      </Link>
    </div> */}

    {/* New Navbar */}
    <header className='header'>
      <a href='/' className='logo'>Drew Atienza</a>
      <input type="checkbox" className="menu-btn" id="menu-btn"/>
      <label htmlFor="menu-btn" className='menu-icon'><span className="nav-icon"></span></label>
      <ul className='menu'>
        <li><a href='/' className='link-name'>Home</a></li>
        <li><a href='/about' className='link-name'>About</a></li>
        <li><a href='/skills' className='link-name'>Skills</a></li>
        <li><a href='/portfolio' className='link-name'>Portfolio</a></li>
        <li><a href='/contact' className='link-name'>Contact</a></li>
        <li><a href='/resume' className='link-name'>Resume</a></li>
      </ul>
    </header>
  </div>
);

export default Navigation;


