import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import '../node_modules/bulma/css/bulma.css';
import '../node_modules/draft-js/dist/Draft.css';
import './index.css';

import Root from './containers/Root';

const store = configureStore();

// eslint-disable-next-line
render(<Root store={store} />, document.getElementById('root'));
