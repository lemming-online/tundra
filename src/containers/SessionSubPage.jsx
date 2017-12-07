import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
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
    this.props.getLiveSession(this.props.match.params.groupID);
    if (this.props.archivedSessions === 0) {
      this.props.getArchivedSessions(this.props.match.params.groupID);
    }
  }

  render() {
    console.log('in render:');
    console.log(this.props.liveSession);
    console.log(this.props.archivedSessions);
    console.log('in 315251:');
    return (
      <div>
        <section className="section">
          <div className="container">
            <SectionLevelBar title="Meetings" live>
              <InstructorMeetingButtons />
            </SectionLevelBar>

            <ul>
              {this.props.hasSession === true ? (
                <a
                  role="link"
                  tabIndex={0}
                  onClick={() => this.props.actions.openTab('lab3', 'Lab 3: Beginner Vaporization')}
                >
                  <li>{this.props.liveSession.session.title}</li>
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
              {this.props.archivedSessions.map((session, index) => (
                <a
                  role="link"
                  tabIndex={0}
                  onClick={() => this.props.actions.openTab('lab2', 'Lab 2: Yeup')}
                >
                  <li>Lab 2: Budding Out</li>
                </a>
              ))}
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
    liveSession: state.sessionReducer.liveSession,
    archivedSessions: state.sessionReducer.archivedSessions,
    hasSession: state.sessionReducer.hasSession,
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
