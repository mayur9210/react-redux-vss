import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import GetUser from './components/GetUser';
import RegisterUser from './components/RegisterUser';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute  component={HomePage}/>
    <Route path="users" component={GetUser}/>
    <Route path="register" component={RegisterUser}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
