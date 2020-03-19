import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';

const Routes = () => (
    <Router>
        <Route path="/" component={Test3} />
        <Route path="/class" component={Test1} /> 
        <Route path="/func" component={Test2} />
    </Router>
);

export default Routes;
