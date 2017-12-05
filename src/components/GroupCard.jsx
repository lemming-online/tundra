import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import gradient from 'random-gradient';

function GroupCard(props) {
  return (
    <div className="group-card column is-3-desktop is-one-quarter-tablet is-half-mobile">
      <div className="box">
        <div className="content">
          <p className="title">
            <Link to={`/group/${props.groupID}`}>{props.groupName}</Link>
          </p>
          <p className="subtitle">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

GroupCard.propTypes = {
  groupName: PropTypes.string.isRequired,
  professorName: PropTypes.string.isRequired,
};

GroupCard.defaultProps = {
  groupName: 'CS 999',
  professorName: 'Professor Dunsmore',
  groupID: '999',
};

export default GroupCard;
