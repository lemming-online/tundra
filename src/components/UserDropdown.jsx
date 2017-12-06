import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import userBlank from '../images/user-blank.png';
import LogInOutLink from './LogInOutLink';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

function UserDropdown(props) {
  if (props.isAuthenticated) {
    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          <figure className="image is-32x32 ">
            <img
              alt="user profile pic"
              src={`//${props.image}` || userBlank}
              className="avatar is-circle"
            />
          </figure>
        </a>

        <div className="navbar-dropdown is-right">
          <Link to="/user" className="navbar-item">
            My Profile
          </Link>
          <Link to="/user" className="navbar-item">
            Settings
          </Link>
          <LogInOutLink />
          <hr className="navbar-divider" />
          <div className="navbar-item">About Lemming</div>
        </div>
      </div>
    );
  }
  return null;
}

// TODO: Add proptypes
UserDropdown.propTypes = {};

function mapStateToProps(state) {
  return { isAuthenticated: state.loginReducer.isAuthenticated };
}

export default connect(mapStateToProps)(UserDropdown);
