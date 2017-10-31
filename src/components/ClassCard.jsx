import React from 'react';
import PropTypes from 'prop-types';

function ClassCard(props) {
  return (
    <a href="/">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://i.imgur.com/LRrz4oo.png" alt="Placeholder" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.title} </p>
              <p className="subtitle is-6">{props.member_role}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

ClassCard.propTypes = {
  title: PropTypes.string.isRequired,
  member_role: PropTypes.string.isRequired,
};

export default ClassCard;
