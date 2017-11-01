import React from 'react';

import SessionEditorComponent from '../components/SessionEditorComponent';
import AnnouncementForm from '../components/AnnouncementForm';
import FeedbackForm from '../components/FeedbackForm';
// eslint-disable-next-line
import DraftCSS from 'draft-js';

function SessionPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Section Name</h1>
        <AnnouncementForm />

        <section className="section">
          <div className="container box">
            <div className="control">
              <input
                className="input is-large"
                type="text"
                placeholder="What do you need help with?"
              />
              <SessionEditorComponent />
            </div>
          </div>
        </section>
        <FeedbackForm />
      </div>
    </section>
  );
}

export default SessionPage;
