import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import HeaderComponent from '../components/HeaderComponent';
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
        <HeaderComponent />
        <Switch>
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
