import React from 'react';
// eslint-disable-next-line
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputComponent from '../components/InputComponent';
import { createGroup, cancelCreateGroupForm } from '../actions/groupActions';

class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {
        name: '',
        location: '',
        description: '',
        website: '',
      },
    };
  }

  onSave = (event) => {
    event.preventDefault();
    const jwt = localStorage.jwt;
    this.props.createGroup(this.state.details, jwt);
  };

  onChange = (event) => {
    const nextDetails = this.state.details;
    nextDetails[event.target.name] = event.target.value;
    return this.setState({ details: nextDetails });
  };

  onCancel = (event) => {
    event.preventDefault();
    this.props.closeGroupForm();
    console.log('cancel');
  };

  render() {
    return (
      <div>
        <div className="modal-background" />
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-12-tablet is-12-mobile box">
              <h1 className="title">Create a Group</h1>
              <form>
                <InputComponent title="Name" name="name" onChange={this.onChange} />
                <InputComponent title="Location" name="location" onChange={this.onChange} />
                <InputComponent title="Description" name="description" onChange={this.onChange} />
                <InputComponent title="Website" name="website" onChange={this.onChange} />

                <div className="field is-grouped is-grouped-right">
                  <div className="control">
                    <button onClick={this.onCancel} className="button">
                      Cancel
                    </button>
                  </div>
                  <div className="control">
                    <button onClick={this.onSave} className="button is-primary">
                      Create Group
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.loginReducer.uid,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(createGroup, dispatch),
    createGroup: (details, id) => {
      dispatch(createGroup(details, id));
    },
    closeGroupForm: () => {
      dispatch(cancelCreateGroupForm());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
