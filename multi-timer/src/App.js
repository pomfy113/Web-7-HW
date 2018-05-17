import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NewTimer from './Components/NewTimer'
import ListTimers from './Components/ListTimers'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './Reducers'
const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            Timers!
            <NewTimer/>
            <ListTimers/>

          </p>
        </div>
      </Provider>
    );
  }
}
export default App;
