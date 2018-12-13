import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/en" className="navbar-item" title="Logo">
          <img src={logo} alt="Simba Surf" style={{ width: '190px', maxHeight: '2.5rem' }} />
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/en/location">
          Location
        </Link>
        <Link className="navbar-item" to="/en/pricing">
          Pricing
        </Link>
        <Link className="navbar-item" to="/en/contact">
          Contact
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="."
          // target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <FaInstagram />
          </span>
        </a>
        <a
          className="navbar-item"
          href="."
          // target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <FaFacebookF />
          </span>
        </a>
        <Link className="navbar-item" to="/en/contact">
          <span className="icon">
            <FaWhatsapp />
          </span>
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
