import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  addMentorToGroup,
  addMenteeToGroup,
  addUsersToGroupInProgress,
  cancelInvite,
} from '../actions/groupActions';
import InputComponent from '../components/InputComponent';

class InstructorCourseButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groupDetails: {
        mentorList: '',
        menteeList: '',
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
  };

  onAddMenteesSubmit = () => {
    console.log('Submitting Mentees');
  };

  addUserPopup = () => {
    this.props.addingUsers();
    console.log('pop goes the weasel');
  };

  render() {
    const modalActive = this.props.popup ? 'modal is-active' : 'modal';
    return (
      <div className="field is-grouped">
        <div className="control">
          <button className="button">New Meeting</button>
        </div>
        <div className="control">
          <button onClick={this.addUserPopup} className="button">
            Add Mentees
          </button>
          <div id="announcement-form-popup" className={`${modalActive}`}>
            <div className="modal-background" />
            <div className="container box">
              <InputComponent
                name="menteeList"
                title="Enter a comma seperated list of emails you wish to invite."
                onChange={this.onChange}
              />
              <div className="field is-grouped">
                <div className="control">
                  <button className="button">Invite</button>
                  <button className="button" onClick={this.onCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="control">
          <button className="button">Add Mentors</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    popup: state.groupReducer.addUserPopup,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addMenteeToGroup, dispatch),
    addMenteeToGroup: () => {
      dispatch(addMenteeToGroup());
    },
    addMentorToGroup: () => {
      dispatch(addMentorToGroup());
    },
    addingUsers: () => {
      dispatch(addUsersToGroupInProgress());
    },
    cancelInvite: () => {
      dispatch(cancelInvite());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InstructorCourseButtons);
