import React from 'react';
import io from 'socket.io-client';
import SessionEditorComponent from '../components/SessionEditorComponent';
import AnnouncementForm from '../components/AnnouncementForm';
import FeedbackForm from '../components/FeedbackForm';
import QuestionCard from '../components/QuestionCard';
import ViewAnnouncementsComponent from '../components/ViewAnnouncementsComponent';
import { BASE_URL } from '../api/mischiefClient';

const socket = io(BASE_URL);

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
    socket.on('connect', () => {
      console.log('socket: connected');
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
            <h1 className="title">Lab 3: Beginner Vaporization</h1>
          </div>
        </section>

        <section className="section">
          <AnnouncementForm />
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

export default MeetingPage;
