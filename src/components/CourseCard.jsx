import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

function CourseCard(props) {
  return (
    <div className="tile is-ancestor is-4">
      <div className="tile is-parent">
        <article className="tile is-child box">
          <div className="content">
            <p className="title">
              <Link to="/session/59fb8a073be55800b7b03546">CS 407</Link>
            </p>
            <p className="subtitle">Professor Dunsmore</p>
          </div>
        </article>
      </div>
    </div>
  );
}

// CourseCard.propTypes = {
//   courseName: PropTypes.string.isRequired,
//   professorName: PropTypes.string.isRequired,
// };

export default CourseCard;
