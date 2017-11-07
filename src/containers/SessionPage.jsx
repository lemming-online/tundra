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
        <h1 className="title">CS 407</h1>
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Class Sessions</a>
            </li>
            <li>
              <a href="/">CS 407</a>
            </li>
            <li className="is-active">
              <a href="/" aria-current="page">
                November 3, 2017 | 12:30pm-2:20pm
              </a>
            </li>
          </ul>
        </nav>
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
