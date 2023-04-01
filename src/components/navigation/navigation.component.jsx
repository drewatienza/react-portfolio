import React from "react";

import "./navigation.styles.scss";

const Navigation = () => (
  <div className="nav-bar">
    <header className='header'>
      <a href='/' className='logo'>Drew Atienza</a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className='menu-icon'><span className="nav-icon"></span></label>
      <ul className='menu'>
        <li><a href='/' className='link-name'>Home</a></li>
        <li><a href='/about' className='link-name'>About</a></li>
        <li><a href='/portfolio' className='link-name'>Portfolio</a></li>
        <li><a href='/contact' className='link-name'>Contact</a></li>
      </ul>
    </header>
  </div>
);

export default Navigation;


