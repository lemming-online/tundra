import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SessionSubPage from './SessionSubPage';
import ResourcesPage from './ResourcesPage';
import CoursePeoplePage from './CoursePeoplePage';
import MeetingPage from './MeetingPage';
import ArchivePage from '../components/ArchivePage';
import CourseHeader from '../components/CourseHeader';

import * as tabActions from '../actions/tabActions';
import * as groupActions from '../actions/groupActions';

// eslint-disable-next-line
class GroupPage extends React.Component {
  constructor(props) {
    super(props);
    this.groupID = this.props.match.params.groupID;
  }

  componentDidMount() {
    this.props.groupActions.fetchGroup(this.groupID);
  }

  findArchivedSession = () => {
    return this.props.archivedSessions.find((session) => {
      return session.id === this.props.openTab;
    });
  }

  render() {
    return (
      !this.props.loading && (
        <div>
          <CourseHeader
            groupName={this.props.group.name}
            description={this.props.group.description}
          />
          <section>
            {this.props.pane_type === 'session' && <SessionSubPage />}
            {this.props.pane_type === 'resources' && <ResourcesPage />}
            {this.props.pane_type === 'people' && <CoursePeoplePage />}
            {this.props.pane_type === 'meeting' && <MeetingPage />}
            {this.props.pane_type === 'archive' && <ArchivePage session={this.findArchivedSession()} />}
          </section>
        </div>
      )
    );
  }
}

function mapStateToProps(state) {
  return {
    pane_type: state.tabReducer.pane_type,
    tabs: state.tabReducer.tabs,
    group: state.groupReducer.group,
    loading: state.groupReducer.loading,
    openTab: state.tabReducer.openTab,
    archivedSessions: state.sessionReducer.archivedSessions
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tabActions, dispatch),
    groupActions: bindActionCreators(groupActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupPage);
