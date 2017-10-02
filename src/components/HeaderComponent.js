import React from 'react';

function HeaderComponent() {
  return (
    <nav className="navbar header" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://lemming.online">
            <span>Lemming online</span>
          </a>

          <button className="button navbar-burger">
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">My Profile</a>
            <a className="navbar-item">Settings</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;
