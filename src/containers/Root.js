import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import HomePage from './HomePage';
import SignInUpPage from './SignInUpPage';

const Root = (store, props) => (
  <Provider store={store}>
    <Router {...props}>
      <Switch>
        <Route path="/demo" component={App} />
        <Route path="/home" component={HomePage} />
        <Route path="/signin" component={SignInUpPage} />
        <Route path="/" component={SignInUpPage} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
