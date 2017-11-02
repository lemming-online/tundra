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

  onSubmit = () => {
    console.log(this.state.question.questionField);
    // push question to api through a session editor api class
  };

  render() {
    return (
      <div>
        <InputComponent
          title="What do you need help with?"
          name="questionField"
          onChange={this.onChange}
        />
        <button onClick={this.onSubmit} className={'button is-primary'}>
          Submit
        </button>
      </div>
    );
  }
}

export default SessionEditorComponent;
