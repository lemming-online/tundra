import React from 'react';
import logo from '../images/lemming-nocirc.png';

function HeaderComponent() {
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
            <a className="navbar-item">Link A</a>
            <a className="navbar-item">Link B</a>
            <a className="navbar-item">Link C</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;
