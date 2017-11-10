import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InputComponent from '../components/InputComponent';
import DropDownMenu from '../components/DropDownMenu';
import { feedbackSuccess, feedbackInProgress, dropdownSelected } from '../actions/feedbackActions';

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback: {
        content: '',
        instructorToSendTo: '',
      },
    };

    // TODO: are these binds needed?
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = () => {
    console.log(this.state.feedback.content);
    const sessionID = this.props.match.params.sessionID;
    console.log(`sessionID: ${sessionID}`);
    this.props.feedbackSuccess(
      this.state.feedback.content,
      sessionID,
      this.state.feedback.instructorToSendTo,
      localStorage.jwt,
    );
  };

  onCancel = () => {
    // this.props.feedbackFailure();
  };

  onSelect = () => {
    this.props.feedbackInProgress();
  };

  onPress = () => {
    this.props.dropdownSelected();
  };

  // keeps track of text changes
  onChange = (event) => {
    const nextFeedback = this.state.feedback;
    nextFeedback[event.target.name] = event.target.value;
    return this.setState({ feedback: nextFeedback });
  };

  onClick1 = (e, item) => {
    console.log(`item: ${item}`);
    const nextFeedback = this.state.feedback;
    nextFeedback.instructorToSendTo = item;
    return this.setState({ nextFeedback });
  };

  render() {
    const modalActive = this.props.popup ? 'modal is-active' : 'modal';

    const listOfInstructors = ['59fb49383be55800b7b03545', 'ankit', 'jay', 'jeremy', 'matt'];
    return (
      <div>
        <button className="button is-primary" onClick={this.onSelect}>
          Submit Feedback
        </button>

        <div id="announcement-form-popup" className={`${modalActive}`}>
          <div className="modal-background" />
          <section className="section">
            <div className="container box">
              <div onClick={this.onPress}>
                <DropDownMenu
                  list={listOfInstructors}
                  isDroppedDown={this.props.dropdown}
                  onClick={this.onClick1}
                />
              </div>
              <InputComponent
                name="content"
                title="Enter your feedback here"
                onChange={this.onChange}
              />
              <div className="field is-grouped is-grouped-right">
                <div className="control">
                  <button onClick={this.onSubmit} className="button is-primary">
                    Submit
                  </button>
                  <button onClick={this.onCancel} className="button is-primary">
                    Cancel
                  </button>
                </div>
              </div>
              <button className="modal-close" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    popup: state.feedbackReducer.popup,
    dropdown: state.feedbackReducer.dropdown,
    id: state.loginReducer.uid,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(feedbackSuccess, dispatch),
    feedbackSuccess: (content, sessionID, instructorToSendTo, jwt) => {
      dispatch(feedbackSuccess(content, sessionID, instructorToSendTo, jwt));
    },
    feedbackInProgress: () => {
      dispatch(feedbackInProgress());
    },
    dropdownSelected: () => {
      dispatch(dropdownSelected());
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedbackForm));
