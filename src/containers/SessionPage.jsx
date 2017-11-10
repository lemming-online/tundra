import React from 'react';
import SessionEditorComponent from '../components/SessionEditorComponent';
import AnnouncementForm from '../components/AnnouncementForm';
import FeedbackForm from '../components/FeedbackForm';
// eslint-disable-next-line
import QuestionCard from '../components/QuestionCard';

class SessionPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionDetails: {},
    };
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">CS 407</h1>
          <h2 className="subtitle">
            November 3, 2017 <br /> 12:30pm-2:20pm
          </h2>
          <nav className="breadcrumb is-hidden-mobile" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">My Courses</a>
              </li>
              <li>
                <a href="/">CS 407</a>
              </li>
              <li className="is-active">
                <a href="/" aria-current="page">
                  Today's Session
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
}

export default SessionPage;
