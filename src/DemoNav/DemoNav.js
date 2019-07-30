import React from 'react';
import {Link} from 'react-router-dom';
import SignUpModal from '../SignUpModal/SignUpModal'

import './demo-nav.css'

class DemoNav extends React.Component {
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
    return(
      <>
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
         <Link to="#" className="nav__link"onClick={this.handleOpenModal}><b>Sign Up</b></Link>
         <Link to="/demo" className="nav__link"><b>Water Schedule</b></Link>
         <Link to="/add-plant" className="nav__link"><b>Add Plant</b></Link>
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

  
export default DemoNav;