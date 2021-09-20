import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} ></Route>
        <Route component={NotFound} ></Route>
      </Switch>
    </div>
  );
}

export default App;