import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import LogInOutLink from './LogInOutLink';
import UserDropdown from './UserDropdown';
import logo from '../images/lemming-nocirc.png';
import * as loginActions from '../actions/loginActions';

class Header extends React.Component {
  constructor(props) {
    super(props);

    // TODO: Investigate fixing this
    // We had to bind the this keyword for our logOut function in our constructor
    // function, since we're working with ES6 component definitions.
    // More info: http://shrt.nutt.men/react-binding
    // this.isAuthenticated = this.props.isAuthenticated;

    this.state = {
      navToggle: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    return this.setState({ navToggle: !this.state.navToggle });
  }

  render() {
    return (
      <nav className="navbar header" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src={logo} alt="Lemming logo" />
            </Link>

            {/* TODO: toggle is-active */}
            <button
              className={`button navbar-burger ${this.state.navToggle ? 'is-active' : ''}`}
              onClick={this.toggleNav}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <div
            className={`navbar-menu ${this.state.navToggle ? 'is-active' : ''}`}
            onMouseLeave={this.toggleNav}
          >
            <div className="navbar-end">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <LogInOutLink />
              <UserDropdown />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { isAuthenticated: state.loginReducer.isAuthenticated };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
