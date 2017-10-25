import React from 'react';
import ClassCardComponent from '../components/ClassCardComponent';

class UserCourseOverview extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };
  }

  handleChange = (event) => {
    const newState = {};
    console.log(event);
    // makes function reusuable, use name attribute as key to set
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  render() {
    return (
      <div className="section">
        <div className="container box">
          <h1 className="title">Course Memberships</h1>
          <div className="columns">
            <div className="column">
              <ClassCardComponent title="CS 407-001" member_role="Student" />
            </div>
            <div className="column">
              <ClassCardComponent title="SOC 455-002" member_role="Mentor" />
            </div>

            <div className="column" />
          </div>
        </div>
      </div>
    );
  }
}

export default UserCourseOverview;
