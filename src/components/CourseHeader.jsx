import React from 'react';
import PropTypes from 'prop-types';
import CourseTabs from '../components/CourseTabs';
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
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="level is-mobile">
              <div className="level-left">
                <div className="level-item">
                  <div className="course-info-block">
                    <h1 className="title">{this.props.groupName}</h1>
                    <h2 className="subtitle">{this.props.description}</h2>
                  </div>
                </div>
              </div>

              <div className="level-right is-hidden-mobile" />
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

CourseHeader.propTypes = {
  groupName: PropTypes.string.isRequired,
};

CourseHeader.defaultProps = {
  groupName: 'Loading...',
};

export default CourseHeader;
