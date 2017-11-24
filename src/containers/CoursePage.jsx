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
  render() {
    return (
      <div>
        <CourseHeader />
        <section>
          {this.props.pane === 'session' && <SessionSubPage />}

          {this.props.pane === 'resources' && <ResourcesPage />}
          {this.props.pane === 'people' && <CoursePeoplePage />}

          {this.props.pane === 'admin' && <AdminPage />}
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
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tabActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionPage);
