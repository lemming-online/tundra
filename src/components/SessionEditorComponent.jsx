import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InputComponent from '../components/InputComponent';
import { createHelpQuestion, deleteHelpQuestion } from '../actions/sessionActions';

class SessionEditorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {
        questionField: '',
      },
    };
  }

  onChange = (event) => {
    const nextQuestion = this.state.question;
    nextQuestion[event.target.name] = event.target.value;
    return this.setState({ question: nextQuestion });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.question.questionField);
    console.log(`id:${this.props.id}`);
    // push question to api through a session editor api class
    const jwt = localStorage.jwt;
    const sessionID = this.props.match.params.courseID;
    // SessionApi.addQuestionToQueue(jwt, sectionId, details);
    const details = {
      question: this.state.question.questionField,
      user: this.props.id,
    };
    this.props.createHelpQuestion(jwt, sessionID, details);
    this.formRef.reset(); // resets the form to be empty
  };

  onCancel = (e) => {
    e.preventDefault();
    console.log('click cancel request');
    const sessionID = this.props.match.params.courseID;
    const userId = this.props.id;
    this.props.deleteHelpQuestion(sessionID, userId);
  };

  render() {
    return (
      <div>
        <form
          ref={(form) => {
            this.formRef = form;
          }}
        >
          <InputComponent
            title="What do you need help with?"
            name="questionField"
            onChange={this.onChange}
          />
          <button
            onClick={this.props.hasQuestion ? this.onCancel : this.onSubmit}
            className={'button is-primary'}
          >
            {this.props.hasQuestion ? 'Cancel Request' : 'Submit Request'}
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.loginReducer.id,
    hasQuestion: state.sessionReducer.hasCreatedQuestion,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(createHelpQuestion, dispatch),
    createHelpQuestion: (jwt, sectionId, details) => {
      dispatch(createHelpQuestion(jwt, sectionId, details));
    },
    deleteHelpQuestion: (sectionId, userId) => {
      dispatch(deleteHelpQuestion(sectionId, userId));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionEditorComponent));
