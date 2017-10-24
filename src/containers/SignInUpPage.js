import React from 'react';
import LoginView from './LoginView';
import RegistrationView from './RegistrationView';
import { loginUser } from '../actions/loginActions';

function SignInUpPage(props) {
  const { dispatch, isAuthenticated, errorMessage, history } = props;
  return (
    <section className="section">
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4 ">
            <LoginView
              errorMessage={errorMessage}
              onLoginClick={creds => dispatch(loginUser(creds))}
            />
          </div>
          <div className="tile is-parent">
            <RegistrationView />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignInUpPage;
