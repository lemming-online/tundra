import React from 'react';
// import PropTypes from 'prop-types';

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="notification is-danger">{props.warn}</div>;
}

export default WarningBanner;
