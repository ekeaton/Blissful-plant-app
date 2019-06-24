import React from 'react'
import DemoNav from '../DemoNav/DemoNav';
import PropTypes from "prop-types";
import BlissfulContext from '../BlissfulContext'
import config from '../config';
import './water-schedule.css'

const {API_BASE_URL} = config;


class WaterSchedule extends React.Component {
    static defaultProps ={
        onDeletePlant: () => {},
      }
    static contextType = BlissfulContext;
    
      handleClickDelete = e => {
        e.preventDefault();
        const plantId = this.props.id
        console.log(plantId)
    
        fetch(`${API_BASE_URL}/plants/${plantId}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json"
          }
        })
          .then(res => {
            if (!res.ok) return res.json().then(error => Promise.reject(error));
            return null; //res.json();
          })
          .then(() => {
            this.context.deletePlant(plantId);
            this.props.onDeletePlant(plantId)
          })
          .catch(error => {
            console.error({ error });
          });
      };
    
        render() {
       
        return (
             <>
            <DemoNav/>
              <header role="banner">
                 <h1>Water Schedule</h1>
               </header>
                {this.context.plants.map(plant => {
                    return (
                        <section key={plant.id} className='card'>
                            <h4>{plant.name}</h4>
                            <section className='container'>
                                <p>{plant.note}</p>
                                <p>Water me in {plant.num_days} days</p>
                                  <p>Next watering</p>
                                  <p>{plant.water_date.toString()}</p>
                            </section>
                           </section>
                    )
                })}
            </>
        )
      }   
    }

    WaterSchedule.propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        note: PropTypes.string,
        num_days: PropTypes.number,
        onDeleteNote: PropTypes.func
      };
      
export default WaterSchedule;