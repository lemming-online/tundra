import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/loginActions';

function LogInOutLink(props) {
  function logOut(event) {
    event.preventDefault();
    props.actions.logOutUser();
  }

  if (props.loginOnly) {
    if (props.logged_in) {
      return null;
    }
    return (
      <Link to="/signin" className="navbar-item">
        Sign In / Sign Up
      </Link>
    );
  }

  if (props.logged_in) {
    return (
      <Link to="/signout" onClick={logOut} className="navbar-item">
        Sign Out
      </Link>
    );
  }
  return (
    <Link to="/signin" className="navbar-item">
      Sign In / Sign Up
    </Link>
  );
}
function mapStateToProps(state) {
  return { logged_in: state.loginReducer.isAuthenticated };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInOutLink);
