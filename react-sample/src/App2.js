import React, { Component } from 'react';

import './App.css';
import CounterContainer from './container/CounterContainer.js' ;

class App2 extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer  />
      </div>
    );
  }
}

/*
import Counter from './components/Counter';

class App2 extends Component {
  render() {
    return (
      <div className="App">
        <Counter  />
      </div>
    );
  }
}
*/

export default App2;
