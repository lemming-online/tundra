import React from 'react';
import LoginView from './LoginView';
// import RegistrationView from './RegistrationView';

function SignInUpPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <LoginView />
        </div>
      </div>
    </section>
  );
}

export default SignInUpPage;
