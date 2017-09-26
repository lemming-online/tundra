import React from "react"

class InputComponent extends React.Component{
  render() {
    return(
      <div>
        <label>{this.props.title}</label>
        <input
          className="input"
          type="text"
          placeholder = {this.props.title}
          autoComplete = "off"
          onChange = {this.props.onChange}
          style={{display: "block"}}
        />
      </div>  
    );
  }
};

export default InputComponent;
