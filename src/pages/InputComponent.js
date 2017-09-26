import React from "react"

class InputComponent extends React.Component{
  render() {
    return(
      <div>
        <input
          className="input"
          type="text"
          placeHolder="placeHolder"
          autocomplete="off"
        />
      </div>  
    );
  }
};

export default InputComponent;
