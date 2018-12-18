import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import { FaInstagram, FaFacebookF, FaGlobe } from 'react-icons/fa'
import { Location } from '@reach/router'
import pageConfig from '../config/page-config'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Location>
          { ({ location }) => {
            const locale = location.pathname.startsWith('/es') ? 'es' : 'en' 
            return (
              <Link to={`/${locale}`} className="navbar-item" title="Simba Surf">
                <img src={logo} alt="Simba Surf" style={{ width: '200px', maxHeight: '3.5rem' }} />
              </Link>
            )
          }}
        </Location>         
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
          onClick={() => { let toggle = document.querySelector(".navbar-burger"); let menu = document.querySelector(".navbar-menu"); toggle.classList.toggle("is-active"); menu.classList.toggle("is-active"); }}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
        <Location>
            { ({ location }) => {
              const locale = location.pathname.startsWith('/es') ? 'es' : 'en' 
              return (
                <Link className="navbar-item" to={`/${locale}/location`}>
                  {pageConfig.location[locale]}
                </Link>
              )
            }}
          </Location>         
          <Location>
            { ({ location }) => {
              const locale = location.pathname.startsWith('/es') ? 'es' : 'en' 
              return (
                <Link className="navbar-item" to={`/${locale}/pricing`}>
                  {pageConfig.pricing[locale]}
                </Link>
              )
            }}
          </Location>          
          <Location>
            { ({ location }) => {
              const locale = location.pathname.startsWith('/es') ? 'es' : 'en' 
              return (
                <Link className="navbar-item" to={`/${locale}/contact`}>
                  {pageConfig.contact[locale]}
                </Link>
              )
            }}
          </Location>
        </div>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              <span className="icon">
                <FaGlobe />&nbsp;
              </span>
              <Location>
                { ({ location }) => location.pathname.startsWith('/es') ? pageConfig.lang.es : pageConfig.lang.en }
              </Location>
            </a>
            <div className="navbar-dropdown">
              <Location className="navbar-item">
                {({ location }) => {
                  const oldLocation = `${location.pathname}`
                  const newLocation = oldLocation.startsWith('es') ? `/en${oldLocation.substring(3)}` : `/es${oldLocation.substring(3)}`
                  console.log(newLocation) // not sure why this doesn't work?
                  return (
                    <Link className="navbar-item" to={location.pathname.startsWith('/es') ? '/en' : '/es'}>
                      {location.pathname.startsWith('/es') ? pageConfig.lang.en : pageConfig.lang.es}
                    </Link>
                  )
                }}
              </Location>
            </div>
          </div>
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a 
                  className="button"
                  // target="_blank"
                >
                  <span className="icon">
                    <FaInstagram />
                  </span>
                </a>
              </p>
              <p className="control">
                <a 
                  className="button"
                  // target="_blank"
                >
                  <span className="icon">
                    <FaFacebookF />
                  </span>
                </a>
              </p>                     
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
