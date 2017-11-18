import React from "react";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import InputComponent from "../components/InputComponent";
import * as loginActions from "../actions/loginActions";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      profilePicture: "" // uri for profile picture
    };
  }

  // onDrop takes arrays of files as params
  onDrop = acceptedFile => {
    if (acceptedFile.length > 0) {
      const image = new FormData();
      // console.log(acceptedFile);
      image.append("image", acceptedFile[0]);
      console.log(image);

      // make api call to send image up to server
      fetch(`https://api.lemming.online/users/${this.props.uid}/set_image`, {
        method: "POST",
        body: image,
        mode: "cors",
        headers: new Headers({
          Authorization: `Bearer ${localStorage.jwt}`
        })
      })
        .then(response => response.json())
        .then(responseJSON => {
          this.setState({ profilePicture: responseJSON.image });
          console.log(`Success! Your photo is here: ${responseJSON.image}`);
        })
        .catch(error => {
          console.error(error);
        });

      console.log(acceptedFile[0].preview);
    }
  };

  handleChange = event => {
    const newState = {};
    console.log(event);
    // makes function reusuable, use name attribute as key to set
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  updateUser = e => {
    e.preventDefault();

    fetch("https://api.lemming.online/users", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        display_name: `${this.state.first_name} ${this.state.last_name}`
      })
    })
      .then(response => {
        console.log(response.json.data);
        return response.json();
      })
      .then(responseJson => {
        console.log("hello world");
        console.log(responseJson);
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  };

  // see first name and last name
  // change their email and password
  render() {
    // this snippet below will kick the page off after
    // it has logged off. idk, this isn't sustainable,
    // but i don't have a better idea rn

    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Settings</h1>
          <div className="columns">
            <div className="column is-3">
              <nav className="panel">
                <a className="panel-block is-active">
                  <span className="panel-icon">
                    <i className="fa fa-book" />
                  </span>
                  My Profile
                </a>

                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fa fa-cog" />
                  </span>
                  My Settings
                </a>
              </nav>
            </div>

            <div className="column box">
              <div className="">
                <Dropzone
                  multiple={false}
                  accept="image/*"
                  onDrop={files => this.onDrop(files)}
                >
                  <img src={this.state.profilePicture} alt="user profile" />
                </Dropzone>
                <h1 className="title subtitle">{`${this.props.firstName} ${this
                  .props.lastName}`}</h1>
                <span className="uid">{`${this.props.uid}`}</span>
              </div>
              <form onSubmit={this.updateUser}>
                <InputComponent
                  title="First Name"
                  name="first_name"
                  onChange={this.handleChange}
                />
                <InputComponent
                  title="Last Name"
                  name="last_name"
                  onChange={this.handleChange}
                />
                <InputComponent
                  title="Password"
                  name="password"
                  onChange={this.handleChange}
                />
                <InputComponent
                  title="Email"
                  name="email"
                  onChange={this.handleChange}
                />
                <div className="field">
                  <div className="control">
                    <button className="button is-primary">
                      Update Settings
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    uid: state.loginReducer.uid,
    firstName: state.loginReducer.firstName,
    lastName: state.loginReducer.lastName,
    isAuthenticated: state.loginReducer.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
