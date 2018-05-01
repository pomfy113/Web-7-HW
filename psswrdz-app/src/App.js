import React, { Component } from 'react';
import './App.css';
import Password from './Password';
import PasswordList from './password-list';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Password />
          <PasswordList/>
        </div>
      </Provider>
    );
  }
}

export default App;
