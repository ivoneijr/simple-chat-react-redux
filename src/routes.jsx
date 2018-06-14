import React from 'react';
import {
  HashRouter as Router,
  hashHistory,
  Route,
} from 'react-router-dom';

import Chat from './components/Chat/index.jsx';

const Routes = () => (
  <Router history={hashHistory}>
    <Route component={Chat} />
  </Router>
);

export default Routes;
