import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage}/>
    <Route path="dashboard" component={DashboardPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
