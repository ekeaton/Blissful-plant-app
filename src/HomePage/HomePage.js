import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function HomePage() {
    return (
      <>
       <Header/>
         <section>
        <header>
            <h3>Do you forget to water your plants?</h3>
        </header>
       
        <p>We get it, having an indoor garden with beautiful lushes plants can seem difficult. But the key to plants success is water. Plants deserve to have unique water schedules. Blissful Plant reminds you to water your plants to keep them happy and healthy.</p>
      </section>

      <section>
         <header>
            <h3>Watering to much or too little is what kills houseplants</h3>
        </header>
      
        <p>With an easy to fill out form, you can list each plant and the next day to water them. You'll take the guess work out of watering your plants too little or too much.</p>
      </section>

      <section>
        <header>
            <h3>All of your Blissful Plant's in one place</h3>
        </header>
       
        <p>Your water schedule will showcase all of your plant babies and help you on stay on track with your watering goals.</p>
      </section>
      <Footer />
      </>
    )
}

export default HomePage;