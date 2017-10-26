import React from 'react';
// eslint-disable-next-line
import DraftCSS from 'draft-js';

import SessionEditorComponent from '../components/SessionEditorComponent';

function SessionPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Section Name</h1>
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
