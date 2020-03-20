import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Test1 from './Test1';
import Test2 from './Test2';
import index from './';
import TestF from './TestF';
import TestFunc from './TestFunc';

const Routes = () => (
    <Router>
        <Route path="/" component={index} />
        <Route path="/class" component={Test1} /> 
        <Route path="/func" component={Test2} />
        <Route path="/reduxclasscounter" component={TestF} />
        <Route path="/reduxfunccounter" component={TestFunc} />
    </Router>
);

export default Routes;
