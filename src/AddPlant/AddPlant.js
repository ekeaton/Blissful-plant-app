import React from 'react';
import DemoNav from '../DemoNav/DemoNav';
import BlissfulContext from '../BlissfulContext'
import './plant-form.css'
import config from '../config'
import PropTypes from 'prop-types';

const {API_BASE_URL} = config;


class AddPlant extends React.Component {
   static contextType = BlissfulContext;

   constructor(props){
       super(props);
       this.state = {
         name: " ",
         note: " ",
         num_days: null,
         water_date: new Date()
       }
   }

   updatePlantName(name) {
       this.setState({name})
   }

   updatePlantNote(note) {
      this.setState({note})
   }

   updatePlantDays(num_days) {
      this.setState({num_days})
   }

   updatePlantWater(water_date){
      this.setState({water_date})
   }

   
   handleSubmit = e => {
       e.preventDefault()
       const plant = (({ name, note, id, water_date, num_days }) => ({
         name,
         note,
         id,
         water_date,
         num_days
       }))(this.state);

       fetch(`${API_BASE_URL}/plants`, {
         method: 'POST',
         headers: {
           'content-type': 'application/json'
         },
         body: JSON.stringify(plant),
       })
         .then(res => {
           if (!res.ok)
             return res.json().then(e => Promise.reject(e))
           return res.json()
         })
         .then(plant => {
           this.context.addPlant(plant)
           this.props.history.push(`/demo/${plant.id}`)
         })
         .catch(error => {
           console.error({ error })
         })
     }

   render () {
       return (
         <>
         <DemoNav/>
         <header role="banner">
         </header>
          <section className="plant-form-section">
           <div className="form-style-5">
            <form id="plant-form"  className='plant-form' onSubmit={this.handleSubmit}>
               <input type="text" name="field1" placeholder="Name of Plant *" onChange={e => this.updatePlantName(e.target.value)}/>

                  <label htmlFor="note"><i>Optional:</i></label>
                     <textarea name="field3" placeholder="Note" onChange={e => this.updatePlantNote(e.target.value)}></textarea>
             <p>Curious how often to water different plant types? <a href="https://www.housebeautiful.com/lifestyle/gardening/g24845510/how-much-water-plants-need/" target="_blank" rel="noopener noreferrer">Find out here</a></p>
             <br/>

             <div className="form-section">
             <label htmlFor="number_days">In how many days?</label>
                 <input type="number" placeholder="06" min="1" max="31" required="" onChange={e => this.updatePlantDays(e.target.value)}/>

                <label htmlFor="water-date">Next Day to Water:</label> 
               <input type="date" name="date-month" placeholder="06" min="1" max="12" required="" onChange={e => this.updatePlantWater(e.target.value)}/> 
             </div>
            <button type="submit" className="create-btn">Create water schedule</button>
            <button type="reset" className="res-btn">Reset</button>
           </form>
          </div>
       </section>
       </>
   )
   }
}

export default AddPlant;

AddPlant.defaultProps = {
   history: PropTypes.Object,
 }