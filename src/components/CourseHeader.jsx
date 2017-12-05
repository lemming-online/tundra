import React from 'react';

import CourseTabs from '../components/CourseTabs';
import InstructorComponent from '../components/InstructorComponent';
// import gradient from 'random-gradient';

class CourseHeader extends React.Component {
  constructor(props) {
    super(props);
    // this.props = props;
    this.state = {
      active: 'session',
    };

    // this.grad = name => ({ background: gradient(this.props.groupID) });
  }

  render() {
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="level is-mobile">
              <div className="level-left">
                <div className="level-item">
                  <div className="course-info-block">
                    <h1 className="title">{this.props.groupName}</h1>
                    <h2 className="subtitle">History of Dank</h2>
                    <h3> Group 1 </h3>
                    <h4> MWF 3:30-4:20 </h4>
                  </div>
                </div>
              </div>

              <div className="level-right is-hidden-mobile">
                <div className="level-item">
                  <div className="mentor-block has-text-centered">
                    <h3> Group Leaders </h3>
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
          <CourseTabs>{null}</CourseTabs>
        </div>
      </section>
    );
  }
}

export default CourseHeader;
