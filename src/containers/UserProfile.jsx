import React from 'react';
import Dropzone from 'react-dropzone';
import InputComponent from '../components/InputComponent';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      profilePicture: '', // uri for profile picture
    };
  }

  // onDrop takes arrays of files as params
  onDrop = (acceptedFile) => {
    if (acceptedFile.length > 0) {
      const image = new FormData();
      // console.log(acceptedFile);
      image.append('image', acceptedFile[0]);
      console.log(image);

      // make api call to send image up to server
      fetch('https://api.lemming.online/users/59d6d3829f8e4e00ae0dba68/set_image', {
        method: 'POST',
        body: image,
        mode: 'cors',
      })
        .then(response => response.json())
        .then((responseJSON) => {
          this.setState({ profilePicture: responseJSON.image });
          console.log(`Success! Your photo is here: ${responseJSON.image}`);
        })
        .catch((error) => {
          console.error(error);
        });

      console.log(acceptedFile[0].preview);
    }
  };

  handleChange = (event) => {
    const newState = {};
    console.log(event);
    // makes function reusuable, use name attribute as key to set
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  updateUser = (e) => {
    e.preventDefault();

    fetch('https://api.lemming.online/users', {
      method: 'PUT',
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

  // see first name and last name
  // change their email and password
  render() {
    return (
      <div className="tile is-parent box is-7">
        <div className="tile is-child is-4">
          <h1 className="title">Update Profile</h1>
          <div>
            <Dropzone multiple={false} accept="image/*" onDrop={files => this.onDrop(files)}>
              <img src={this.state.profilePicture} alt="user profile" />
            </Dropzone>
          </div>
          <h1 className="title subtitle">John Doe</h1>
        </div>
        <div className="tile is-child">
          <div>
            <form onSubmit={this.updateUser}>
              <InputComponent title="First Name" name="first_name" onChange={this.handleChange} />
              <InputComponent title="Last Name" name="last_name" onChange={this.handleChange} />
              <InputComponent title="Password" name="password" onChange={this.handleChange} />
              <InputComponent title="Email" name="email" onChange={this.handleChange} />
              <div className="field">
                <div className="control">
                  <button className="button is-primary">Update Settings</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;