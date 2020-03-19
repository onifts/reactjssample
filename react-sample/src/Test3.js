import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

import FuncSampleComponent from './components/FuncSampleComponent';

function Test3() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/class">Demo1 : Class Component</Link>
        </li>
        <li>
          <Link to="/func">Demo2 : Functional Component</Link>
        </li>
      </ul>
    </div>
  );
}

export default Test3;
