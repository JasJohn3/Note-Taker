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
        <Switch>
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Notes' component={Notes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
