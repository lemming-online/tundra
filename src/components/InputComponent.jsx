import React from 'react';
import PropTypes from 'prop-types';

function InputComponent(props) {
  const iconClass = props.type !== 'text' ? 'has-icons-left' : '';
  function icon() {
    if (props.type === 'email') {
      return (
        <span className="icon is-small is-left">
          <i className="fa fa-envelope" />
        </span>
      );
    }

    if (props.type === 'password') {
      return (
        <span className="icon is-small is-left">
          <i className="fa fa-lock" />
        </span>
      );
    }

    return null;
  }
  return (
    <div className="field">
      <label className="label" htmlFor={props.title}>
        {props.title}
      </label>
      <div className={`control ${iconClass}`}>
        {icon(props)}
        <input
          id={props.title}
          name={props.name}
          className="input"
          type={props.type}
          autoComplete="off"
          onChange={props.onChange}
          style={{ display: 'block' }}
          {...props}
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
