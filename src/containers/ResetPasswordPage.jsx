import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetPassword } from '../actions/loginActions';
import InputComponent from '../components/InputComponent';
import logo from '../images/logo2.png';

class ResetPasswordPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        password: '',
        confirmed_password: '',
      },
    };
  }

  onChange = (event) => {
    const nextCredentials = this.state.credentials;
    nextCredentials[event.target.name] = event.target.value;
    return this.setState({ credentials: nextCredentials });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(`email: ${this.state.credentials.email}`);
    // this.props.resetPassword({ email: this.state.credentials.email });
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="login-box column is-5 box">
              <img src={logo} alt="Lemming logo" className="image is-128x128 logo-img" />
              <form>
                <h1 className="title">Enter your email.</h1>
                <InputComponent
                  title="Enter your new password."
                  name="password"
                  onChange={this.onChange}
                  type="password"
                />
                <InputComponent
                  title="Confirm your new password."
                  name="confirmed_password"
                  onChange={this.onChange}
                  type="password"
                />
                {/* TODO: figure out if we need submit or button */}
                <div className="field is-grouped is-grouped-right">
                  <div className="control">
                    <button
                      onClick={this.onSubmit}
                      className={`button is-primary ${this.props.loading ? 'is-loading' : ''}`}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>

              <p className="signup-link">
                Are you new to Lemming? <Link to="/signup">Sign Up.</Link>
                <br />
                Already have an account? <Link to="/signin">Sign In.</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    resetPassword: () => {
      console.log('hello');
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordPage);
