import React from 'react';
import SessionEditorComponent from '../components/SessionEditorComponent';
import AnnouncementForm from '../components/AnnouncementForm';
import FeedbackForm from '../components/FeedbackForm';
import QuestionCard from '../components/QuestionCard';
import ViewAnnouncementsComponent from '../components/ViewAnnouncementsComponent';

class SessionPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionDetails: {},
    };
  }
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

export default SessionPage;
