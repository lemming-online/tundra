import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import '../node_modules/bulma/css/bulma.css';
import '../node_modules/animate.css/animate.min.css';
import './index.css';

import { LOG_IN_SUCCESS, USER_DETAILS_FETCH } from './actions/actionTypes';

import Root from './containers/Root';

const store = configureStore();

// TODO: make this more robust with a reauth? or move that to
// the authenticated request lib
const jwt = localStorage.getItem('jwt');
if (jwt) {
  store.dispatch({ type: LOG_IN_SUCCESS });
  store.dispatch({ type: USER_DETAILS_FETCH });
}

// eslint-disable-next-line
render(<Root store={store} />, document.getElementById('root'));
