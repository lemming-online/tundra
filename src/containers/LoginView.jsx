import React from 'react';
// FIXME: specify proper prop-types
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from '../actions/loginActions';
import InputComponent from '../components/InputComponent';

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="notification is-danger">{props.warn}</div>;
}

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

    // TODO: remove these binds?
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
        <WarningBanner warn={this.props.loginMessage} />
        <form>
          <InputComponent title="Email" name="email" onChange={this.onChange} />
          <InputComponent
            title="Password"
            name="password"
            type="password"
            onChange={this.onChange}
          />
          {/* TODO: figure out if we need submit or button */}
          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <button onClick={this.onSave} className="button is-primary">
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
// TODO: figure out what this mapDispatchToProps, bindActionCreators is
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(loginActions, dispatch),
//   };
// }
// export default connect(null, mapDispatchToProps)(LoginView);

function mapStateToProps(state) {
  return { loginMessage: state.loginReducer.loginMessage };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
