import React from "react";
import PersonComponent from "../components/PersonComponent";

class SessionPage extends React.Component {
  constructor() {
    super();

    this.state = {
      active: "session"
    };
  }
  render() {
    return (
      <section class="section">
        <div class="container">
          <h1 class="title">Mentors</h1>
          <div class="columns is-multiline is-mobile bordered">
            <PersonComponent />

            <PersonComponent />
          </div>
          <h1 class="title">Mentees</h1>
          <div class="columns is-multiline is-mobile bordered">
            <PersonComponent
              firstName="Stephen"
              lastName="Supercalifgailisticexpealodocious"
            />

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
