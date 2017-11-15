import React from 'react';
// import { Link } from 'react-router-dom';
// eslint-disable-next-line
import DraftCSS from 'draft-js';

import InstructorComponent from '../components/InstructorComponent';
import TabCollection from '../components/TabCollection';

function SessionPage() {
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
          <TabCollection />
        </div>
      </section>
    </div>
  );
}

export default SessionPage;
