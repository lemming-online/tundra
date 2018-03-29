import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  addMentorToGroup,
  addMentorsToGroupInProgress,
  cancelInvite,
  getPeopleInGroup
} from '../actions/groupActions';
import InputComponent from '../components/InputComponent';

class AddMentorToGroupButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groupDetails: {
        mentorList: '',
      },
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = (event) => {
    const nextGroupDetails = this.state.groupDetails;
    nextGroupDetails[event.target.name] = event.target.value;
    return this.setState({ groupDetails: nextGroupDetails });
  };

  onCancel = () => {
    this.props.cancelInvite();
    this.clearInput();
  };

  onAddMentorsSubmit = () => {
    const groupID = this.props.match.params.groupID;
    const body = {
      emails: this.state.groupDetails.mentorList,
      role: 'mentor',
    };

    this.props.addMentorToGroup(body, groupID);
    this.props.getPeopleInGroup(groupID);
    this.clearInput();
  };

  addUserPopup = () => {
    this.props.addingUsers();
  };

  clearInput = () => {
    const nextGroupDetails = this.state.groupDetails;
    nextGroupDetails['mentorList'] = '';
    this.setState({ groupDetails: nextGroupDetails });
  };

  render() {
    const modalActive = this.props.popup ? 'modal is-active' : 'modal';
    return (
      <div className="field is-grouped">
        <div className="control">
          <button onClick={this.addUserPopup} className="button">
            Add Mentors
          </button>
          <div id="announcement-form-popup" className={`${modalActive}`}>
            <div className="modal-background" />
            <div className="container box">
              <InputComponent
                name="mentorList"
                title="Enter a comma seperated list of emails you wish to invite as mentors."
                value={this.state.groupDetails.mentorList}
                onChange={this.onChange}
              />
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" onClick={this.onAddMentorsSubmit}>
                    Invite
                  </button>
                </div>
                <div className="control">
                  <button className="button" onClick={this.onCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    popup: state.groupReducer.mentorPopup,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addMentorToGroup, dispatch),
    addMentorToGroup: (body, groupID) => {
      dispatch(addMentorToGroup(body, groupID));
    },
    addingUsers: () => {
      dispatch(addMentorsToGroupInProgress());
    },
    cancelInvite: () => {
      dispatch(cancelInvite());
    },
    getPeopleInGroup: (groupId) => {
      dispatch(getPeopleInGroup(groupId));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddMentorToGroupButton));
