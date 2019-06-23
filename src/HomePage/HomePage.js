import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './home-page.css'


function HomePage() {
    return (
      <>
       <Header/>
       <div className="row">
          <div className="column">
           <section className="home-card">
             <h3>Do you forget to water your plants?</h3>
              <p> The key to plants success is water. Plants deserve to have unique water schedules. Blissful Plant reminds you to water your plants to keep them happy and healthy.</p>
           </section>
          </div>
         <div className="column" >
          <section className="home-card">
            <h3>Watering too much or too little is what kills houseplants</h3>
            <p>With an easy to fill out form, you can list each plant and the next day to water them. You'll take the guess work out of watering your plants too little or too much.</p>
          </section>
         </div>

         <div className="column">
           <section className="home-card">
              <h3>All of your Blissful Plant's in one place</h3>
              <p>Your water schedule will showcase all of your plant babies and help you stay on track with your watering goals.</p>
           </section>
         </div>
       </div>
      <Footer />
      </>
    )
}

export default HomePage;