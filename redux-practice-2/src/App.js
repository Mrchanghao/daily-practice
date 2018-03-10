import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter.js';
import Buttons from './components/Buttons.js';
import Option from './components/Option.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Counter />
          <Buttons />
          <Option />
      </div>
    );
  }
}

export default App;
