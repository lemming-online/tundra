import React from 'react';
import { Link } from 'react-router-dom';

function LogInOutLink(props) {
  return (
    <Link to="/login" className="navbar-item">
      Log In
    </Link>
  );
}

export default LogInOutLink;
