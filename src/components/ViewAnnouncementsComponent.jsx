import React from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as announcementActions from '../actions/announcementActions';

class ViewAnnouncementsComponent extends React.Component {
  componentDidMount() {
    this.props.actions.getAnnouncements(this.props.match.params.groupID);
  }
  render() {
    return (
      <div className="container">
        <h4 className="title is-4">Announcements</h4>
        <div class="columns">
          <div class="column is-half">
            {this.props.announcements.map((announcement, index) => (
              <article key={index} className="message is-info">
                <div className="message-body">
                  {announcement}
                </div>
              </article>
            ))}
          </div>
        </div>
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
