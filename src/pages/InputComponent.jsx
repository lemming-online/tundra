import React from 'react';

function InputComponent() {
  return (
    <div>
      <label htmlFor={this.props.title}>{this.props.title}</label>
      <input
        id={this.props.title}
        className="input"
        type="text"
        placeholder={this.props.title}
        autoComplete="off"
        onChange={this.props.onChange}
        style={{ display: 'block' }}
      />
    </div>
  );
}

export default InputComponent;
