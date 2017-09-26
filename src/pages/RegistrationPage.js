import React from 'react'
import InputComponent from './InputComponent'

class RegistrationPage extends React.Component {
  render() {
    return(
      <div>
        <center> 
          <label>Email</label>
          <InputComponent/>
          <label>Password</label>
          <InputComponent/>
          <label>Last Name</label>
          <InputComponent/>
          <label>First Name</label>
          <InputComponent/>

          <button>Register</button>
        </center>
      </div>   
    );
  }
}

export default RegistrationPage;
