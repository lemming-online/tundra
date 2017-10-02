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
        <InputComponent title="Email" onChange={this.handleChange} />
        <InputComponent title="Password" onChange={this.handleChange} />
        <InputComponent title="First Name" onChange={this.handleChange} />
        <InputComponent title="Last Name" onChange={this.handleChange} />

        <div className="field">
          <div className="control">
            <button className="button is-primary">Register</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationPage;
