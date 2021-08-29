import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Notes from './Notes';
import NavbarComponent from './Components/NavbarComponent';
function App() {
  return (
    <Router>
      <div className='App'>
        <NavbarComponent />
        <Home></Home>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/notes' component={Notes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
