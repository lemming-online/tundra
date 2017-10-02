import React from 'react';
import InputComponent from '../components/InputComponent';

class RegistrationPage extends React.Component {
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
      <div className="container">
        <InputComponent title="Email" onChange={this.handleChange} />
        <InputComponent title="Password" onChange={this.handleChange} />

        <div className="field">
          <div className="control">
            <button className="button is-primary">Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationPage;
