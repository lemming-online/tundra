import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/lemming-nocirc.png';

function HeaderComponent() {
  // const { dispatch, isAuthenticated, errorMessage } = this.props;
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
            <Link to="/signin" className="navbar-item">
              Signin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;
