import React from 'react';
import { Link } from 'react-router-dom'
import './main-nav.css'

function MainNav() {
    return(
      <nav className="navbar">
      <div className="logo">
            <Link
             className="nav__link"
             to="/"
             rel="noopener noreferrer">
           Logo
           </Link>
        </div>

        <div className="nav-menu">
         <Link to="/signup" className="nav-link">Sign Up</Link>
         <Link to="/demo" className="nav__link">Demo</Link>
        </div>
      </nav>
    )
}



  
export default MainNav;