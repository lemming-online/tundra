import React from 'react';

import SessionEditorComponent from '../components/SessionEditorComponent';
import AnnouncementForm from '../components/AnnouncementForm';

function SessionPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Section Name</h1>
        <div className="announcement form">
          <AnnouncementForm />
        </div>

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
      </div>
    </section>
  );
}

export default SessionPage;
