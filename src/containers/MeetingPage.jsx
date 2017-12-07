import React from 'react';
import SessionEditorComponent from '../components/SessionEditorComponent';
import AnnouncementForm from '../components/AnnouncementForm';
import FeedbackForm from '../components/FeedbackForm';
import QuestionCard from '../components/QuestionCard';
import ViewAnnouncementsComponent from '../components/ViewAnnouncementsComponent';
import SectionLevelBar from '../components/SectionLevelBar';

class MeetingPage extends React.Component {
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
            <SectionLevelBar title="Meeting Title" loading={this.props.loading}>
              <AnnouncementForm />
            </SectionLevelBar>
          </div>
        </section>

        <ViewAnnouncementsComponent />

        <section className="section">
          <SessionEditorComponent />
        </section>

        <section className="section">
          <div className="container">
            <div className="columns is-multiline is-mobile">
              <QuestionCard />
              <QuestionCard />
              <QuestionCard />
            </div>
          </div>
        </section>

        <section className="section">
          <FeedbackForm />
        </section>
      </div>
    );
  }
}

export default MeetingPage;
