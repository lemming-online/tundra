import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from '../components/Header';
import HomePage from './HomePage';
import SignInUpPage from './SignInUpPage';
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
          <Route path="/admin" component={AdminPage} />
          {/* TODO: Make this into its own component like <PrivateRoute */}
          <Route
            exact
            path="/user"
            render={() =>
              (props.store.getState().loginReducer.isAuthenticated ? (
                <UserProfile />
              ) : (
                <Redirect to="/login" />
              ))}
          />
          <PrivateRoute path="/user" component={UserProfile} />
          <PrivateRoute path="/session/:sessionID" component={SessionPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Root;
