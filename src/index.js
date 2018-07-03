import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';

import indexRoutes from './routes/index.jsx';

import './assets/scss/material-kit-react.css';

let history = createBrowserHistory();

// Declare _6ix a global object for convention name space
global._6ix = {};

ReactDOM.render(
  <Router history={history}>
    <Switch>
      {indexRoutes.map((prop, key) => (
        <Route path={prop.path} key={key} component={prop.component} />
      ))}
    </Switch>
  </Router>,
  document.getElementById('root')
);
