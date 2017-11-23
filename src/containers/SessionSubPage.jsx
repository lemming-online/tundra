import React from 'react';
import { Link } from 'react-router-dom';
import InstructorMeetingButtons from '../components/InstructorMeetingButtons';

class SessionPage extends React.Component {
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
            <div className="level is-mobile">
              <div className="level-left">
                <div className="level-item">
                  <h1 className="title">
                    Meetings <span className="tag is-danger">LIVE</span>
                  </h1>
                </div>
              </div>

              <div className="level-right">
                <InstructorMeetingButtons />
              </div>
            </div>

            <ul>
              <Link to="/meeting/59fb8a073be55800b7b03546">
                <li>Lab 3: Beginner Vaporization</li>
              </Link>
            </ul>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title">Archive</h1>
            <ul>
              <Link to="/">
                <li>Lab 2: Budding Out</li>
              </Link>
              <Link to="/">
                <li>Lab 1: Lab Preparation</li>
              </Link>
              <Link to="/">
                <li>Lab 0: Hello World</li>
              </Link>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default SessionPage;
