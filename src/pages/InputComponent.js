import React from 'react';

function InputComponent() {
  return (
    <div>
      <label>{this.props.title}</label>
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
