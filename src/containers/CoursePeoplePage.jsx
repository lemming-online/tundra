import React from 'react';
import PersonComponent from '../components/PersonComponent';

class SessionPage extends React.Component {
  constructor() {
    super();

    this.state = {
      active: 'session',
    };
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Mentors</h1>
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
}

export default SessionPage;
