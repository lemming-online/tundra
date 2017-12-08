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
        {console.log(this.props.queue)}
        {Object.values(this.props.queue).map(
          (q, index) =>
            (q.question !== null ? (
              <QuestionCard question={q.question} firstName={index} lasName="Patanaik" />
            ) : null),
        )}
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
