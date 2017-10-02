import React from 'react';
import PropTypes from 'prop-types';

function InputComponent(props) {
  return (
    <div>
      <div className="field">
        <label htmlFor={props.title}>{props.title}</label>
        <div className="control">
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
      </div>
    </div>
  );
}

InputComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputComponent;
