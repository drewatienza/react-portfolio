import React from "react";
import { Link } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = () => (
  <div className="nav-bar">
    <span className="navbar-toggle" id="js-navbar-toggle">
      <i className="fas fa-bars"></i>
    </span>
    <Link className="logo-container" to="/">
      Drew Atienza
      {/* <Logo className='logo' /> */}
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
    </div>
  </div>
);

export default Navigation;
