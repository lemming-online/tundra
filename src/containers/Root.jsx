import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import HeaderComponent from '../components/HeaderComponent';
import HomePage from './HomePage';
import SignInUpPage from './SignInUpPage';
import UserProfile from './UserProfile';

// TODO: Abstract this out somewhere
function requireAuth() {
  return !localStorage.jwt;
}

// FIXME: add store to props
const Root = props => (
  <Provider store={props.store}>
    <Router {...props}>
      <div>
        <HeaderComponent />
        <Switch>
          <Route path="/login" component={SignInUpPage} />
          {/* TODO: Make this into its own component like <PrivateRoute */}
          <Route
            exact
            path="/user"
            render={() => (requireAuth() ? <Redirect to="/" /> : <UserProfile />)}
          />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Root;
