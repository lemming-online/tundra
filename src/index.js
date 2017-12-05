import React from 'react';
import { render } from 'react-dom';
import jwtDecode from 'jwt-decode';
import configureStore from './store/configureStore';
import '../node_modules/bulma/css/bulma.css';
import '../node_modules/animate.css/animate.min.css';
import './index.css';

import { LOG_IN_SUCCESS, LOG_OUT } from './actions/actionTypes';
import * as loginActions from './actions/loginActions';

import Root from './containers/Root';

const store = configureStore();

// TODO: make this more robust with a reauth? or move that to
// the authenticated request lib
const jwt = localStorage.getItem('jwt');
if (jwt) {
  const payload = jwtDecode(jwt);
  const dateNow = Math.floor(Date.now() / 1000);
  if (payload.exp < dateNow) {
    store.dispatch({ type: LOG_OUT });
  } else {
    store.dispatch({ type: LOG_IN_SUCCESS });
    loginActions.getMyDetails();
  }
}

// eslint-disable-next-line
render(<Root store={store} />, document.getElementById('root'));
