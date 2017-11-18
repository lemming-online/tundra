import React from "react";

function TabCollection(props) {
  return (
    <nav className="tabs is-boxed">
      <div className="container">{props.children}</div>
    </nav>
  );
}

export default TabCollection;
