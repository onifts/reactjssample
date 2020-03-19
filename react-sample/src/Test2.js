import React from 'react';
import logo from './logo.svg';
import './App.css';

import FuncSampleComponent from './components/FuncSampleComponent';

function Test2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <FuncSampleComponent name="정" />
        
      </header>
    </div>
  );
}

export default Test2;
