import React from 'react'
import DemoNav from '../DemoNav/DemoNav';
import './water-schedule.css'

function WaterSchedule(props) {
  const {plants} = props.plants;
  return (
          <>
          <DemoNav/>
          <header role="banner">
              <h1>Water Schedule</h1>
          </header>
          <>
          {plants.map(plant => {
              return (
                  <section key={plant.id} className='card'>
                      <h4>{plant.name}</h4>
                      <section className='container'>
                          <p>{plant.note}</p>
                            <p>Next watering</p>
                            <p>{plant.water_date.toString()}</p>
                            <input type="button" value="Edit"/>
                            <input type="button" value="Delete"/>
                      </section>
                  </section>
              )
          })}

          </>
     </>
  )
}   

export default WaterSchedule;