import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// TODO: Abstract this out somewhere
function isAuthenticated() {
  // this !! thing seems weird, but read about it here: http://shrt.nutt.men/!!
  return !!localStorage.jwt;
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      exact
      {...rest}
      render={props =>
        (isAuthenticated() ? <Component {...props} /> : <Redirect push to="/signin" />)}
    />
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
