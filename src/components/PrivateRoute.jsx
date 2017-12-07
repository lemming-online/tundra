import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';

// TODO: Abstract this out somewhere
function isAuthenticated() {
  // this !! thing seems weird, but read about it here: http://shrt.nutt.men/!!

  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    const payload = jwtDecode(jwt);
    const dateNow = Math.floor(Date.now() / 1000);
    if (payload.exp < dateNow) {
      return false;
    }
    return true;
  }
  return false;
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      exact
      {...rest}
      render={props =>
        (isAuthenticated() ? <Component {...props} /> : <Redirect push to="/signin" />)
      }
    />
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
