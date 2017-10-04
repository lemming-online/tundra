import React from 'react';
import InputComponent from '../components/InputComponent';

class LoginView extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    };
    // fixes scope of this
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const newState = {};
    console.log('before:');
    console.log(newState);
    // makes function re-usable, use name attribute as key to set
    newState[event.target.name] = event.target.value;
    this.setState(newState);
    console.log('after:');
    console.log(newState);
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child box">
                <h1 className="title">Login</h1>
                <form onSubmit={this.loginUser}>
                  <InputComponent title="Email" name="email" onChange={this.handleChange} />
                  <InputComponent title="Password" name="password" onChange={this.handleChange} />

                  <div className="field">
                    <div className="control">
                      <button className="button is-primary">Register</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title">Sign Up</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat
                  pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat
                  gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui
                  porta orci, quis semper odio felis ut quam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginView;
