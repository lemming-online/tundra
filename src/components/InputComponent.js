import React from 'react';
import PropTypes from 'prop-types';

function InputComponent(props) {
  return (
    <div>
      <label htmlFor={props.title}>{props.title}</label>
      <input
        id={props.title}
        className="input"
        type="text"
        placeholder={props.title}
        autoComplete="off"
        onChange={props.onChange}
        style={{ display: 'block' }}
      />
    </div>
  );
}

InputComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputComponent;
