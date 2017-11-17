import React from 'react';
import PropTypes from 'prop-types';


function TabCollection(props) {
  return (
    <nav className="tabs is-boxed">

      <div className="container">{props.children}</div>

    </nav>
  );
}

export default TabCollection;
