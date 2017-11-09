import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputComponent from '../components/InputComponent';
import createHelpQuestion from '../actions/sessionActions';

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
    // push question to api through a session editor api class
    const jwt = localStorage.jwt;
    const sessionID = this.props.match.params.sessionID;
    // SessionApi.addQuestionToQueue(jwt, sectionId, details);
    this.props.createHelpQuestion(jwt, sessionID, this.state.question);
    this.formRef.reset(); // resets the form to be empty
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
          <button onClick={this.onSubmit} className={'button is-primary'}>
            Submit Request
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(createHelpQuestion, dispatch),
    createHelpQuestion: (jwt, sectionId, details) => {
      dispatch(createHelpQuestion(jwt, sectionId, details));
    },
  };
}

export default connect(null, mapDispatchToProps)(SessionEditorComponent);
