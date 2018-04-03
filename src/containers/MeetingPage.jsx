import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { withRouter } from 'react-router-dom';
import SessionEditorComponent from '../components/SessionEditorComponent';
import AnnouncementForm from '../components/AnnouncementForm';
import FeedbackForm from '../components/FeedbackForm';
import ViewAnnouncementsComponent from '../components/ViewAnnouncementsComponent';
import SectionLevelBar from '../components/SectionLevelBar';
import { getLiveSession, updateQueue } from '../actions/sessionActions';

import Queue from '../components/QueueComponent';

import { BASE_URL } from '../api/mischiefClient';

let socket = null;

class MeetingPage extends React.Component {
  componentDidMount() {
    const groupID = this.props.match.params.groupID;
    this.props.getLiveSession(groupID);
    this.socket();
  }

  socket = () => {
    const groupID = this.props.match.params.groupID;
    socket = io(BASE_URL);

    socket.on('connect', () => {
      console.log('socket: connected');
      socket.emit('join', { group_id: groupID });
      console.log('after join emit');
    });

    socket.on('queue', (data) => {
      console.log('socket queue: ');
      console.log(data.queue);
      this.props.updateQueue(data);
    });

    socket.on('join', (data) => {
      console.log('successfully joined room');
      console.log(data);
    });

    socket.on('disconnect', () => {
      console.log('socket: disconnected');
    });
  };

  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <SectionLevelBar title={this.props.liveSession.session.title} loading={this.props.loading}>
              <div className="field is-grouped is-grouped-right">
                <AnnouncementForm />
                <FeedbackForm />
              </div>
            </SectionLevelBar>
          </div>
        </section>

        <ViewAnnouncementsComponent />
        <section className="section">
          <Queue />
        </section>
        <section className="section">
          <SessionEditorComponent />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    liveSession: state.sessionReducer.liveSession,
    id: state.loginReducer.uid,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLiveSession: (groupID) => {
      dispatch(getLiveSession(groupID));
    },
    updateQueue: (newQueue) => {
      dispatch(updateQueue(newQueue));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MeetingPage));
