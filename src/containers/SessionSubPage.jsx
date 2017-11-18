import React from 'react';
import SessionEditorComponent from '../components/SessionEditorComponent';
import AnnouncementForm from '../components/AnnouncementForm';
import FeedbackForm from '../components/FeedbackForm';
// eslint-disable-next-line
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
            <h1 className="title">CS 407</h1>
            <h2 className="subtitle">
              November 3, 2017 <br /> 12:30pm-2:20pm
            </h2>
          </div>
        </section>
        <section className="section">
          <AnnouncementForm />
        </section>
        <section className="section">
          <ViewAnnouncementsComponent />
        </section>
        <SessionEditorComponent />
        <section className="section">
          <QuestionCard />
        </section>
        <section className="section">
          <FeedbackForm />
        </section>
      </div>
    );
  }
}

export default SessionPage;
