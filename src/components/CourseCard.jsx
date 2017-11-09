import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

function CourseCard(props) {
  return (
    <div className="course-card column is-2-desktop is-one-quarter-tablet is-half-mobile">
      <div className="box">
        <div className="content">
          <p className="title">
            <Link to="/session/59fb8a073be55800b7b03546">CS 407</Link>
          </p>
          <p className="subtitle">Professor Dunsmore</p>
        </div>
      </div>
    </div>
  );
}

// CourseCard.propTypes = {
//   courseName: PropTypes.string.isRequired,
//   professorName: PropTypes.string.isRequired,
// };

export default CourseCard;
