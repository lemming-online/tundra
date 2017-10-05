import React from 'react';
import LoginView from './LoginView';
import RegistrationView from './RegistrationView';
import PasswordResetView from './PasswordResetView';
import UserProfile from './UserProfile';

function SignInUpPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4 ">
            <LoginView />
          </div>
          <div className="tile is-parent">
            <RegistrationView />
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <PasswordResetView />
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <UserProfile />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignInUpPage;
