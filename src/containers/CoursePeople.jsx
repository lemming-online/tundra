import React from "react";

import Tabs from "../components/Tabs";
import Tab from "../components/Tab";
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
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
          </div>
          <h1 class="title">Mentees</h1>
          <div class="columns is-multiline is-mobile bordered">
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent name="Stephen Supercalifgailisticexpealodocious" />
            </div>
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
            <div class="column is-2-desktop is-2-tablet is-half-mobile">
              <PersonComponent />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SessionPage;
