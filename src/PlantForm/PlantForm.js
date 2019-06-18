import React from 'react';
import DemoNav from '../DemoNav/DemoNav';
import './plant-form.css'


class PlantForm extends React.Component {
    render() {
        return (
          <>
          <DemoNav/>
          <header role="banner">
          </header>
           <section>
            <div className="form-style-5">
             <form>
                <input type="text" name="field1" placeholder="Name of Plant *"/>
                   <label htmlFor="note"><i>Optional:</i></label>
                      <textarea name="field3" placeholder="Note"></textarea>
              <p>Curious how often to water different plant types? <a href="https://www.housebeautiful.com/lifestyle/gardening/g24845510/how-much-water-plants-need/" target="_blank" rel="noopener noreferrer">Find out here</a></p>
              <br/>
              <div className="form-section">
                 <label htmlFor="water-date">Next Day to Water:</label> 
                <input type="date" name="date-month" placeholder="06" min="1" max="12" required=""/> 
              </div>
             <input type="submit" value="Create water schedule" />
            </form>
           </div>
        </section>
        </>
        )
    }
}


export default PlantForm;