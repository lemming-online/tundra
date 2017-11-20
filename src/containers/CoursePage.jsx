import React from 'react';

import InstructorComponent from '../components/InstructorComponent';
import TabCollection from '../components/TabCollection';

import SessionSubPage from './SessionSubPage';
import AdminPage from './AdminPage';
import ResourcesPage from './ResourcesPage';

import CoursePeoplePage from './CoursePeoplePage';
import Tabs from '../components/Tabs';
import Tab from '../components/Tab';

class SessionPage extends React.Component {
  constructor() {
    super();

    this.state = {
      active: 'session',
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
                  onClick={() => this.setState({ active: 'session' })}
                  className={this.state.active === 'session' ? 'is-active' : ''}
                >
                  Session
                </Tab>
                <Tab
                  onClick={() => this.setState({ active: 'resources' })}
                  className={this.state.active === 'resources' ? 'is-active' : ''}
                >
                  Resources
                </Tab>
                <Tab
                  onClick={() => this.setState({ active: 'people' })}
                  className={this.state.active === 'people' ? 'is-active' : ''}
                >
                  People
                </Tab>
                <Tab
                  onClick={() => this.setState({ active: 'admin' })}
                  className={this.state.active === 'admin' ? 'is-active' : ''}
                >
                  Admin
                </Tab>
              </Tabs>
            </TabCollection>
          </div>
        </section>
        <section>
          {this.state.active === 'session' && <SessionSubPage />}

          {this.state.active === 'resources' && <ResourcesPage />}
          {this.state.active === 'people' && <CoursePeoplePage />}

          {this.state.active === 'admin' && <AdminPage />}
        </section>
      </div>
    );
  }
}

export default SessionPage;
