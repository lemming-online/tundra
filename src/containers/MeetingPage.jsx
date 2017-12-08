import React from 'react';
import io from 'socket.io-client';
import { withRouter } from 'react-router-dom';
import SessionEditorComponent from '../components/SessionEditorComponent';
import AnnouncementForm from '../components/AnnouncementForm';
import FeedbackForm from '../components/FeedbackForm';
import QuestionCard from '../components/QuestionCard';
import ViewAnnouncementsComponent from '../components/ViewAnnouncementsComponent';
import SectionLevelBar from '../components/SectionLevelBar';
import ViewIfMentor from '../components/ViewIfMentor';
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
    const groupID = this.props.match.params.groupID;
    socket = io(BASE_URL);

    socket.on('connect', () => {
      console.log('socket: connected');
      socket.emit('join', { group_id: groupID });
      console.log('after join emit');
    });

    socket.on('test_response', (data) => {
      console.log('test Response stuff');
      console.log(data);
    });

    socket.on('queue', (data) => {
      console.log('socket queue: ');
      console.log(data.queue);
      console.log('queue is above');
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
            <SectionLevelBar title="Meeting Title" loading={this.props.loading}>
              <div className="field is-grouped is-grouped-right">
                <AnnouncementForm />
                <FeedbackForm />
              </div>
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
      </div>
    );
  }
}

export default withRouter(MeetingPage);
