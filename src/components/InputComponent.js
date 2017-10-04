import React from 'react';
import PropTypes from 'prop-types';

function InputComponent(props) {
  return (
    <div>
      <div className="field">
        <label htmlFor={props.title}>{props.title}</label>
        <input
          id={props.title}
          name={props.name}
          className="input"
          type="text"
          placeholder={props.title}
          autoComplete="off"
          onChange={props.onChange}
          style={{ display: 'block' }}
        />
      </div>
    </div>
  );
}

InputComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputComponent;
