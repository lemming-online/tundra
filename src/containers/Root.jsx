import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from '../components/Header';
import HomePage from './HomePage';
import SignInUpPage from './SignInUpPage';
import UserProfile from './UserProfile';
import SessionPage from './SessionPage';
import PrivateRoute from '../components/PrivateRoute';

// FIXME: add store to proptypes
const Root = props => (
  <Provider store={props.store}>
    <Router {...props}>
      <div>
        <Header />
        <Switch>
          {/* TODO: /ankit route is just for testing, 
          need to make sure to get rid of before merge master */}
          <Route path="/ankit" component={SessionPage} />
          <Route path="/login" component={SignInUpPage} />
          <PrivateRoute path="/user" component={UserProfile} />
          <PrivateRoute path="/session/:sessionID" component={SessionPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Root;
