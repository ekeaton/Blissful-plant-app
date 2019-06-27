import React from 'react';
import { Route, Switch } from 'react-router-dom'
import MainNav from './MainNav/MainNav';
import WaterSchedule from './WaterSchedule/WaterSchedule'
import './App.css';
import SignUpModal from './SignUpModal/SignUpModal';
import HomePage from './HomePage/HomePage';
import AddPlant from './AddPlant/AddPlant';
import config from './config';
import BlissfulContext from './BlissfulContext';
import ErrorBoundary from "./ErrorBoundary";
import Footer from './Footer/Footer';



class App extends React.Component {

  state = { 
    plants: [],
  }

  componentDidMount(){
		const plantRes = fetch(`${config.API_ENDPOINT}/plants`, {
				method:'GET',
			});
	
		
		Promise.all([plantRes])
		.then (responses => Promise.all(responses.map(res => res.json())))

		Promise.all([
			fetch(`${config.API_ENDPOINT}/plants`)
		])
		.then (([plantRes]) => {
			return Promise.all([
				plantRes.json()
				])
		})
		 
		.then(([plants]) => {
			this.setState({ plants })
		})
	}

	
  handleDeletePlant = id => {
    let updatedPlants = this.state.plants.filter(plant => plant.id !== id);
    this.setState({
      plants: updatedPlants,
    
    });
  };

  	
  render() {
    const value = {
			plants: this.state.plants,	
      deletePlant: this.handleDeletePlant,
      addPlant: this.handleAddPlant,
     
	
		}
  
  return (
    <BlissfulContext.Provider value={value}>
    <div className="App app-background">
     <MainNav/>
      <main className="main-content">
      <Switch>
      <ErrorBoundary>
        <Route 
          exact path='/' 
          component={HomePage} />
        <Route 
          path='/signup-modal' 
          component={SignUpModal} />
        <Route
          path='/demo'
          component={WaterSchedule}
          />
        <Route 
           path='/add-plant' 
           component={AddPlant}/>
        </ErrorBoundary>
       </Switch>
       </main>
       <Footer />
      </div>
    </BlissfulContext.Provider>
  )
 }
}

export default App;
