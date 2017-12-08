import React from 'react';
import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';

class QueueComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // {/*iterate over array of questions with these details */}
    return (
      <div>
        <div />
        {/* Object.values(this.props.queue).map((q, index) => {
          console.log(`this is q${index}`);
          console.log(q.question);
          console.log('----');
        }) */}

        {console.log(this.props.queue)}
        {Object.values(this.props.queue).map(
          (q, index) =>
            (q.question !== undefined ? (
              <QuestionCard
                question={q.question.question}
                firstName={q.question.fName}
                lastName={q.question.lName}
              />
            ) : null),
        )}
        {console.log('props:')}
        {console.log(this.props)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    queue: state.sessionReducer.queue,
  };
}

export default connect(mapStateToProps, null)(QueueComponent);
