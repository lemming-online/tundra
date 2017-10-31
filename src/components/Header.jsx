import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as loginActions from '../actions/loginActions';
import logo from '../images/lemming-nocirc.png';

class Header extends React.Component {
  // const { dispatch, isAuthenticated, errorMessage } = this.props;
  constructor(props) {
    super();
    // We had to bind the this keyword for our logOut function in our constructor
    // function, since we're working with ES6 component definitions.
    // More info: http://shrt.nutt.men/react-binding
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  render() {
    return (
      <nav className="navbar header" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://lemming.online">
              <img src={logo} alt="Lemming" />
            </a>

            <button className="button navbar-burger">
              <span />
              <span />
              <span />
            </button>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/login" className="navbar-item">
                Log In
              </Link>
              <Link to="/logout" onClick={this.logOut} className="navbar-item">
                Log Out
              </Link>
              <Link to="/user" className="navbar-item">
                User
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return { logged_in: state.isAuthenticated };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
