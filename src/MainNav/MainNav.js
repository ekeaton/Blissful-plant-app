import React from 'react';

import './main-nav.css'

function MainNav() {
    return(
      <nav className="navbar">
      <div className="logo">
            <a
             className="nav__link"
             href="/"
             rel="noopener noreferrer">
           Logo
           </a>
        </div>

        <div className="nav-menu">
         <a href="/signup" className="nav-link">Sign Up</a>
         <a href="/demo" className="nav__link">Demo</a>
        </div>
      </nav>
    )
}



  
export default MainNav;