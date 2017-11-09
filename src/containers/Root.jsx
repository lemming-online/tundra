import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from '../components/Header';
import HomePage from './HomePage';
import SignInUpPage from './SignInUpPage';
import SignUpPage from './SignUpPage';
import UserProfile from './UserProfile';
import SessionPage from './SessionPage';
import AdminPage from './AdminPage';
import PrivateRoute from '../components/PrivateRoute';

// FIXME: add store to proptypes
const Root = props => (
  <Provider store={props.store}>
    <Router basename="/tundra">
      <div>
        <Header />
        <Switch>
          <Route path="/signin" component={SignInUpPage} />
          <Route path="/signup" component={SignUpPage} />
          <PrivateRoute path="/user" component={UserProfile} />
          <PrivateRoute path="/session/:sessionID" component={SessionPage} />
          <Route path="/" component={HomePage} />

          <PrivateRoute path="/admin" component={AdminPage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Root;
