import React, { Component } from 'react';
import {toast} from 'react-toastify'



import Main from './Main'

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

toast.configure()

class App extends Component {
  render() {
    return (
        <Main />
    );
  }
}


export default App;
