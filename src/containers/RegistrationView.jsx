import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputComponent from '../components/InputComponent';
import { registerUser, registrationFailure } from '../actions/registrationActions';
import logo from '../images/logo2.png';
import Notification from '../components/Notification';

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
    return (
      <div className="login-box is-child column is-5 box">
        <img src={logo} alt="Lemming logo" className="image is-128x128 logo-img" />
        <h1 className="title">Sign Up</h1>
        <Notification warn={this.props.failMessage} />
        <Notification succ={this.props.successMessage} />
        <form className={`${this.props.successMessage ? 'is-hidden' : ''}`}>
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
        </p>
        <p className="signup-link">
          <Link to="/forgotyourpassword">Forgot your password? </Link>
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
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationView);
