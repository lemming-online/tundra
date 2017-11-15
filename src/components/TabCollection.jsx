import React from 'react';
import PropTypes from 'prop-types';

function TabCollection(props) {
  return (
    <nav className="tabs is-boxed">
      <div className="container">
        <ul>
          <li className="is-active">
            <a>Sessions</a>
          </li>
          <li>
            <a>Resources</a>
          </li>
          <li>
            <a>People</a>
          </li>
          <li>
            <a>Admin</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TabCollection;
