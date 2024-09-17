import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../logo.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} className="navbar-logo" alt="Logo" />
      </div>
      <div className="navbar-links">
        {/* Use Link for internal navigation */}
        <Link to="/">Home</Link>
        <Link to="/safety">Safety & Environmental</Link>
        <Link to="/amenities">Amenities</Link>
        <Link to="/educational">Educational</Link>
      </div>
      <div className="navbar-buttons">
        <button className="navbar-signup">Sign Up</button>
        <button className="navbar-button">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
