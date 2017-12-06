import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { displayCreateSessionForm, closeCreateSessionForm } from '../actions/sessionActions';
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
    console.log('onSubmit function currently does nothing, add api call action');
  };

  render() {
    const modalActive = this.props.popup ? 'modal is-active' : 'modal';
    return (
      <div className="field is-grouped">
        <div className="control">
          <button className="button" onClick={this.onClick}>
            New Meeting
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
                    Invite
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
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InstructorCourseButtons));
