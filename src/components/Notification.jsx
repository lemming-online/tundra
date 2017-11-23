import React from 'react';
// import PropTypes from 'prop-types';

function Banner(props) {
  if (props.warn) {
    return <div className="notification is-danger">{props.warn}</div>;
  } else if (props.succ) {
    return <div className="notification is-success">{props.succ}</div>;
  }
  return null;
}

export default Banner;
