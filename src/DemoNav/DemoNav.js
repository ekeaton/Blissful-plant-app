import React from 'react';
import { Link } from 'react-router-dom'
import './demo-nav.css'

function DemoNav() {
    return(
      <nav className="navbar">
        <div className="nav-menu">
         <Link to="/demo" className="nav__link">Water Schedule</Link>
         <Link to="/form" className="nav__link">Add Plant</Link>
        </div>
      </nav>
    )
}


  
export default DemoNav;