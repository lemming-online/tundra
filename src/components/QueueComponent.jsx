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
    return <QuestionCard question="hi" firstName="Ankit" lastName="Patanaik" />;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, null)(QueueComponent);
