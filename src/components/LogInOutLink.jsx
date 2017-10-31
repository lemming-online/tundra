import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LogInOutLink(props) {
  return (
    <Link to="/login" className="navbar-item">
      Log In
    </Link>
  );
}

export default LogInOutLink;
