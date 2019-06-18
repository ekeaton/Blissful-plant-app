import React from 'react';

import './demo-nav.css'

function DemoNav() {
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
         <a href="/demo" className="nav__link">Water Schedule</a>
         <a href="/form" className="nav__link">Add Plant</a>
        </div>
      </nav>
    )
}


  
export default DemoNav;