import React from 'react';
import SessionEditorComponent from '../components/SessionEditorComponent';
import AnnouncementForm from '../components/AnnouncementForm';
import FeedbackForm from '../components/FeedbackForm';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import DraftCSS from 'draft-js';

import QuestionCard from '../components/QuestionCard';

function SessionPage() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">FCK 420</h1>
            <h2 className="subtitle">History of Dank</h2>
            <h3> Section 1 </h3>
            <h4> MWF 3:30-4:20 </h4>
          </div>
        </div>
        <div className="hero-foot">
          <nav className="tabs is-boxed">
            <div className="container">
              <ul>
                <li className="is-active">
                  <a>Sessions</a>
                </li>
                <li>
                  <a>Resources</a>
                </li>
                <li>
                  <a>People</a>
                </li>
                <li>
                  <a>Admin</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default SessionPage;
