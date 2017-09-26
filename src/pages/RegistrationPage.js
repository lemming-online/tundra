import React from 'react'
import InputComponent from './InputComponent'

class RegistrationPage extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    }
    //fixes scope of this
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange = (event) =>  {
    let newState = {};
    console.log("before:");
    console.log(newState);
    //makes function reusuable, use name attribute as key to set
    newState[event.target.name] = event.target.value;
    this.setState(newState); 
    console.log("after:");
    console.log(newState);
  }

  render() {
    return(
      <div>
        <center> 
          <InputComponent title="Email" onChange={this.handleChange}/>
          <InputComponent title="Password" onChange={this.handleChange}/>
          <InputComponent title="First Name" onChange={this.handleChange}/>
          <InputComponent title="Last Name" onChange={this.handleChange}/>
          <button>Register</button>
        </center>
      </div>   
    );
  }
}

export default RegistrationPage;
