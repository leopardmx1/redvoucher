import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import PageCinepolis from './Pages/PageCinepolis'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/cinepolis' component={PageCinepolis} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
