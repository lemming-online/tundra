import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import '../node_modules/bulma/css/bulma.css';
import './index.css';

import Root from './containers/Root';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root'),
);
