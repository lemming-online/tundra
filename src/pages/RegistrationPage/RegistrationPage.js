import React from 'react';
import InputComponent from '../InputComponent';

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

  registerUser = () => {
    console.log('registerUser');
    //fetch('https://api.lemming.online/users', {
    fetch('http://0.0.0.0:5050/users', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        first_name: this.state.firstName,
        last_name: this.state.lastName
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('hello world');
      console.log(responseJson.id);
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <center>
        <form onSubmit = {this.registerUser}>
          <InputComponent title='Email' name='email' onChange={this.handleChange}/>
          <InputComponent title='Password' name='password' onChange={this.handleChange}/>
          <InputComponent title='First Name' name='first_name' onChange={this.handleChange}/>
          <InputComponent title='Last Name' name='last_name' onChange={this.handleChange}/>
          <button>Register</button>
        </form>
        </center>
      </div>
    );
  }
}

export default RegistrationPage;
