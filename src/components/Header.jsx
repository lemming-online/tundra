import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import LogInOutLink from './LogInOutLink';
import logo from '../images/lemming-nocirc.png';
import userBlank from '../images/user-blank.png';

class Header extends React.Component {
  constructor(props) {
    super();
    // TODO: Investigate fixing this
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
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  <figure className="image is-32x32 ">
                    <img alt="user profile pic" src={userBlank} className="is-circle" />
                  </figure>
                </a>

                <div className="navbar-dropdown is-right">
                  <Link to="/user" className="navbar-item">
                    My Profile
                  </Link>

                  <LogInOutLink />
                  <hr className="navbar-divider" />
                  <div className="navbar-item">About Lemming</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
