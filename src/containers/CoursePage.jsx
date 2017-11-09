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
          </div>
        </div>
      </section>
      <div className="container">
        <nav className="breadcrumb is-hidden-mobile" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">My Courses</Link>
            </li>
            <li className="is-active">
              <Link to="/course/1" aria-current="page">
                FCK 420
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SessionPage;
