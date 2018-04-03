import React from 'react';
import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';

class QueueComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
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
                image={this.props.userImage}
                key={q.question.user}
              />
            ) : null),
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    queue: state.sessionReducer.queue,
    userImage: state.loginReducer.image
  };
}

export default connect(mapStateToProps, null)(QueueComponent);
