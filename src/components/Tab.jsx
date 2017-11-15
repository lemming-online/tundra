import React from 'react';

function Tab(props) {
  return (
    <li {...props}>
      <a>{props.children}</a>
    </li>
  );
}

export default Tab;
