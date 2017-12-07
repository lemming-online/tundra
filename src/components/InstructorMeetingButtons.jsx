import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  createSession,
  displayCreateSessionForm,
  closeCreateSessionForm,
} from '../actions/sessionActions';
import InputComponent from '../components/InputComponent';

class InstructorCourseButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionDetails: {
        sessionTitle: '',
      },
    };
  }

  onChange = (event) => {
    const nextSessionDetails = this.state.sessionDetails;
    nextSessionDetails[event.target.name] = event.target.value;
    return this.setState({ sessionDetails: nextSessionDetails });
  };

  onClick = () => {
    this.props.displayCreateSessionForm();
  };

  onCancel = () => {
    this.props.closeCreateSessionForm();
  };

  onSubmit = () => {
    const groupID = this.props.match.params.groupID;
    const sessionTitle = this.state.sessionDetails.sessionTitle;
    const body = {
      title: sessionTitle,
      group_id: `${groupID}`,
    };
    console.log(body);
    this.props.createSession(body);
  };

  render() {
    const modalActive = this.props.popup ? 'modal is-active' : 'modal';
    return (
      <div className="field is-grouped">
        <div className="control">
          <button className="button" onClick={this.onClick}>
            Create New Meeting
          </button>
          <div id="announcement-form-popup" className={`${modalActive}`}>
            <div className="modal-background" />
            <div className="container box">
              <InputComponent
                name="sessionTitle"
                title="Give this session a name!"
                onChange={this.onChange}
              />
              <div className="field is-grouped">
                <div className="control">
                  <button className="button" onClick={this.onSubmit}>
                    Create
                  </button>
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
    popup: state.sessionReducer.sessionFormPopup,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(displayCreateSessionForm, dispatch),
    displayCreateSessionForm: () => {
      dispatch(displayCreateSessionForm());
    },
    closeCreateSessionForm: () => {
      dispatch(closeCreateSessionForm());
    },
    createSession: (body) => {
      dispatch(createSession(body));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InstructorCourseButtons));
