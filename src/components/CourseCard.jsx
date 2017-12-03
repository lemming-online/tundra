import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CourseCard(props) {
  return (
    <div className="course-card column is-3-desktop is-one-quarter-tablet is-half-mobile">
      <div className="box">
        <div className="content">
          <p className="title">
            <Link to={`/course/${props.groupID}`}>{props.groupName}</Link>
          </p>
          <p className="subtitle">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  groupName: PropTypes.string.isRequired,
  professorName: PropTypes.string.isRequired,
};

CourseCard.defaultProps = {
  groupName: 'CS 407',
  professorName: 'Professor Dunsmore',
  groupID: '59fb8a073be55800b7b03546',
};

export default CourseCard;
