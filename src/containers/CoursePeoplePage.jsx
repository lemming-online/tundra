import React from 'react';
import PersonComponent from '../components/PersonComponent';
import SectionLevelBar from '../components/SectionLevelBar';
import MentorActionButtons from '../components/MentorActionButtons';

function SessionPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionLevelBar title="Mentors">
          <MentorActionButtons />
        </SectionLevelBar>
        <div className="columns is-multiline is-mobile bordered">
          <PersonComponent />

          <PersonComponent />
        </div>
        <h1 className="title">Mentees</h1>
        <div className="columns is-multiline is-mobile bordered">
          <PersonComponent firstName="Stephen" lastName="Supercalifgailisticexpealodocious" />

          <PersonComponent />

          <PersonComponent />

          <PersonComponent />

          <PersonComponent />

          <PersonComponent />

          <PersonComponent />

          <PersonComponent />

          <PersonComponent />

          <PersonComponent />

          <PersonComponent />

          <PersonComponent />

          <PersonComponent />

          <PersonComponent />

          <PersonComponent />
        </div>
      </div>
    </section>
  );
}

export default SessionPage;
