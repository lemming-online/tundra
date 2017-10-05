import React from 'react';
import PropTypes from 'prop-types';

function InputComponent(props) {
  return (

    <div>
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

    <div className="field">
      <label className="label" htmlFor={props.title}>
        {props.title}
      </label>
      <div className="control">
        <input
          id={props.title}
          name={props.name}
          className="input"
          type={props.type}
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
  type: PropTypes.string.isRequired,
};

InputComponent.defaultProps = {
  type: 'text',
};

export default InputComponent;
