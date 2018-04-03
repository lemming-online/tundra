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

        {console.log(this.props)}
        <div className="columns">
          <div className="column is-4">
            {Object.values(this.props.queue).map(
              (q, index) =>
                (q.question !== undefined ? (
                  <QuestionCard
                    question={q.question.question}
                    firstName={q.question.fName}
                    lastName={q.question.lName}
                    image={this.props.userImage}
                    key={q.question.user}
                    sessionID={q.group}
                  />
                ) : null),
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.loginReducer.uid,
    queue: state.sessionReducer.queue,
    userImage: state.loginReducer.image
  };
}

export default connect(mapStateToProps, null)(QueueComponent);
