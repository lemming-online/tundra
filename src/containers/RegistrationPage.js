import React from 'react';
import InputComponent from '../components/InputComponent';

class RegistrationPage extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
    };
  }

  handleChange = (event) => {
    const newState = {};
    console.log(event);
    // makes function reusuable, use name attribute as key to set
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  registerUser = (e) => {
    // makes the form not add params to the url on submit
    e.preventDefault();

    console.log('registerUser');

    fetch('https://api.lemming.online/users', {
      // fetch('http://0.0.0.0:5050/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        display_name: `${this.state.first_name} ${this.state.last_name}`,
      }),
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
      <div className="container">
        <form onSubmit={this.registerUser}>
          <InputComponent title="Email" name="email" onChange={this.handleChange} />
          <InputComponent title="Password" name="password" onChange={this.handleChange} />
          <InputComponent title="First Name" name="first_name" onChange={this.handleChange} />
          <InputComponent title="Last Name" name="last_name" onChange={this.handleChange} />

          <div className="field">
            <div className="control">
              <button className="button is-primary">Register</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationPage;
