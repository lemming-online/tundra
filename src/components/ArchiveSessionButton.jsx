import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  createSession,
  displayCreateSessionForm,
  closeCreateSessionForm,
  archiveSession,
} from '../actions/sessionActions';

class ArchiveSessionButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionDetails: {
        sessionTitle: '',
      },
    };
  }

  onClick = () => {
    const groupID = this.props.match.params.groupID;
    this.props.archiveSession(groupID);
  };

  render() {
    return (
      <button className="button is-pulled-right" onClick={this.onClick}>Archive Meeting</button>
    );
  }
}

function mapStateToProps(state) {
  return {
    popup: state.sessionReducer.sessionFormPopup,
    liveSession: state.sessionReducer.liveSession.session
  };
}

// none of these actions are legit, just placeholders for me
function mapDispatchToProps(dispatch) {
  return {
    displayCreateSessionForm: () => {
      dispatch(displayCreateSessionForm());
    },
    closeCreateSessionForm: () => {
      dispatch(closeCreateSessionForm());
    },
    createSession: (body) => {
      dispatch(createSession(body));
    },
    archiveSession: (groupId) => {
      dispatch(archiveSession(groupId));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArchiveSessionButton));
