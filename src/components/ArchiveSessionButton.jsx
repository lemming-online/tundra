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
    console.log('onClick Archive');
  };

  render() {
    return (
      <div className="field is-grouped">
        <div className="control">
          <button className="button" onClick={this.onClick}>
            Archive Meeting
          </button>
        </div>
      </div>
    );
  }
}

// this is not legit, just a placeholder
function mapStateToProps(state) {
  return {
    popup: state.sessionReducer.sessionFormPopup,
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
