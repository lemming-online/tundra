import React from 'react';

function Banner(props) {
  if (props.warn) {
    return (
      <div className="columns">
        <div className="column is-one-quarter"></div>
        <div className="column is-half">
          <div className="notification is-danger">{props.warn}</div>
        </div>
      </div>
    );
  } else if (props.succ) {
    return <div className="notification is-success">{props.succ}</div>;
  }
  return null;
}

export default Banner;