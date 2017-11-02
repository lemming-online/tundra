import React from 'react';

import SessionEditorComponent from '../components/SessionEditorComponent';
import AnnouncementForm from '../components/AnnouncementForm';
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
              <SessionEditorComponent />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default SessionPage;
