import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import ClassSampleComponent from '../components/SampleCoponents/ClassSampleComponent';

function Test1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ClassSampleComponent name="웅" />

      </header>
    </div>
  );
}

export default Test1;
