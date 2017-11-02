import React from 'react';
import InputComponent from '../components/InputComponent';

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

export default SessionEditorComponent;
