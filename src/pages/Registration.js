import React from 'react'
var InputComponent = require('./InputComponent.js');

export default class Registration extends React.Component{
  constructor(props) {
          super(props);
  }

  render: function(){
    return(
      <div>
        <center>
        <div>Registration Page</div>
        <form>
          <InputComponent/>
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
