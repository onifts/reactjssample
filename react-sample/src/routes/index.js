import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import { Link } from "react-router-dom";

function index() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/class">Demo1 : Class Component</Link>
        </li>
        <li>
          <Link to="/func">Demo2 : Functional Component</Link>
        </li>
        <li>
          <Link to="/reduxclasscounter">Demo3 : Redux Counter (Class Component)</Link>
        </li>
        <li>
          <Link to="/reduxfunccounter">Demo4 : Redux Counter (Functional Component)</Link>
        </li>
      </ul>
    </div>
  );
}

export default index;
