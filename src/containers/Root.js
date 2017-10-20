import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import HeaderComponent from '../components/HeaderComponent';
import HomePage from './HomePage';
import SignInUpPage from './SignInUpPage';

const Root = (store, props) => (
  <Provider store={store}>
    <Router {...props}>
      <div>
        <HeaderComponent />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/signin" component={SignInUpPage} />
          <Route path="/" component={SignInUpPage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Root;
