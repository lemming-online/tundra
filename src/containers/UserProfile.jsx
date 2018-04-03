import React from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputComponent from '../components/InputComponent';
import * as loginActions from '../actions/loginActions';
// import * as client from '../api/mischiefClient';

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
      image.append('image', acceptedFile[0]);
      this.props.actions.postMyImage(image);
    }
  };

  handleChange = (event) => {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  updateUser = (e) => {
    e.preventDefault();

    const userInfo = {
      first_name: this.state.first_name ? this.state.first_name : this.props.firstName,
      last_name: this.state.last_name ? this.state.last_name : this.props.lastName,
      email: this.state.email ? this.state.email : this.props.email
    };

    console.log(userInfo);

    this.props.actions.updateUser(userInfo);
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Profile</h1>
          <div className="columns">
            <div className="column is-3">
              <nav className="panel">
                <a className="panel-block is-active">
                  <span className="panel-icon">
                    <i className="fa fa-book" />
                  </span>
                  My Profile
                </a>
                <a className="panel-block is-active">
                  <span className="panel-icon">
                    <i className="fas fa-edit" />
                  </span>
                  Settings
                </a>
              </nav>
            </div>

            <div className="columns column box">
              <div className="column is-5">
                <div className="dropZone">
                  <Dropzone multiple={false} accept="image/*" onDrop={files => this.onDrop(files)}>
                    <img src={`${this.props.image}`} alt="user profile" />
                  </Dropzone>
                </div>
                <div className="columns">
                  <div className="column">
                    <article class="message is-primary">
                      <div class="message-body">
                        <h1 className="title is-4">
                          {`${this.props.firstName} ${this.props.lastName}`}
                        </h1>
                        <h1 className="title is-4">{this.props.email}</h1>
                      </div>
                    </article>
                  </div>
                </div>

              </div>
              <div className="column">
                <form onSubmit={this.updateUser}>
                  <InputComponent
                    title="First Name"
                    name="first_name"
                    onChange={this.handleChange}
                  />
                  <InputComponent title="Last Name" name="last_name" onChange={this.handleChange} />
                  <InputComponent title="Password" name="password" onChange={this.handleChange} />
                  <InputComponent title="Email" name="email" onChange={this.handleChange} />
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary">Update Profile</button>
                    </div>
                  </div>
                </form>
              </div>
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
    isAuthenticated: state.loginReducer.isAuthenticated,
    image: state.loginReducer.image,
    email: state.loginReducer.email
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
