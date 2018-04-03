import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import InstructorMeetingButtons from '../components/InstructorMeetingButtons';
import ArchiveSessionButton from '../components/ArchiveSessionButton';
import * as tabActions from '../actions/tabActions';
import SectionLevelBar from '../components/SectionLevelBar';
import ViewIfMentor from '../components/ViewIfMentor';
import { getLiveSession, getArchivedSessions } from '../actions/sessionActions';
import { getPeopleInGroup } from '../actions/groupActions';

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
    this.props.getLiveSession(groupID);

    this.props.getPeopleInGroup(`${this.props.match.params.groupID}`);

  }

  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <SectionLevelBar title="Meeting" live={this.props.liveSession}>
              <ViewIfMentor isMentor={this.props.isMentor}>
                <InstructorMeetingButtons />
              </ViewIfMentor>
            </SectionLevelBar>

            <article className="message is-dark">
              <div className="message-header">
                <p>Current Meeting</p>
              </div>
              <div className="message-body">
                {!this.props.liveSession ?
                  'No current meeting.'
                  : ''}
                {this.props.liveSession !== undefined ?
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary is-outlined" onClick={() =>
                        this.props.actions.openTab('meeting', this.props.liveSession.title, 'live')}>
                        {this.props.liveSession.title}
                      </button>
                      {this.props.isMentor ?
                        <ArchiveSessionButton />
                        : ''}
                    </div>
                  </div>
                  : null}
              </div>
            </article>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <SectionLevelBar title="Archive">
                </SectionLevelBar>
                <ul>
                  {this.props.archivedSessions !== undefined
                    ? Object.values(this.props.archivedSessions).map((session, index) => (
                      <a
                        key={session.id}
                        role="link"
                        tabIndex={0}
                        onClick={() => this.props.actions.openTab('archive', session.data.title, session.id)}
                      >
                        <li>{session.data.title}</li>
                      </a>
                    ))
                    : null}
                </ul>
              </div>
            </div>

          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const mentors = state.groupReducer.people.map(
    (person, index) =>
      (state.loginReducer.uid === person.user && person.title === 'mentor' ? person.user : ''),
  );

  const isMentorValue = !!mentors.filter(mentor => mentor !== '').length;

  return {
    tabs: state.tabReducer.tabs,
    liveSession: state.sessionReducer.liveSession.session,
    archivedSessions: state.sessionReducer.archivedSessions,
    isMentor: isMentorValue,
    id: state.loginReducer.uid,
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
    getPeopleInGroup: (groupId) => {
      dispatch(getPeopleInGroup(groupId));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionPage));