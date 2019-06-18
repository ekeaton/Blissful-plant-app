import React from 'react';
import { Route, Switch } from 'react-router-dom'
import MainNav from './MainNav/MainNav';
import WaterSchedule from './WaterSchedule/WaterSchedule'
import './App.css';
import SignUp from './SignUp/SignUp';
import HomePage from './HomePage/HomePage';
import PlantForm from './PlantForm/PlantForm';
import store from './store';


class App extends React.Component {

  state = { 
    store: store
  }




  render() {
  const {store} = this.state;
  return (
    <div className="App">
     <MainNav/>
      <main className="app-background">
      <Switch>
        <Route 
          exact path='/' 
          component={HomePage} />
        <Route 
          exact path='/signup' 
          component={SignUp} />
        <Route
          path='/demo'
          render={(props) => <WaterSchedule {...props} plants={store} />}
          />
        <Route 
           exact path='/form' 
           component={PlantForm}/>
       </Switch>
      </main>
    </div>
  )
 }
}

export default App;
