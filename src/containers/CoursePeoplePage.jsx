import React from 'react';
import PersonComponent from '../components/PersonComponent';
import SectionLevelBar from '../components/SectionLevelBar';
import AddUserToGroupButtons from '../components/AddUserToGroupButtons';

function SessionPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionLevelBar title="Mentors">
          <AddUserToGroupButtons />
        </SectionLevelBar>
        <div className="columns is-multiline is-mobile bordered">
          <PersonComponent />
        </div>
        <SectionLevelBar title="Mentees">
          <AddUserToGroupButtons />
        </SectionLevelBar>
        <div className="columns is-multiline is-mobile bordered">
          <PersonComponent firstName="Stephen" lastName="Supercalifgailisticexpealodocious" />

          <PersonComponent />

          <PersonComponent />
        </div>
      </div>
    </section>
  );
}

export default SessionPage;
