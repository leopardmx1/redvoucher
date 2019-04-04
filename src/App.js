import React, { Component } from 'react';

import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import Main from './Main'

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const store = createStore(cartReducer);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Main />
        </Provider>
    );
  }
}


export default App;
