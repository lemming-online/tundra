import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InputComponent from '../components/InputComponent';

class NewGroupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      group: {
        title: '',
        description: '',
      },
    };

    // TODO: are these binds needed?
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = () => {
    this.props.newGroupSuccess(
      this.state.group.content,
      this.state.group.instructorToSendTo,
      localStorage.jwt,
    );
  };

  onCancel = () => {
    this.props.cancelnewGroup();
  };

  onSelect = () => {
    this.props.newGroupInProgress();
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

    return (
      <div className="container">
        <button className="button is-primary" onClick={this.onSelect}>
          Submit Feedback
        </button>

        <div id="announcement-form-popup" className={`${modalActive}`}>
          <div className="modal-background" />
          <div className="container box">
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
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    popup: state.feedbackReducer.popup,
    id: state.loginReducer.uid,
  };
}

function mapDispatchToProps(dispatch) {
  // return {
  //   actions: bindActionCreators(newGroup, dispatch),
  //   feedbackSuccess: (content, sessionID, instructorToSendTo, jwt) => {
  //     dispatch(newGroupSuccess(content, sessionID, instructorToSendTo, jwt));
  //   },
  //   feedbackInProgress: () => {
  //     dispatch(newGroupInProgress());
  //   },
  //   cancelFeedback: () => {
  //     dispatch(cancelnewGroup());
  //   },
  // };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewGroupForm);
