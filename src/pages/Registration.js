import React from 'react'

export default class Registration extends React.Component{
  constructor(props) {
          super(props);
  }

  render(){
    return(
      <div>
        <center>
        <div>Registration Page</div>
        <form>
          <input
            text = "Email"
            type = "text"
            errorMessage = "email is invalid"
            emptyMessage = "email can't be empty"
          />

          <input
            text = "password"
            type = "text"
            errorMessage = "password is invalid"
            emptyMessage = "password can't be empty"
          />
          
          <input
            text = "First Name"
            type = "text"
            errorMessage = "First name is invalid"
            emptyMessage = "First name can't be empty"
          />
          
          <input
            text = "Last Name"
            type = "text"
            errorMessage = "Last name is invalid"
            emptyMessage = "Last name can't be empty"
          />

          <button
            type = "submit"
            className = "button button_wide"
            >
            Register!
          </button>
        </form>
        </center>
      </div>
    );
  }
}
