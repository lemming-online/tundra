import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import { clearActivation } from '../actions/registrationActions';
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
    this.hideNav = this.hideNav.bind(this);
  }
  componentDidMount() {
    // only run once]
    this.props.actions.getMyDetails();
  }

  hideNav() {
    return this.setState({ navToggle: false });
  }

  toggleNav() {
    return this.setState({ navToggle: !this.state.navToggle });
  }

  render() {
    return (
      <nav className="navbar header" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" onClick={this.props.clearActivation} to="/">
              <img src={logo} alt="Lemming logo" />
            </Link>

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
            onMouseUp={this.hideNav}
          >
            {' '}
            <div className="navbar-end">
              <Link to="/" onClick={this.props.clearActivation} className="navbar-item">
                Home
              </Link>
              <LogInOutLink loginOnly />
            </div>
            <UserDropdown image={this.props.image} />
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    image: state.loginReducer.image,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
    clearActivation: () => {
      dispatch(clearActivation());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
