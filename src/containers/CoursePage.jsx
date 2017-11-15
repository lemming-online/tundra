import React from "react";

import InstructorComponent from "../components/InstructorComponent";
import TabCollection from "../components/TabCollection";

<<<<<<< HEAD
=======
import Tabs from "../components/Tabs";
import Tab from "../components/Tab";

>>>>>>> 5113bb2... verbose peopple
import SessionSubPage from "./SessionPage";
import HomePage from "./HomePage";
import UserProfile from "./UserProfile";
import AdminPage from "./AdminPage";
<<<<<<< HEAD
=======
import CoursePeople from "./CoursePeople";
>>>>>>> 5113bb2... verbose peopple

class SessionPage extends React.Component {
  constructor() {
    super();

    this.state = {
      active: "session"
    };
  }
  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <div className="level is-mobile">
                <div className="level-left">
                  <div className="level-item">
                    <div className="course-info-block">
                      <h1 className="title">FCK 420</h1>
                      <h2 className="subtitle">History of Dank</h2>
                      <h3> Section 1 </h3>
                      <h4> MWF 3:30-4:20 </h4>
                    </div>
                  </div>
                </div>

                <div className="level-right is-hidden-mobile">
                  <div className="level-item">
                    <div className="mentor-block has-text-centered">
                      <h3> Your Mentors </h3>
                      <div className="mentor-group">
                        <InstructorComponent
                          name="Jay Hankins"
                          img_url="https://i.imgur.com/uDyELQj.jpg"
                        />
                        <InstructorComponent
                          name="Matt Ess"
                          img_url="https://i.imgur.com/yGciGxj.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-foot">
            <TabCollection>
              <Tabs>
                {/* TODO: refactor these into a single function */}
                <Tab
                  onClick={() => this.setState({ active: "session" })}
                  className={this.state.active === "session" ? "is-active" : ""}
                >
                  Sessions
                </Tab>
                <Tab
                  onClick={() => this.setState({ active: "resources" })}
                  className={
                    this.state.active === "resources" ? "is-active" : ""
                  }
                >
                  Resources
                </Tab>
                <Tab
                  onClick={() => this.setState({ active: "people" })}
                  className={this.state.active === "people" ? "is-active" : ""}
                >
                  People
                </Tab>
                <Tab
                  onClick={() => this.setState({ active: "admin" })}
                  className={this.state.active === "admin" ? "is-active" : ""}
                >
                  Admin
                </Tab>
              </Tabs>
            </TabCollection>
          </div>
        </section>
        <section>
          {this.state.active === "session" && <SessionSubPage />}
          {this.state.active === "resources" && <HomePage />}{" "}
          {/* TODO: placeholder */}
<<<<<<< HEAD
          {this.state.active === "people" && <UserProfile />}{" "}
=======
          {this.state.active === "people" && <CoursePeople />}{" "}
>>>>>>> 5113bb2... verbose peopple
          {/* TODO: placeholder */}
          {this.state.active === "admin" && <AdminPage />}
        </section>
      </div>
    );
  }
}

export default SessionPage;
