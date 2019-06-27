import React from 'react';
import {Link} from 'react-router-dom';

import './demo-nav.css'

function DemoNav() {
    return(
      <nav className="demo-nav-container">
         <div className="demo-logo-container">
              <Link
               className="nav__link"
               to="/"
               rel="noopener noreferrer">
            <img className="plant-logo" src="https://i.imgur.com/pAcLOh0.png" alt="blissful-plant logo"/>
             </Link>
          </div>
        <div className="demo-nav">
         <Link to="/demo" className="nav__link"><b>Water Schedule</b></Link>
         <Link to="/add-plant" className="nav__link"><b>Add Plant</b></Link>
        </div>
      </nav>
    )
}


  
export default DemoNav;