import React from 'react';
// FIXME: specify proper prop-types
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as loginActions from '../actions/loginActions';
import InputComponent from '../components/InputComponent';
import Notification from '../components/Notification';
import logo from '../images/logo2.png';

class LoginView extends React.Component {
  constructor(props) {
    super(props);

    // initial internal state that contains a credentials object
    this.state = {
      credentials: {
        email: '',
        password: '',
      },
    };

    // TODO: are these binds needed?
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onSave = (event) => {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
  };

  onChange = (event) => {
    const nextCredentials = this.state.credentials;
    nextCredentials[event.target.name] = event.target.value;
    return this.setState({ credentials: nextCredentials });
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-box column is-4 box">
        <img src={logo} alt="Lemming logo" className="image is-128x128 logo-img" />
        <h1 className="title">Sign In</h1>
        <Notification warn={this.props.loginMessage} />
        <form>
          <InputComponent title="Email" name="email" onChange={this.onChange} type="email" />
          <InputComponent
            title="Password"
            name="password"
            type="password"
            onChange={this.onChange}
          />
          {/* TODO: figure out if we need submit or button */}
          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <button
                onClick={this.onSave}
                className={`button is-primary ${this.props.loading ? 'is-loading' : ''}`}
              >
                Sign In
              </button>
            </div>
          </div>
        </form>

        <p className="signup-link">
          Are you new to Lemming? <Link to="/signup">Sign Up.</Link>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginMessage: state.loginReducer.loginMessage,
    loading: state.loginReducer.loading,
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
