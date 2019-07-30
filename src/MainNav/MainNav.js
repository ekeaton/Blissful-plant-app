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
        <nav className="main-nav-container">
        <div className="main-logo-container">
              <Link
               className="nav__link"
               to="/"
               rel="noopener noreferrer">
            <img className="plant-logo" src="https://i.imgur.com/pAcLOh0.png" alt="blissful-plant logo"/>
             </Link>
          </div>

          <div className="main-nav">
           <Link to="#" className="nav-link" onClick={this.handleOpenModal}><b>Sign Up</b></Link>
           <Link to="/demo" className="nav__link"><b>Demo</b></Link>
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
