import React from 'react';
import InputComponent from '../components/InputComponent';

class LoginView extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const newState = {};
    console.log(event);
    // makes function reusuable, use name attribute as key to set
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child is-4 box">
                <h1 className="title">Guest Login</h1>
                <form onSubmit={this.loginGuest}>
                  <InputComponent
                    title="Display Name"
                    name="display_name"
                    onChange={this.handleChange}
                  />
                  <div className="field is-grouped is-grouped-right">
                    <div className="control">
                      <button className="button is-primary">Enter Section</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginView;
