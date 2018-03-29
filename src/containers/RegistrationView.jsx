import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import InputComponent from '../components/InputComponent';
import { registerUser, registrationFailure, activateEmail, clearActivation } from '../actions/registrationActions';
import logo from '../images/logo2.png';
import Notification from '../components/Notification';
import { parse } from 'query-string';

class RegistrationView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        email: '',
        password: '',
        confirm_password: '',
        first_name: '',
        last_name: '',
      },
      token: parse(this.props.location.search).token
    };
  }

  onSave = (event) => {
    event.preventDefault();
    const password = this.state.credentials.password;
    const confirmedPassword = this.state.credentials.confirm_password;
    if (password === confirmedPassword) {
      console.log('Passwords are equal');
      this.props.registerUser(this.state.credentials);
    } else {
      console.log('Passwords do not match');
      this.props.registrationFailure();
    }
  };

  onChange = (event) => {
    const nextCredentials = this.state.credentials;
    nextCredentials[event.target.name] = event.target.value;
    return this.setState({ credentials: nextCredentials });
  };

  render() {
    if (this.state.token) {
      this.props.activateEmail(this.state.token);
      console.log('Activating Email');
    }

    return (
      <div className="login-box is-child column is-5 box">
        <img src={logo} alt="Lemming logo" className="image is-128x128 logo-img" />
        <h1 className="title">Sign Up</h1>
        <Notification warn={this.props.failMessage} />
        <Notification succ={this.props.successMessage} />
        <form className={`${this.props.successMessage || this.props.failedActivation ? 'is-hidden' : ''}`}>
          <InputComponent title="Email" name="email" onChange={this.onChange} type="email" />
          <InputComponent
            title="Password"
            name="password"
            type="password"
            onChange={this.onChange}
          />
          <InputComponent
            title="Confirm Password"
            name="confirm_password"
            type="password"
            onChange={this.onChange}
          />
          <InputComponent title="First Name" name="first_name" onChange={this.onChange} />
          <InputComponent title="Last Name" name="last_name" onChange={this.onChange} />

          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <button
                onClick={this.onSave}
                className={`button is-primary ${this.props.successMessage ? 'is-hidden' : ''}`}
              >
                Register
              </button>
            </div>
          </div>
        </form>
        <p className={`signup-link ${this.props.successMessage ? 'is-hidden' : ''}`}>
          Already have an account? <Link to="/signin">Sign In.</Link>
          <br />
          <Link to="/forgotyourpassword">Forgot your password? </Link>
        </p>
        <p className={`signup-link ${!this.props.successfulActivation ? 'is-hidden' : ''}`}>
          <Link to="/signin" onClick={this.props.clearActivation}>Sign In.</Link>
          <br />
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    successMessage: state.registrationReducer.successMessage,
    failMessage: state.registrationReducer.failMessage,
    loading: state.registrationReducer.loading,
    failedActivation: state.registrationReducer.failedActivation,
    successfulActivation: state.registrationReducer.successfulActivation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: (credentials) => {
      dispatch(registerUser(credentials));
    },
    registrationFailure: () => {
      dispatch(registrationFailure());
    },
    activateEmail: (token) => {
      dispatch(activateEmail(token));
    },
    clearActivation: () => {
      dispatch(clearActivation());
    }
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistrationView));
