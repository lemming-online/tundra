import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import InstructorMeetingButtons from '../components/InstructorMeetingButtons';
import ArchiveSessionButton from '../components/ArchiveSessionButton';
import * as tabActions from '../actions/tabActions';
import SectionLevelBar from '../components/SectionLevelBar';
import { getLiveSession, getArchivedSessions } from '../actions/sessionActions';

class SessionPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionDetails: {},
    };
  }

  componentDidMount() {
    const groupID = this.props.match.params.groupID;
    if (this.props.archivedSessions.length === 0) {
      this.props.getArchivedSessions(groupID);
    }
    if (this.props.liveSession === null) {
      this.props.getLiveSession(groupID);
    }
  }

  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <SectionLevelBar title="Meetings" live={this.props.liveSession}>
              <InstructorMeetingButtons />
            </SectionLevelBar>

            <ul>
              {this.props.liveSession !== undefined ? (
                <a
                  role="link"
                  tabIndex={0}
                  onClick={() => this.props.actions.openTab('lab3', 'Lab 3: Beginner Vaporization')}
                >
                  <li>{this.props.liveSession.title}</li>
                </a>
              ) : null}
            </ul>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionLevelBar title="Archive">
              <ArchiveSessionButton />
            </SectionLevelBar>
            <ul>
              {this.props.archivedSessions !== undefined
                ? this.props.archivedSessions.reverse().map((session, index) => (
                  <a
                    role="link"
                    tabIndex={0}
                    onClick={() => this.props.actions.openTab('lab2', 'Lab 2: Yeup')}
                  >
                    <li>{`${session.data.title}`}</li>
                  </a>
                ))
                : null}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabReducer.tabs,
    liveSession: state.sessionReducer.liveSession.session,
    archivedSessions: state.sessionReducer.archivedSessions,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tabActions, dispatch),
    getLiveSession: (groupID) => {
      dispatch(getLiveSession(groupID));
    },
    getArchivedSessions: (groupID) => {
      dispatch(getArchivedSessions(groupID));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionPage));
