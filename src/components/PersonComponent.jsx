import React from 'react';
import PropTypes from 'prop-types';
import userBlank from '../images/user-blank.png';

import '../../node_modules/bulma-extensions/bulma-tooltip/bulma-tooltip.css';

function PersonComponent(props) {
  return (
    <div className="column is-2-desktop is-2-tablet is-half-mobile">
      <a className={`${props.isMe ? 'button' : 'button is-invisible'}`}>
        <span className="icon">
          <i className="far fa-edit"></i>
        </span>
      </a>
      <div className="instructor-component">
        <figure
          className="image is-64x64 tooltip is-tooltip-right"
          data-tooltip={props.location}
        >
          <img
            alt="instructor avatar"
            className="avatar is-circle"
            src={props.imgUrl ? props.imgUrl : userBlank}
          />
        </figure>
        <p className="has-text-centered hyphenate">{`${props.firstName} ${props.lastName}`}</p>
      </div>
    </div>
  );
}

PersonComponent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  imgUrl: PropTypes.string
};

PersonComponent.defaultProps = {
  firstName: 'Name',
  lastName: 'Unknown',
  imgUrl: userBlank,
};

export default PersonComponent;
