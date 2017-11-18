import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className="notification is-warning">
      <div className="content">{props.content}</div>
    </div>
  );
}

Card.propTypes = {
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  timestamp: '',
  title: '',
};

export default Card;
