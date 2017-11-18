import React from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from './Card';
import * as announcementActions from '../actions/announcementActions';

class ViewAnnouncementsComponent extends React.Component {
  componentDidMount() {
    this.props.actions.getAnnouncements(this.props.match.params.courseID);
  }
  render() {
    return (
      <div>
        {this.props.announcements.map((announcement) => {
          return <Card content={announcement} />
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    announcements: state.announcementReducer.announcements,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(announcementActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewAnnouncementsComponent));
