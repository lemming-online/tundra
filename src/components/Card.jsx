import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className="card">
      <div className="box">
        <div className="card-title">
          <strong>{props.title}</strong>
          <i>{props.timestamp != null ? ` - ${props.timestamp}` : ''}</i>
        </div>
        <div className="content">{props.content}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Card;
