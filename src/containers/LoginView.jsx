import React from 'react';
// FIXME: specify proper prop-types
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from '../actions/loginActions';
import InputComponent from '../components/InputComponent';
import WarningNotification from '../components/WarningNotification';

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
    return (
      <div className="tile is-child box">
        <h1 className="title">Login</h1>
        <WarningNotification warn={this.props.loginMessage} />
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
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginMessage: state.loginReducer.loginMessage,
    loading: state.loginReducer.loading,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
