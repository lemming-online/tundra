import React from 'react';
import SessionEditorComponent from '../components/SessionEditorComponent';
import AnnouncementForm from '../components/AnnouncementForm';
import FeedbackForm from '../components/FeedbackForm';
// eslint-disable-next-line
import DraftCSS from 'draft-js';

import QuestionCard from '../components/QuestionCard';

function SessionPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">CS 456</h1>
        <AnnouncementForm />

        <section className="section">
          <div className="container box">
            <div className="control">
              <SessionEditorComponent />
            </div>
          </div>

          <QuestionCard />
        </section>
        <FeedbackForm />
      </div>
    </section>
  );
}

export default SessionPage;
