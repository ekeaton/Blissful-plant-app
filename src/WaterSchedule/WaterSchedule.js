import React from 'react'
import DemoNav from '../DemoNav/DemoNav';
import PropTypes from "prop-types";
import BlissfulContext from '../BlissfulContext'
import config from '../config';
import './water-schedule.css';
import { format } from "date-fns";


class WaterSchedule extends React.Component {
    static defaultProps ={
        onDeletePlant: () => {},
      }
    static contextType = BlissfulContext;
    
      handleClickDelete = (id, e) => {
        console.log(e)
        e.preventDefault();
      
    
        fetch(`${config.API_ENDPOINT}/plants/${id}`, {
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
            this.context.deletePlant(id);
          })
          .catch(error => {
            console.error({ error });
          });
      };

      render() {
       
        return (
             <>
            <DemoNav/>
              <header>
                 <h1>Water Schedule</h1>
               </header>
                {this.context.plants.map(plant => {
                    return (
                        <section key={plant.id} className='card'>
                            <h2>{plant.name}</h2>
                            <section className='container'>
                                <p>{plant.note}</p>
                                <p>Water me in {plant.num_days} days</p>
                                  <p>Next watering</p>
                                  <p>{format(plant.water_date, "MM/DD/YYYY")}</p>
                            </section>
                          <button
                              className="Remove-button"
                              type="button"
                              onClick={(e) => this.handleClickDelete(plant.id , e)}
                              >
                              Remove
                               </button>
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