import React from 'react';
import { Link } from 'react-router-dom';

function Tab(props) {
  const isActive = props.isActive ? 'is-active' : '';
  return (
    <li className={isActive}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
}

export default Tab;
