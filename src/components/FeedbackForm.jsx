import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputComponent from '../components/InputComponent';
import DropDownMenu from '../components/DropDownMenu';
import {
  feedbackSuccess,
  feedbackInProgress,
  feedbackFailure,
  dropdownSelected,
} from '../actions/feedbackActions';

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback: {
        instructors: [],
        content: '',
        pressed: false,
      },
    };

    // TODO: are these binds needed?
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = () => {
    console.log(this.state.announcement.content);
    this.props.feedbackSuccess();
  };

  onCancel = () => {
    this.props.feedbackFailure();
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

  render() {
    const modalActive = this.props.popup ? 'modal is-active' : 'modal';

    const listOfInstructors = ['ankit', 'jay', 'jeremy', 'matt'];
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
                <DropDownMenu list={listOfInstructors} isDroppedDown={this.props.dropdown} />
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
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(feedbackSuccess, dispatch),
    feedbackSuccess: () => {
      dispatch(feedbackSuccess());
    },
    feedbackInProgress: () => {
      dispatch(feedbackInProgress());
    },
    feedbackFailure: () => {
      dispatch(feedbackFailure());
    },
    dropdownSelected: () => {
      dispatch(dropdownSelected());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
