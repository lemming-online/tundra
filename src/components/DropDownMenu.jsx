import React from 'react';
import PropTypes from 'prop-types';

function DropDownMenu(props) {
  // const isDroppedDown = this.props.dropdown ? 'dropdown is-active' : 'dropdown';
  return (
    <div className="dropdown is-active">
      <div className="dropdown-trigger">
        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Select your Instructor</span>
          <span className="icon is-small">
            <i className="fa fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {props.list.map(item => <a className="dropdown-item">{item}</a>)}
        </div>
      </div>
    </div>
  );
}

DropDownMenu.propTypes = {
  list: PropTypes.array.isRequired,
};

export default DropDownMenu;
