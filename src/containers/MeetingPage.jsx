import React from 'react';
import io from 'socket.io-client';
import { withRouter } from 'react-router-dom';
import SessionEditorComponent from '../components/SessionEditorComponent';
import AnnouncementForm from '../components/AnnouncementForm';
import FeedbackForm from '../components/FeedbackForm';
import QuestionCard from '../components/QuestionCard';
import ViewAnnouncementsComponent from '../components/ViewAnnouncementsComponent';
import SectionLevelBar from '../components/SectionLevelBar';
import { BASE_URL } from '../api/mischiefClient';

let socket = null;

class MeetingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionDetails: {},
    };
  }

  componentDidMount() {
    console.log('helloooo');
    this.socket();
  }

  socket = () => {
    socket = io(BASE_URL);
    socket.on('connect', () => {
      const groupID = this.props.match.params.groupID;
      console.log('socket: connected');
      socket.emit('room', groupID);
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
            <SectionLevelBar
              title="Meeting Title"
              loading={this.props.loading}
              error={this.props.detailError}
            >
              <AnnouncementForm />
            </SectionLevelBar>
          </div>
        </section>

        <ViewAnnouncementsComponent />

        <section className="section">
          <SessionEditorComponent />
        </section>

        <section className="section">
          <div className="container">
            <div className="columns is-multiline is-mobile">
              <QuestionCard />
              <QuestionCard />
              <QuestionCard />
            </div>
          </div>
        </section>

        <section className="section">
          <FeedbackForm />
        </section>
      </div>
    );
  }
}

export default withRouter(MeetingPage);
