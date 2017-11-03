import React from 'react';
import PropTypes from 'prop-types';

function ClassCard(props) {
  return (
    <div className="tile is-ancestor is-4">
      <div className="tile is-parent">
        <article className="tile is-child box">
          <div className="content">
            <p className="title">
              <a href="/">Course Name</a>
            </p>
            <p className="subtitle">Professor Soandso</p>
          </div>
        </article>
      </div>
    </div>
  );
}

ClassCard.propTypes = {
  title: PropTypes.string.isRequired,
  member_role: PropTypes.string.isRequired,
};

export default ClassCard;
