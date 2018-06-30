import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';  // enable in letter version

import indexRoutes from './routes/index.jsx';
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById('root')
);
// registerServiceWorker(); // enable in letter version
