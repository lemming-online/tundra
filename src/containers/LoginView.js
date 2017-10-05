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

  loginUser = (e) => {
    // makes the form not add params to the url on submit
    e.preventDefault();

    console.log('loginUser');

    fetch('https://requestb.in/1ibu5cc1', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
      mode: 'no-cors',
    })
      .then((response) => {
        console.log(response.json.data);
        return response.json();
      })
      .then((responseJson) => {
        console.log('hello world');
        console.log(responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="tile is-child box">
        <h1 className="title">Login</h1>
        <form onSubmit={this.loginUser}>
          <InputComponent title="Email" name="email" onChange={this.handleChange} />
          <InputComponent
            title="Password"
            name="password"
            type="password"
            onChange={this.handleChange}
          />

          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <button className="button is-primary">Log In</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginView;
