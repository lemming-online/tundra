import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from '../components/Header';
import HomePage from './HomePage';
import SignInUpPage from './SignInUpPage';
import SignUpPage from './SignUpPage';
import UserProfile from './UserProfile';
import MeetingPage from './MeetingPage';
import GroupPage from './GroupPage';
import AdminPage from './AdminPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import PrivateRoute from '../components/PrivateRoute';

const basename = '/';

// FIXME: add store to proptypes
const Root = props => (
  <Provider store={props.store}>
    <Router basename={basename}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignInUpPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/forgotyourpassword" component={ForgotPasswordPage} />
          <PrivateRoute path="/user" component={UserProfile} />
          <PrivateRoute path="/meeting/:meetingID" component={MeetingPage} />
          <PrivateRoute path="/group/:groupID" component={GroupPage} />
          <PrivateRoute path="/admin" component={AdminPage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Root;
