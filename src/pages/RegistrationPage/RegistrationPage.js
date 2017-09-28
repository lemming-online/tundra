import React from 'react';
import InputComponent from '../InputComponent';

class RegistrationPage extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    };
  }

  handleChange = (event) => {
    const newState = {};
    console.log('before:');
    console.log(newState);
    // makes function reusuable, use name attribute as key to set
    newState[event.target.name] = event.target.value;
    this.setState(newState);
    console.log('after:');
    console.log(newState);
  };
  

  registerUser = () => {
    console.log('registerUser');
    fetch('https://api.lemming.online/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      })
    });
  }

  render() {
    return (
      <div>
        <center>
        <form onSubmit = {this.registerUser}>
          <InputComponent title="Email" onChange={this.handleChange} />
          <InputComponent title="Password" onChange={this.handleChange} />
          <InputComponent title="First Name" onChange={this.handleChange} />
          <InputComponent title="Last Name" onChange={this.handleChange} />
          <button>Register</button>
        </form>
        </center>
      </div>
    );
  }
}

export default RegistrationPage;
