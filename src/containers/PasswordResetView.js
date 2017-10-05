import React from 'react'
import InputComponent from '../components/InputComponent'

class PasswordResetView extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };
  }

  handleChange = (event) => {
    const newState = {};
    console.log(event);
    // makes function reusuable, use name attribute as key to set
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  render() {
    return (
      <div className="tile is-child box">
        <h1 className="title">Forgot your Password?</h1>
        <form>
          <InputComponent title="Email" name="email" onChange={this.handleChange} />
          <div className="field">
            <div className="control">
              <button className="button is-primary">Send Reset Link</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PasswordResetView;
