import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputComponent from '../components/InputComponent';
import registerUser from '../actions/registrationActions';
import logo from '../images/logo2.png';

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
  }

  onSave = (event) => {
    event.preventDefault();
    this.props.registerUser(this.state.credentials);
  };

  onChange = (event) => {
    const nextCredentials = this.state.credentials;
    nextCredentials[event.target.name] = event.target.value;
    return this.setState({ credentials: nextCredentials });
  };

  render() {
    return (
      <div className=" is-child column is-4 box">
        <img src={logo} alt="Lemming logo" className="image is-128x128 logo-img" />
        <h1 className="title">Sign Up</h1>
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

          <div className="field is-grouped is-grouped-right">
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(registerUser, dispatch),
    registerUser: (credentials) => {
      dispatch(registerUser(credentials));
    },
  };
}
export default connect(null, mapDispatchToProps)(RegistrationView);
