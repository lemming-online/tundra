import React from 'react';
import PropTypes from 'prop-types';

function InstructorComponent(props) {
  return (
    <div className="instructor-component">
      <figure className="image is-64x64">
        <img alt="instructor avatar" className="avatar is-circle" src={props.img_url} />
      </figure>
      <p className="has-text-centered">{props.name}</p>
    </div>
  );
}

InstructorComponent.propTypes = {
  name: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired,
};

InstructorComponent.defaultProps = {
  name: 'Stephen Fuckenstein',
  img_url: 'https://i.imgur.com/uDyELQj.jpg',
};

export default InstructorComponent;
