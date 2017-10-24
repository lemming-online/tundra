import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import HeaderComponent from '../components/HeaderComponent';
import HomePage from './HomePage';
import SignInUpPage from './SignInUpPage';

const Root = props => (
  <Provider store={props.store}>
    <Router {...props}>
      <div>
        <HeaderComponent />
        <Switch>
          <Route path="/login" component={SignInUpPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Root;
