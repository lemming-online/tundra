import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CourseCard(props) {
  return (
    <div className="course-card column is-2-desktop is-one-quarter-tablet is-half-mobile">
      <div className="box">
        <div className="content">
          <p className="title">
            <Link to={`/course/${props.courseID}`}>{props.courseName}</Link>
          </p>
          <p className="subtitle">{props.professorName}</p>
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  courseName: PropTypes.string.isRequired,
  professorName: PropTypes.string.isRequired,
};

CourseCard.defaultProps = {
  courseName: 'CS 407',
  professorName: 'Professor Dunsmore',
  courseID: '59fb8a073be55800b7b03546',
};

export default CourseCard;
