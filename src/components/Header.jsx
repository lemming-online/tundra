import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import LogInOutLink from './LogInOutLink';
import logo from '../images/lemming-nocirc.png';

class Header extends React.Component {
  constructor(props) {
    super();
    // We had to bind the this keyword for our logOut function in our constructor
    // function, since we're working with ES6 component definitions.
    // More info: http://shrt.nutt.men/react-binding
    // this.logOut = this.logOut.bind(this);
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
              <LogInOutLink />
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

export default Header;
