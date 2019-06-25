import React from 'react';
import {Link} from 'react-router-dom';
import SignUpModal from '../SignUpModal/SignUpModal'

import './main-nav.css'

class MainNav extends React.Component {
    state = {
      showModal: false
    }
    handleOpenModal = () => {
      this.setState({ showModal: true })
    }
    handleCloseModal = () => {
      this.setState({ showModal: false })
    }
    render() {
      // Return different navigation between home page and demo
      return (
        <>
        <nav className="navbar">
        <div className="logo">
              <Link
               className="nav__link"
               to="/"
               rel="noopener noreferrer">
            <img className="nav-logo" src="https://i.imgur.com/pAcLOh0.png" alt="blissful-plant logo"/>
             </Link>
          </div>
  
          <div className="nav-menu">
           <Link to="#" className="nav-link" onClick={this.handleOpenModal}>Sign Up</Link>
           <Link to="/demo" className="nav__link">Demo</Link>
          </div>
        </nav>
          <SignUpModal
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
            handleCloseModal={this.handleCloseModal}
          />
        </>
      )
    }
  }
  
  
export default MainNav;


