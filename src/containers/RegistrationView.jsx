import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputComponent from '../components/InputComponent';
import * as registrationActions from '../actions/registrationActions';

class RegistrationView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
      },
    };

    // this.onChange = this.onChange.bind(this);
    // this.onSave = this.onSave.bind(this);
  }

  onSave = (event) => {
    event.preventDefault();
    this.props.actions.registerUser(this.state.credentials);
  };

  onChange = (event) => {
    const nextCredentials = this.state.credentials;
    nextCredentials[event.target.name] = event.target.value;
    return this.setState({ credentials: nextCredentials });
  };

  render() {
    return (
      <div className="tile is-child box">
        <h1 className="title">Register</h1>
        <form>
          <InputComponent title="Email" name="email" onChange={this.onChange} />
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

          <div className="field">
            <div className="control">
              <button onClick={this.onSave} className="button is-primary">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// TODO: figure out what this mapDispatchToProps, bindActionCreators is
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(registrationActions, dispatch),
  };
}
export default connect(null, mapDispatchToProps)(RegistrationView);
