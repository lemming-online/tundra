import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SessionSubPage from './SessionSubPage';
import AdminPage from './AdminPage';
import ResourcesPage from './ResourcesPage';
import CoursePeoplePage from './CoursePeoplePage';
import MeetingPage from './MeetingPage';
import CourseHeader from '../components/CourseHeader';

import * as tabActions from '../actions/tabActions';

// eslint-disable-next-line
class SessionPage extends React.Component {
  constructor(props) {
    super(props);
    this.groupID = this.props.match.params.groupID;
  }

  render() {
    return (
      <div>
        <CourseHeader groupName="fuk" />
        <section>
          {this.props.pane === 'session' && <SessionSubPage />}

          {this.props.pane === 'resources' && <ResourcesPage />}
          {this.props.pane === 'people' && <CoursePeoplePage />}

          {this.props.pane === 'admin' && <AdminPage />}
          {/* TODO: This has to be changed so it's dynamic. Idk how to make that happen, unfortunately. */}
          {/* Probably it will be something like, MeetingPage with props passed down to it.
          Or Maybe MeetingPage will just open for all meetings, using the redux state?
          But probably will have to have its own props pushed b.c. how do you handle different tabs without that?
          Anyway, yeah. Conditonally render based on this.props.pane */}
          {this.props.pane === 'lab3' && <MeetingPage />}
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pane: state.tabReducer.pane,
    tabs: state.tabReducer.tabs,
    groups: state.loginReducer.groups,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tabActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionPage);
