/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { browserHistory } from 'react-router'
import { Router } from 'react-router';
import routes from './routes';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles.scss';


// Create an enhanced history that syncs navigation events with the store

render(
  <div>
    <Router routes={routes} history={browserHistory} />
  </div>, document.getElementById('app')
);
