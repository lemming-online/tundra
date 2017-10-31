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

  if (props.logged_in) {
    return (
      <Link to="/logout" onClick={logOut} className="navbar-item">
        Log Out
      </Link>
    );
  }
  return (
    <Link to="/login" className="navbar-item">
      Log In
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
