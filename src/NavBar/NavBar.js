import React from 'react';
import './nav-bar.css'

function NavBar() {
    return(
    <header className='header'>
      <nav className="navbar">
        <div className="logo">
            <a
             className="nav__link"
             href="https://blissful-plant-app.ekeaton.now.sh"
             target="_blank"
             rel="noopener noreferrer"
             >
              <img className="nav-logo" src="https://i.imgur.com/GHlSnmo.png'" alt="blissful-plant logo"/>
           </a>
        </div>
        <div className="nav-menu">
         <a className="nav__link" href="#sign-up">Sign Up</a>
         <a className="nav__link" href="#sign-up">Demo</a>
        </div>
      </nav>
    </header>
    )
}


  
export default NavBar;